import { afterEach, describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import { render } from 'vitest-browser-svelte';
import Button from './Button.svelte';
import Header from './Header.svelte';
import Page from './Page.svelte';

const initialBody = document.body.innerHTML;

afterEach(() => {
	document.body.innerHTML = initialBody;
});

describe('storybook starter components', () => {
	it('renders a secondary button with defaults', () => {
		render(Button, { label: 'Default Button' });

		const button = document.querySelector('button');

		expect(button?.className).toContain('storybook-button--medium');
		expect(button?.className).toContain('storybook-button--secondary');
		expect(button?.getAttribute('style')).toBe('');
	});

	it('renders a primary button with a background color and click handler', async () => {
		const onclick = vi.fn();

		render(Button, {
			primary: true,
			backgroundColor: '#ff00aa',
			size: 'large',
			label: 'Primary Button',
			onclick
		});

		const button = page.getByRole('button', { name: 'Primary Button' });

		await button.click();

		expect(document.querySelector('button')?.className).toContain('storybook-button--primary');
		expect(document.querySelector('button')?.className).toContain('storybook-button--large');
		expect(document.querySelector('button')?.style.backgroundColor).toBe('rgb(255, 0, 170)');
		expect(onclick).toHaveBeenCalledOnce();
	});

	it('shows the logged out and logged in header variants', () => {
		render(Header, {
			onLogin: vi.fn(),
			onLogout: vi.fn(),
			onCreateAccount: vi.fn()
		});

		expect(document.body.textContent).toContain('Log in');
		expect(document.body.textContent).toContain('Sign up');

		document.body.innerHTML = initialBody;

		render(Header, {
			user: { name: 'Jane Doe' },
			onLogin: vi.fn(),
			onLogout: vi.fn(),
			onCreateAccount: vi.fn()
		});

		expect(document.body.textContent).toContain('Welcome,');
		expect(document.body.textContent).toContain('Jane Doe');
		expect(document.body.textContent).toContain('Log out');
	});

	it('toggles the starter page between logged out and logged in states', async () => {
		render(Page);

		const loginButton = page.getByRole('button', { name: 'Log in' });
		const signUpButton = page.getByRole('button', { name: 'Sign up' });

		await signUpButton.click();

		expect(document.body.textContent).toContain('Welcome,');
		expect(document.body.textContent).toContain('Jane Doe');

		await page.getByRole('button', { name: 'Log out' }).click();

		await loginButton.click();

		expect(document.body.textContent).toContain('Welcome,');
		expect(document.body.textContent).toContain('Jane Doe');

		await page.getByRole('button', { name: 'Log out' }).click();

		expect(document.body.textContent).toContain('Log in');
		expect(document.body.textContent).not.toContain('Welcome, Jane Doe!');
	});
});
