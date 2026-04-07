import { describe, expect, it } from 'vitest';
import { formatDate, navigation, site, slugifyTag } from './site';

describe('site.ts', () => {
	it('exports the site metadata and navigation used by the app shell', () => {
		expect(site).toEqual({
			title: 'Lennard Wolf',
			description: "Lennard Wolf's Homepage",
			author: 'Lennard Wolf',
			url: 'https://multifokalhirn.github.io'
		});

		expect(navigation).toEqual([
			{ title: '~', href: '/', isHome: true },
			{ title: 'CV', href: '/resume' }
		]);
	});

	it('formats dates in UTC and slugifies tags with punctuation and accents', () => {
		expect(formatDate('2023-12-08')).toBe('Dec 8, 2023');
		expect(slugifyTag('Software Architecture')).toBe('software-architecture');
		expect(slugifyTag('Café & Résumé')).toBe('cafe-re-sume');
	});
});
