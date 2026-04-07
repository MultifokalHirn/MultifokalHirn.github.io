import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { PageLoadEvent as PostPageLoadEvent } from './posts/[slug]/$types';
import type { PageLoadEvent as TagPageLoadEvent } from './tags/[tag]/$types';

const { errorMock } = vi.hoisted(() => ({
	errorMock: vi.fn((status: number, message: string) => {
		throw new Error(`${status}:${message}`);
	})
}));

vi.mock('@sveltejs/kit', () => ({
	error: errorMock
}));

import { prerender } from './+layout';
import { load as loadPostPage } from './posts/[slug]/+page';
import { load as loadTagPage } from './tags/[tag]/+page';

const noopTracing = {
	enabled: false,
	root: {},
	current: {}
} as PostPageLoadEvent['tracing'];

function createPostLoadEvent(slug: string): PostPageLoadEvent {
	return {
		params: { slug },
		route: { id: '/posts/[slug]' },
		url: new URL(`https://multifokalhirn.test/posts/${slug}`),
		fetch,
		data: null,
		setHeaders: () => {},
		parent: async () => ({}),
		depends: () => {},
		untrack: <T>(fn: () => T) => fn(),
		tracing: noopTracing
	};
}

function createTagLoadEvent(tag: string): TagPageLoadEvent {
	return {
		params: { tag },
		route: { id: '/tags/[tag]' },
		url: new URL(`https://multifokalhirn.test/tags/${tag}`),
		fetch,
		data: null,
		setHeaders: () => {},
		parent: async () => ({}),
		depends: () => {},
		untrack: <T>(fn: () => T) => fn(),
		tracing: noopTracing
	};
}

describe('route loaders', () => {
	beforeEach(() => {
		errorMock.mockClear();
	});

	it('exports prerender for the app layout', () => {
		expect(prerender).toBe(true);
	});

	it('returns the requested post for a known slug', () => {
		expect(loadPostPage(createPostLoadEvent('my-dotfiles')).post.title).toBe('My .dotfiles');
		expect(errorMock).not.toHaveBeenCalled();
	});

	it('throws a 404 for an unknown post slug', () => {
		expect(() => loadPostPage(createPostLoadEvent('missing-post'))).toThrow('404:Post not found');
		expect(errorMock).toHaveBeenCalledWith(404, 'Post not found');
	});

	it('returns the matching tag and posts for a known tag slug', () => {
		expect(loadTagPage(createTagLoadEvent('python'))).toEqual({
			tag: 'python',
			posts: expect.arrayContaining([expect.objectContaining({ slug: 'python-project-template' })])
		});
		expect(errorMock).not.toHaveBeenCalled();
	});

	it('throws a 404 for an unknown tag slug', () => {
		expect(() => loadTagPage(createTagLoadEvent('missing-tag'))).toThrow('404:Tag not found');
		expect(errorMock).toHaveBeenCalledWith(404, 'Tag not found');
	});
});
