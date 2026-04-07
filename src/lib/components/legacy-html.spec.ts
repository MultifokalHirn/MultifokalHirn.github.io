import { describe, expect, it } from 'vitest';
import { normalizeLegacyHtml } from './legacy-html';

describe('normalizeLegacyHtml', () => {
	it('removes the excerpt marker without rewriting links when no repo path is provided', () => {
		expect(normalizeLegacyHtml('<!--more--><a href="./README.md">README</a>')).toBe(
			'<a href="./README.md">README</a>'
		);
	});

	it('rewrites repository-relative links, images, and tag paths for GitHub-hosted legacy HTML', () => {
		expect(
			normalizeLegacyHtml(
				[
					'<!--more-->',
					'<a href="./README.md">README</a>',
					'<a href=".github/workflows/ci.yml">CI</a>',
					'<a href="/MultifokalHirn/demo/blob/main/file.ts">File</a>',
					'<img src="/MultifokalHirn/demo/image.png" alt="Preview" />',
					'<a href="/tag/python">python</a>'
				].join(''),
				'MultifokalHirn/demo'
			)
		).toBe(
			[
				'<a href="https://github.com/MultifokalHirn/demo/blob/main/README.md">README</a>',
				'<a href="https://github.com/MultifokalHirn/demo/blob/main/.github/workflows/ci.yml">CI</a>',
				'<a href="https://github.com/MultifokalHirn/demo/blob/main/file.ts">File</a>',
				'<img src="https://github.com/MultifokalHirn/demo/image.png" alt="Preview" />',
				'<a href="/tags/python">python</a>'
			].join('')
		);
	});
});
