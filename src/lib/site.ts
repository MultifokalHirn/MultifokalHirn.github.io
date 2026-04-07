export interface NavItem {
	title: string;
	href: string;
	isHome?: boolean;
}

export interface SeoMetadata {
	title?: string;
	description?: string;
	path?: string;
	robots?: string;
}

export const site = {
	title: 'Lennard Wolf',
	description: "Lennard Wolf's Homepage",
	author: 'Lennard Wolf',
	url: 'https://multifokalhirn.github.io'
} as const;

export const navigation = [
	{ title: '~', href: '/', isHome: true },
	{ title: 'CV', href: '/resume' },
	{ title: 'GitHub', href: '/github' },
	{ title: 'LinkedIn', href: '/linkedin' }
] as const satisfies NavItem[];

export function formatDate(date: string): string {
	return new Intl.DateTimeFormat('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
		timeZone: 'UTC'
	}).format(new Date(`${date}T00:00:00Z`));
}

export function slugifyTag(tag: string): string {
	return tag
		.toLowerCase()
		.normalize('NFKD')
		.replace(/[^\p{L}\p{N}]+/gu, '-')
		.replace(/^-+|-+$/g, '');
}
