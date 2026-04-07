import { describe, expect, it } from 'vitest';
import * as publicComponents from '$lib';
import { createPaginationTokens, getAccentValue, getInitials, withBasePath } from './ui';

describe('ui helpers', () => {
	it('returns accent colors by token name', () => {
		expect(getAccentValue('blue')).toBe('#1d4ed8');
		expect(getAccentValue('violet')).toBe('#8b5cf6');
	});

	it('builds initials from names and falls back for blank values', () => {
		expect(getInitials('Lennard Wolf')).toBe('LW');
		expect(getInitials('lennard')).toBe('L');
		expect(getInitials('   ')).toBe('?');
	});

	it('builds pagination tokens across short, leading, middle, and trailing ranges', () => {
		expect(createPaginationTokens(2, 5)).toEqual([1, 2, 3, 4, 5]);
		expect(createPaginationTokens(2, 12)).toEqual([1, 2, 3, 4, 5, 'ellipsis', 12]);
		expect(createPaginationTokens(6, 12)).toEqual([1, 'ellipsis', 5, 6, 7, 'ellipsis', 12]);
		expect(createPaginationTokens(11, 12)).toEqual([1, 'ellipsis', 8, 9, 10, 11, 12]);
		expect(createPaginationTokens(0, 0)).toEqual([1]);
	});

	it('prefixes root-relative links with the deployed base path', () => {
		expect(withBasePath('/posts', '/site')).toBe('/site/posts');
		expect(withBasePath('https://example.com', '/site')).toBe('https://example.com');
	});
});

describe('public UI exports', () => {
	it('re-exports every new component from $lib', () => {
		expect(publicComponents.Avatar).toBeDefined();
		expect(publicComponents.Breadcrumbs).toBeDefined();
		expect(publicComponents.Button).toBeDefined();
		expect(publicComponents.Card).toBeDefined();
		expect(publicComponents.CodeSnippet).toBeDefined();
		expect(publicComponents.Drawer).toBeDefined();
		expect(publicComponents.FocusRing).toBeDefined();
		expect(publicComponents.Image).toBeDefined();
		expect(publicComponents.Modal).toBeDefined();
		expect(publicComponents.Pagination).toBeDefined();
		expect(publicComponents.Skeleton).toBeDefined();
		expect(publicComponents.Spotlight).toBeDefined();
		expect(publicComponents.TagPill).toBeDefined();
		expect(publicComponents.Toggle).toBeDefined();
		expect(publicComponents.Tooltip).toBeDefined();
	});
});
