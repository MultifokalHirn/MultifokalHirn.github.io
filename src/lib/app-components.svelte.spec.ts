import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { page as browserPage } from 'vitest/browser';
import { tick } from 'svelte';
import Footer from '$lib/_includes/footer.svelte';
import Head from '$lib/_includes/head.svelte';
import SiteHeader from '$lib/_includes/header.svelte';
import LegacyHtmlContent from '$lib/components/LegacyHtmlContent.svelte';
import NotFoundMessage from '$lib/components/NotFoundMessage.svelte';
import RedirectPage from '$lib/components/RedirectPage.svelte';
import { site } from '$lib/site';
import { render } from 'vitest-browser-svelte';
import SvgSymbolHarness from '../test/fixtures/SvgSymbolHarness.svelte';

const { mockPageState, mockResolve } = vi.hoisted(() => ({
	mockPageState: {
		url: new URL('https://multifokalhirn.test/'),
		status: 200
	},
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
	base: '',
	resolve: mockResolve
}));

vi.mock('$app/state', () => ({
	page: mockPageState
}));

const initialBody = document.body.innerHTML;
const initialHead = document.head.innerHTML;

function getMetaContent(selector: string) {
	return document.head.querySelector<HTMLMetaElement>(selector)?.content ?? null;
}

function getNormalizedBodyText() {
	return document.body.textContent?.replace(/\s+/g, ' ').trim() ?? '';
}

beforeEach(() => {
	mockPageState.status = 200;
	mockPageState.url = new URL('https://multifokalhirn.test/');
});

afterEach(() => {
	document.body.innerHTML = initialBody;
	document.head.innerHTML = initialHead;
});

