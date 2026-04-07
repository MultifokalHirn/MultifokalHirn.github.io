import { describe, expect, it } from 'vitest';
import { allTags, getPostBySlug, getPostsByTagSlug, getTagBySlug, publishedPosts } from './posts';

describe('posts.ts', () => {
	it('sorts posts newest-first and exposes a unique sorted tag list', () => {
		expect(publishedPosts.map((post) => post.slug)).toEqual([
			'enterprise-fizzbuzz-dependency-inversion-and-capitalism',
			'my-dotfiles',
			'python-project-template'
		]);

		expect(allTags).toEqual([...allTags].sort((left, right) => left.localeCompare(right)));
		expect(new Set(allTags).size).toBe(allTags.length);
	});

	it('finds posts by slug and returns null for unknown slugs', () => {
		expect(getPostBySlug('my-dotfiles')?.title).toBe('My .dotfiles');
		expect(getPostBySlug('missing-post')).toBeNull();
	});

	it('resolves tags by slug and filters posts for a matching tag slug', () => {
		expect(getTagBySlug('software-architecture')).toBe('software architecture');
		expect(getTagBySlug('missing-tag')).toBeNull();

		expect(getPostsByTagSlug('python').map((post) => post.slug)).toEqual([
			'python-project-template'
		]);
		expect(getPostsByTagSlug('dependency-inversion').map((post) => post.slug)).toEqual([
			'enterprise-fizzbuzz-dependency-inversion-and-capitalism'
		]);
	});
});
