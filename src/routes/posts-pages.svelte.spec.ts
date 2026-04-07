import { afterEach, describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { getPostsByTagSlug, publishedPosts } from '$lib/content/posts';
import PostsPage from './posts/+page.svelte';
import PostPage from './posts/[slug]/+page.svelte';
import TagPage from './tags/[tag]/+page.svelte';

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

const initialBody = document.body.innerHTML;
const initialHead = document.head.innerHTML;

function getNormalizedBodyText() {
	return document.body.textContent?.replace(/\s+/g, ' ').trim() ?? '';
}

afterEach(() => {
	document.body.innerHTML = initialBody;
	document.head.innerHTML = initialHead;
});

describe('posts and tag pages', () => {
	it('renders the published posts index', () => {
		render(PostsPage);

		expect(document.title).toBe('Posts | Lennard Wolf');
		expect(document.querySelectorAll('a[href^="/posts/"]')).toHaveLength(publishedPosts.length);
		expect(document.body.textContent).toContain(publishedPosts[0]?.title ?? '');
	});

	for (const post of publishedPosts) {
		it(`renders the published post page for ${post.slug}`, () => {
			render(PostPage, {
				data: {
					post
				}
			});

			expect(document.title).toBe(`${post.title} | Lennard Wolf`);
			expect(document.querySelector('h2')?.textContent).toBe(post.title);
			expect(document.querySelector('time')?.getAttribute('datetime')).toBe(post.date);
			expect(getNormalizedBodyText().length).toBeGreaterThan(100);
		});
	}

	it('renders the post page without a tag list when a post has no tags', () => {
		render(PostPage, {
			data: {
				post: {
					...publishedPosts[0],
					tags: []
				}
			}
		});

		expect(document.querySelectorAll('code.highligher-rouge')).toHaveLength(0);
	});

	it('renders a tag page and links back to the tagged posts', () => {
		render(TagPage, {
			data: {
				tag: 'python',
				posts: getPostsByTagSlug('python')
			}
		});

		expect(document.title).toBe('Tag: python | Lennard Wolf');
		expect(document.querySelector('h1')?.textContent).toBe('Tag: python');
		expect(document.querySelector('a[href="/posts/python-project-template"]')?.textContent).toBe(
			'[OUTDATED] Python Project Template'
		);
	});

	it('renders a tag page with no posts for the tag', () => {
		render(TagPage, {
			data: {
				tag: 'missing',
				posts: []
			}
		});

		expect(document.title).toBe('Tag: missing | Lennard Wolf');
		expect(document.querySelectorAll('li')).toHaveLength(0);
	});
});
