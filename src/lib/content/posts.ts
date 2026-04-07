import type { Component } from 'svelte';
import DotfilesPost from '$lib/content/posts/DotfilesPost.svelte';
import EnterpriseFizzBuzzPost from '$lib/content/posts/EnterpriseFizzBuzzPost.svelte';
import PythonProjectTemplatePost from '$lib/content/posts/PythonProjectTemplatePost.svelte';
import { slugifyTag } from '$lib/site';

export interface BlogPost {
	title: string;
	slug: string;
	date: string;
	description: string;
	excerpt: string;
	tags: string[];
	component: Component<Record<string, never>>;
	path: string;
}

const posts: BlogPost[] = [
	{
		title: '[DRAFT] Enterprise FizzBuzz, Dependency Inversion, and Capitalism',
		slug: 'enterprise-fizzbuzz-dependency-inversion-and-capitalism',
		date: '2023-12-08',
		description: 'A preamble about FizzBuzz, overengineering, and dependency inversion.',
		excerpt: 'A preamble about FizzBuzz, overengineering, and dependency inversion.',
		tags: [
			'programming',
			'software architecture',
			'dependency inversion',
			'dependency injection',
			'inversion of control',
			'enterprise fizzbuzz',
			'capitalism'
		],
		component: EnterpriseFizzBuzzPost,
		path: '/posts/enterprise-fizzbuzz-dependency-inversion-and-capitalism'
	},
	{
		title: 'My .dotfiles',
		slug: 'my-dotfiles',
		date: '2023-12-06',
		description: 'Notes on the dotfiles repository and the machine setup it documents.',
		excerpt: 'Notes on the dotfiles repository and the machine setup it documents.',
		tags: ['dotfile', 'configuration management', 'shell'],
		component: DotfilesPost,
		path: '/posts/my-dotfiles'
	},
	{
		title: '[OUTDATED] Python Project Template',
		slug: 'python-project-template',
		date: '2023-11-29',
		description: 'An outdated README-driven overview of the Python project template repository.',
		excerpt: 'An outdated README-driven overview of the Python project template repository.',
		tags: ['python'],
		component: PythonProjectTemplatePost,
		path: '/posts/python-project-template'
	}
].sort((left, right) => right.date.localeCompare(left.date));

export const publishedPosts = posts;

export const allTags = [...new Set(posts.flatMap((post) => post.tags))].sort((left, right) =>
	left.localeCompare(right)
);

export function getPostBySlug(slug: string): BlogPost | null {
	return posts.find((post) => post.slug === slug) ?? null;
}

export function getTagBySlug(tagSlug: string): string | null {
	return allTags.find((tag) => slugifyTag(tag) === tagSlug) ?? null;
}

export function getPostsByTagSlug(tagSlug: string): BlogPost[] {
	return posts.filter((post) => post.tags.some((tag) => slugifyTag(tag) === tagSlug));
}
