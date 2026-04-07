<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { expect, within } from 'storybook/test';
	import LegacyHtmlContent from './LegacyHtmlContent.svelte';

	const githubHtml = [
		'<!--more-->',
		'<a href="./README.md">README</a>',
		'<a href=".github/workflows/ci.yml">CI</a>',
		'<a href="/MultifokalHirn/demo/blob/main/file.ts">File</a>',
		'<img src="/MultifokalHirn/demo/image.png" alt="Preview" />',
		'<a href="/tag/python">python</a>'
	].join('');

	const { Story } = defineMeta({
		title: 'App/Legacy HTML Content',
		component: LegacyHtmlContent,
		tags: ['autodocs']
	});
</script>

<Story
	name="Inline Content"
	args={{
		html: '<a href="./README.md">README</a><p>Legacy content</p>'
	}}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const link = canvasElement.querySelector('a');

		await expect(canvas.getByText('Legacy content')).toBeInTheDocument();
		expect(link?.getAttribute('href')).toBe('./README.md');
	}}
/>

<Story
	name="Repository Rewrites"
	args={{
		html: githubHtml,
		repoPath: 'MultifokalHirn/demo'
	}}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const links = Array.from(canvasElement.querySelectorAll('a'));
		const image = canvasElement.querySelector('img');

		await expect(canvas.getByRole('link', { name: 'README' })).toBeInTheDocument();
		expect(links[0]?.getAttribute('href')).toBe(
			'https://github.com/MultifokalHirn/demo/blob/main/README.md'
		);
		expect(links[1]?.getAttribute('href')).toBe(
			'https://github.com/MultifokalHirn/demo/blob/main/.github/workflows/ci.yml'
		);
		expect(links[2]?.getAttribute('href')).toBe(
			'https://github.com/MultifokalHirn/demo/blob/main/file.ts'
		);
		expect(links[3]?.getAttribute('href')).toBe('/tags/python');
		expect(image?.getAttribute('src')).toBe('https://github.com/MultifokalHirn/demo/image.png');
		expect(canvasElement.innerHTML).not.toContain('<!--more-->');
	}}
/>
