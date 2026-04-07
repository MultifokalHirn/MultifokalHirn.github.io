import { afterEach, describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';

const { mockResolve } = vi.hoisted(() => ({
	mockResolve(path: string, params?: Record<string, string>) {
		if (path === '/posts/[slug]') {
			return `/posts/${params?.slug ?? ''}`;
		}

		if (path === '/tags/[tag]') {
			return `/tags/${params?.tag ?? ''}`;
		}

		return path;
	}
}));

vi.mock('$app/paths', () => ({
	resolve: mockResolve
}));

vi.mock('$lib/content/posts', async () => {
	const actual = await vi.importActual<typeof import('$lib/content/posts')>('$lib/content/posts');

	return {
		...actual,
		publishedPosts: []
	};
});

import PostsPage from './posts/+page.svelte';

const initialBody = document.body.innerHTML;
const initialHead = document.head.innerHTML;

afterEach(() => {
	document.body.innerHTML = initialBody;
	document.head.innerHTML = initialHead;
});

describe('posts index empty state', () => {
	it('renders the empty-state message when there are no posts', () => {
		render(PostsPage);

		expect(document.title).toBe('Posts | Lennard Wolf');
		expect(document.body.textContent).toContain('No posts yet.');
	});
});
