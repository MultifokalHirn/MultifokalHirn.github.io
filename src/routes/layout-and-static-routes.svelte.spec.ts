import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';
import LayoutHarness from '../test/fixtures/LayoutHarness.svelte';
import ErrorPage from './+error.svelte';
import RootPage from './+page.svelte';
import NotFoundPage from './404/+page.svelte';
import AboutPage from './about/+page.svelte';
import BlogPage from './blog/+page.svelte';
import CvPage from './cv/+page.svelte';
import DemoPage from './demo/+page.svelte';
import DemoPlaywrightPage from './demo/playwright/+page.svelte';
import GithubPage from './github/+page.svelte';
import HomePage from './home/+page.svelte';
import LinkedinPage from './linkedin/+page.svelte';
import ResumePage from './resume/+page.svelte';

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

beforeEach(() => {
	mockPageState.status = 200;
	mockPageState.url = new URL('https://multifokalhirn.test/');
});

afterEach(() => {
	document.body.innerHTML = initialBody;
	document.head.innerHTML = initialHead;
});

describe('layout and static route components', () => {
	it('renders the app layout and its child content', () => {
		render(LayoutHarness);

		expect(document.body.textContent).toContain('Layout child');
		expect(document.querySelector('main[aria-label="Content"]')).not.toBeNull();
		expect(document.querySelector('#site-footer')).not.toBeNull();
	});

	it('renders the home page and its embedded home content', () => {
		render(RootPage);

		expect(document.title).toBe('Lennard Wolf');
		expect(document.querySelector('img[alt="Portrait of Lennard Wolf"]')).not.toBeNull();
		expect(document.body.textContent).toContain('Hello, my name is Lennard Wolf');
		expect(document.querySelector('a[href="/resume"]')?.textContent).toContain('Resume');
	});

	it('renders the framework error page for both 404 and 500 states', () => {
		mockPageState.status = 404;
		mockPageState.url = new URL('https://multifokalhirn.test/missing');

		render(ErrorPage);

		expect(document.title).toBe('404 | Lennard Wolf');
		expect(document.body.textContent).toContain('404');

		document.body.innerHTML = initialBody;
		document.head.innerHTML = initialHead;

		mockPageState.status = 500;
		mockPageState.url = new URL('https://multifokalhirn.test/error');

		render(ErrorPage);

		expect(document.title).toBe('500 | Lennard Wolf');
		expect(document.body.textContent).toContain('500');
	});

	it('renders the dedicated 404 route', () => {
		render(NotFoundPage);

		expect(document.title).toBe('404 | Lennard Wolf');
		expect(document.body.textContent).toContain('404');
	});

	it('renders the demo routes', () => {
		render(DemoPage);

		expect(document.title).toBe('Demo | Lennard Wolf');
		expect(document.querySelector('a[href="/demo/playwright"]')?.textContent).toBe('playwright');

		document.body.innerHTML = initialBody;
		document.head.innerHTML = initialHead;

		render(DemoPlaywrightPage);

		expect(document.title).toBe('Playwright Demo | Lennard Wolf');
		expect(document.querySelector('h1')?.textContent).toBe('Playwright e2e test demo');
	});

	it('renders the resume route', () => {
		render(ResumePage);

		const iframe = document.querySelector('iframe');

		expect(document.title).toBe('CV | Lennard Wolf');
		expect(iframe?.getAttribute('title')).toBe('Lennard Wolf Resume');
		expect(iframe?.getAttribute('src')).toContain('.pdf');
	});

	it('renders all redirect pages with the expected target URLs', () => {
		const redirects = [
			{
				component: AboutPage,
				title: 'Redirecting',
				target: '/'
			},
			{
				component: BlogPage,
				title: 'Redirecting',
				target: '/posts'
			},
			{
				component: CvPage,
				title: 'Redirecting',
				target: '/resume'
			},
			{
				component: GithubPage,
				title: 'GitHub',
				target: 'https://www.github.com/MultifokalHirn'
			},
			{
				component: HomePage,
				title: 'Redirecting',
				target: '/'
			},
			{
				component: LinkedinPage,
				title: 'LinkedIn',
				target: 'https://www.linkedin.com/in/lennardwolf/'
			}
		];

		for (const { component, title, target } of redirects) {
			document.body.innerHTML = initialBody;
			document.head.innerHTML = initialHead;

			render(component);

			expect(document.title).toBe(`${title} | Lennard Wolf`);
			expect(
				document.head.querySelector('meta[http-equiv="refresh"]')?.getAttribute('content')
			).toBe(`0; url=${target}`);
			expect(document.body.textContent).toContain(target);
		}
	});
});