describe('shared app components', () => {
	it('renders head metadata with defaults', () => {
		render(Head);

		expect(document.title).toBe(site.title);
		expect(getMetaContent('meta[name="description"]')).toBe(site.description);
		expect(getMetaContent('meta[name="robots"]')).toBe('index,follow');
		expect(document.head.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
			`${site.url}/`
		);
		expect(getMetaContent('meta[name="keywords"]')).toBeNull();
	});

	it('renders head metadata with custom title, keywords, and an absolute path', () => {
		render(Head, {
			title: 'Posts',
			description: 'Published posts.',
			tags: ['svelte', 'testing'],
			path: 'https://example.com/custom-path',
			robots: 'noindex'
		});

		expect(document.title).toBe('Posts | Lennard Wolf');
		expect(getMetaContent('meta[name="description"]')).toBe('Published posts.');
		expect(getMetaContent('meta[name="keywords"]')).toBe('svelte, testing');
		expect(getMetaContent('meta[name="robots"]')).toBe('noindex');
		expect(document.head.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
			'https://example.com/custom-path'
		);
	});

	it('keeps the base site title unchanged when the explicit title matches it', () => {
		render(Head, {
			title: site.title,
			path: '/same-title'
		});

		expect(document.title).toBe(site.title);
		expect(document.head.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
			`${site.url}/same-title`
		);
	});

	it('renders the site header with the current page highlighted', async () => {
		mockPageState.url = new URL('https://multifokalhirn.test/resume');

		render(SiteHeader);

		expect(document.querySelector('.website-title')?.textContent).toBe(site.description);
		expect(document.querySelector('a[href="/"]')?.textContent).toContain(site.description);
		expect(document.querySelector('a[aria-current="page"]')?.textContent?.trim()).toBe('CV');
		expect(document.querySelector('button')?.textContent).toContain('Menu');

		await browserPage.getByRole('button', { name: 'Menu' }).click();
		expect(document.body.textContent).toContain('Navigate');
		expect(document.querySelector('.mobile-link-title')?.textContent).toBe('Home');

		document.querySelector<HTMLButtonElement>('.ui-drawer-panel .close')?.click();
		await tick();
		expect(document.querySelector('.mobile-drawer-nav')).toBeNull();

		await browserPage.getByRole('button', { name: 'Menu' }).click();
		document.querySelector<HTMLAnchorElement>('.mobile-link')?.click();
		await tick();
		expect(document.querySelector('.mobile-drawer-nav')).toBeNull();
	});

	it('renders the footer with and without an optional description', () => {
		render(Footer, {
			author: 'Lennard Wolf',
			description: 'Testing setup reference footer.'
		});

		expect(getNormalizedBodyText()).toContain('Testing setup reference footer.');
		expect(getNormalizedBodyText()).toContain(`© ${new Date().getFullYear()}`);
		expect(getNormalizedBodyText()).toContain('Lennard Wolf');

		document.body.innerHTML = initialBody;

		render(Footer, { author: 'Lennard Wolf' });

		expect(document.querySelector('.text-secondary')).toBeNull();
		expect(getNormalizedBodyText()).toContain(`© ${new Date().getFullYear()}`);
		expect(getNormalizedBodyText()).toContain('Lennard Wolf');

		document.body.innerHTML = initialBody;

		render(Footer);

		expect(getNormalizedBodyText()).toContain(`© ${new Date().getFullYear()}`);
		expect(getNormalizedBodyText()).toContain('Lennard Wolf');
	});

	it('renders the not-found message with default and custom statuses', () => {
		render(NotFoundMessage);

		expect(document.body.textContent).toContain('404');
		expect(document.querySelector('a')?.getAttribute('href')).toBe('/');

		document.body.innerHTML = initialBody;

		render(NotFoundMessage, { status: 500 });

		expect(document.body.textContent).toContain('500');
	});

	it('renders redirect metadata with default props', () => {
		render(RedirectPage, { to: '/resume' });

		expect(document.title).toBe('Redirecting | Lennard Wolf');
		expect(document.head.querySelector('meta[http-equiv="refresh"]')?.getAttribute('content')).toBe(
			'0; url=/resume'
		);
		expect(document.body.textContent).toContain('/resume');
	});

	it('renders redirect metadata with custom props', () => {
		render(RedirectPage, {
			to: 'https://example.com',
			title: 'External redirect',
			description: 'Leaving the site.',
			path: '/jump'
		});

		expect(document.title).toBe('External redirect | Lennard Wolf');
		expect(getMetaContent('meta[name="description"]')).toBe('Leaving the site.');
		expect(document.head.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
			`${site.url}/jump`
		);
		expect(document.body.textContent).toContain('https://example.com');
	});

	it('renders legacy HTML content without repo-path rewrites', () => {
		render(LegacyHtmlContent, {
			html: '<a href="./README.md">README</a><p>Legacy content</p>'
		});

		expect(document.body.textContent).toContain('Legacy content');
		expect(document.querySelector('a')?.getAttribute('href')).toBe('./README.md');
	});

	it('rewrites legacy HTML links, images, and tags when a repo path is provided', () => {
		render(LegacyHtmlContent, {
			html: `
				<!--more-->
				<a href="./README.md">README</a>
				<a href=".github/workflows/ci.yml">CI</a>
				<a href="/MultifokalHirn/demo/blob/main/file.ts">File</a>
				<img src="/MultifokalHirn/demo/image.png" alt="Preview" />
				<a href="/tag/python">python</a>
			`,
			repoPath: 'MultifokalHirn/demo'
		});

		const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('a'));
		const image = document.querySelector<HTMLImageElement>('img');

		expect(links[0]?.href).toBe('https://github.com/MultifokalHirn/demo/blob/main/README.md');
		expect(links[1]?.href).toBe(
			'https://github.com/MultifokalHirn/demo/blob/main/.github/workflows/ci.yml'
		);
		expect(links[2]?.href).toBe('https://github.com/MultifokalHirn/demo/blob/main/file.ts');
		expect(links[3]?.href).toContain('/tags/python');
		expect(image?.src).toBe('https://github.com/MultifokalHirn/demo/image.png');
		expect(document.body.innerHTML).not.toContain('<!--more-->');
	});

	it('renders the SVG symbol wrapper and its children snippet', () => {
		render(SvgSymbolHarness);

		const symbol = document.querySelector('symbol');
		const path = symbol?.querySelector('path');

		expect(symbol?.getAttribute('id')).toBe('test-icon');
		expect(symbol?.getAttribute('viewBox')).toBe('0 0 16 16');
		expect(path?.getAttribute('d')).toBe('M0 0h16v16H0z');
	});
});
