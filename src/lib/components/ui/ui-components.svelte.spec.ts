import { afterEach, describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import { render } from 'vitest-browser-svelte';
import { createRawSnippet } from 'svelte';
import Avatar from './Avatar.svelte';
import Breadcrumbs from './Breadcrumbs.svelte';
import Button from './Button.svelte';
import Card from './Card.svelte';
import CodeSnippet from './CodeSnippet.svelte';
import Drawer from './Drawer.svelte';
import FocusRing from './FocusRing.svelte';
import Image from './Image.svelte';
import Modal from './Modal.svelte';
import Pagination from './Pagination.svelte';
import Skeleton from './Skeleton.svelte';
import Spotlight from './Spotlight.svelte';
import TagPill from './TagPill.svelte';
import Toggle from './Toggle.svelte';
import Tooltip from './Tooltip.svelte';

const initialBody = document.body.innerHTML;

afterEach(() => {
	document.body.innerHTML = initialBody;
});

function createRestoreButton(label: string) {
	const button = document.createElement('button');
	button.type = 'button';
	button.textContent = label;
	document.body.appendChild(button);
	button.focus();
	return button;
}

function createSnippet(html: string) {
	return createRawSnippet(() => ({
		render: () => html
	}));
}

describe('ui components', () => {
	it('renders button, card, focus ring, and toggle primitives', async () => {
		const onchange = vi.fn();

		render(Button, { label: 'Launch' });
		expect(document.querySelector('button')?.textContent).toContain('Launch');

		document.body.innerHTML = initialBody;

		render(Card, {
			title: 'Field notes',
			body: 'Editorial structure with brighter motion.',
			interactive: true
		});
		expect(document.querySelector('article')?.className).toContain('interactive');
		expect(document.body.textContent).toContain('Field notes');

		document.body.innerHTML = initialBody;

		render(FocusRing, {
			title: 'Focus ring',
			description: 'Shared keyboard treatment.'
		});
		expect(document.body.textContent).toContain('Shared keyboard treatment.');

		document.body.innerHTML = initialBody;

		render(Toggle, {
			label: 'Enable color',
			description: 'Activates hover motion.',
			onchange
		});

		const toggle = page.getByRole('switch', { name: 'Enable color' });
		await toggle.click();

		expect(document.querySelector('[role="switch"]')?.getAttribute('aria-checked')).toBe('true');
		expect(onchange).toHaveBeenCalledWith(true);
	});

	it('renders avatar, image, skeleton, tag pill, and code snippet', () => {
		render(Avatar, { name: 'Lennard Wolf' });
		expect(document.body.textContent).toContain('LW');

		document.body.innerHTML = initialBody;

		render(Image, {
			src: '/author.jpeg',
			alt: 'Portrait',
			caption: 'Framed portrait'
		});
		expect(document.querySelector('img')?.getAttribute('alt')).toBe('Portrait');
		expect(document.body.textContent).toContain('Framed portrait');

		document.body.innerHTML = initialBody;

		render(Skeleton, { shape: 'card' });
		expect(document.querySelectorAll('.block').length).toBeGreaterThan(1);

		document.body.innerHTML = initialBody;

		render(TagPill, { label: 'svelte', href: '/tags/svelte', selected: true });
		expect(document.querySelector('a')?.getAttribute('aria-current')).toBe('page');

		document.body.innerHTML = initialBody;

		render(CodeSnippet, {
			filename: 'Button.svelte',
			language: 'svelte',
			code: '<Button>Launch</Button>'
		});
		expect(document.body.textContent).toContain('Button.svelte');
		expect(document.body.textContent).toContain('<Button>Launch</Button>');
	});

	it('renders snippet-based variants for button, card, focus ring, tooltip, and spotlight', () => {
		render(Button, {
			children: createSnippet('<span data-testid="button-child">Snippet CTA</span>')
		});
		expect(document.querySelector('[data-testid="button-child"]')?.textContent).toContain(
			'Snippet CTA'
		);

		document.body.innerHTML = initialBody;

		render(Card, {
			eyebrow: 'Fresh',
			title: 'Snippet card',
			children: createSnippet('<button type="button">Read card</button>'),
			footer: createSnippet('<span data-testid="card-footer">Card footer note</span>')
		});
		expect(document.body.textContent).toContain('Fresh');
		expect(document.body.textContent).toContain('Read card');
		expect(document.querySelector('[data-testid="card-footer"]')?.textContent).toContain(
			'Card footer note'
		);

		document.body.innerHTML = initialBody;

		render(FocusRing, {
			children: createSnippet('<button type="button">Focusable child</button>')
		});
		expect(document.querySelector('.ui-focus-ring .frame button')?.textContent).toContain(
			'Focusable child'
		);

		document.body.innerHTML = initialBody;

		render(Tooltip, {
			text: 'Custom tooltip',
			position: 'bottom',
			children: createSnippet('<span data-testid="tooltip-trigger">Custom trigger</span>')
		});
		expect(document.querySelector('[role="tooltip"]')?.className).toContain('bottom');
		expect(document.querySelector('[data-testid="tooltip-trigger"]')?.textContent).toContain(
			'Custom trigger'
		);

		document.body.innerHTML = initialBody;

		render(Spotlight, {
			eyebrow: 'Glow',
			children: createSnippet(
				'<button type="button" data-testid="spotlight-button">Follow the beam</button>'
			)
		});
		expect(document.querySelector('.ui-spotlight h3')).toBeNull();
		expect(document.querySelector('[data-testid="spotlight-button"]')?.textContent).toContain(
			'Follow the beam'
		);
	});

	it('renders breadcrumbs, pagination, and tooltip navigation affordances', () => {
		render(Breadcrumbs, {
			items: [
				{ label: 'Home', href: '/' },
				{ label: 'Library', href: '/library' },
				{ label: 'Tooltip' }
			]
		});
		expect(document.querySelector('nav')?.getAttribute('aria-label')).toBe('Breadcrumb');
		expect(document.body.textContent).toContain('Tooltip');

		document.body.innerHTML = initialBody;

		render(Pagination, {
			page: 4,
			pageCount: 12,
			basePath: '/components?page='
		});
		expect(document.querySelector('a[aria-current="page"]')?.textContent).toBe('4');
		expect(document.body.textContent).toContain('Prev');
		expect(document.body.textContent).toContain('Next');

		document.body.innerHTML = initialBody;

		render(Tooltip, {
			label: 'Glossary note',
			text: 'Brighter hover treatment.'
		});
		expect(document.querySelector('[role="tooltip"]')?.textContent).toContain(
			'Brighter hover treatment.'
		);
	});

	it('renders spotlight motion and both overlay components', async () => {
		render(Spotlight, {
			title: 'Pointer tracking',
			body: 'Moves with the cursor.'
		});

		const spotlight = document.querySelector('.ui-spotlight') as HTMLElement | null;

		if (!spotlight) {
			throw new Error('Expected spotlight to render.');
		}

		Object.defineProperty(spotlight, 'getBoundingClientRect', {
			configurable: true,
			value: () => ({
				x: 0,
				y: 0,
				width: 200,
				height: 100,
				top: 0,
				right: 200,
				bottom: 100,
				left: 0,
				toJSON: () => ({})
			})
		});

		spotlight.dispatchEvent(
			new MouseEvent('pointermove', { bubbles: true, clientX: 50, clientY: 25 })
		);
		await Promise.resolve();
		expect(spotlight.style.getPropertyValue('--spotlight-x')).toBe('25%');
		expect(spotlight.style.getPropertyValue('--spotlight-y')).toBe('25%');

		document.body.innerHTML = initialBody;

		render(Modal, {
			open: true,
			title: 'Newsletter signup',
			body: 'Focused dialog content.'
		});
		await Promise.resolve();
		expect(document.querySelector('[role="dialog"]')).not.toBeNull();

		const modalPanel = document.querySelector('.ui-modal-panel');
		modalPanel instanceof HTMLElement && modalPanel.focus();
		modalPanel?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
		await Promise.resolve();
		expect(document.querySelector('[role="dialog"]')).toBeNull();

		document.body.innerHTML = initialBody;

		render(Drawer, {
			open: true,
			title: 'Quick links',
			body: 'Slide-in details.',
			side: 'left'
		});
		await Promise.resolve();
		expect(document.querySelector('.ui-drawer-panel.left')).not.toBeNull();

		const closeButton = document.querySelector(
			'.ui-drawer-panel .close'
		) as HTMLButtonElement | null;
		closeButton?.click();
		await Promise.resolve();
		expect(document.querySelector('.ui-drawer-panel')).toBeNull();
	});

	it('covers alternate avatar, pagination, skeleton, tag pill, tooltip, and code snippet states', () => {
		render(Avatar, {
			name: 'Picture Person',
			src: '/avatar.png',
			square: true,
			status: 'busy'
		});
		expect(document.querySelector('.ui-avatar.square')).not.toBeNull();
		expect(document.querySelector('img')?.getAttribute('alt')).toBe('Picture Person');
		expect(document.querySelector('.status')?.getAttribute('aria-label')).toBe('busy');

		document.body.innerHTML = initialBody;

		render(Pagination, {
			page: 1,
			pageCount: 1,
			basePath: '/components?page='
		});
		const controls = document.querySelectorAll<HTMLAnchorElement>('.ui-pagination .control');
		expect(controls).toHaveLength(2);
		expect(controls[0]?.getAttribute('aria-disabled')).toBe('true');
		expect(controls[0]?.hasAttribute('href')).toBe(false);
		expect(controls[1]?.getAttribute('aria-disabled')).toBe('true');
		expect(controls[1]?.hasAttribute('href')).toBe(false);

		document.body.innerHTML = initialBody;

		render(Skeleton, { shape: 'line', lines: 2, height: '2rem' });
		let lineBlocks = document.querySelectorAll<HTMLElement>('.line.block');
		expect(lineBlocks).toHaveLength(2);
		expect(lineBlocks[1]?.style.getPropertyValue('--line-width')).toBe('68%');

		document.body.innerHTML = initialBody;

		render(Skeleton, { shape: 'avatar' });
		expect(document.querySelector('.avatar.block')).not.toBeNull();

		document.body.innerHTML = initialBody;

		render(TagPill, { label: 'plain' });
		expect(document.querySelector('span.ui-tag-pill')?.textContent).toContain('plain');

		document.body.innerHTML = initialBody;

		render(Tooltip, {
			text: 'Nested tooltip',
			position: 'bottom'
		});
		expect(document.querySelector('.bubble.bottom')?.textContent).toContain('Nested tooltip');

		document.body.innerHTML = initialBody;

		render(CodeSnippet, {
			code: 'console.log(1);'
		});
		expect(document.querySelector('.filename')).toBeNull();
		expect(document.querySelector('.language')?.textContent).toBe('txt');
	});

	it('traps focus, renders snippet content, and restores focus for the modal', async () => {
		const restoreButton = createRestoreButton('Return focus');

		render(Modal, {
			open: true,
			title: 'Modal title',
			description: 'Modal description',
			children: createSnippet(
				'<div><button type="button" data-testid="modal-first-action">First modal action</button><button type="button" data-testid="modal-last-action">Last modal action</button></div>'
			),
			footer: createSnippet(
				'<div><button type="button" data-testid="modal-footer-action">Modal footer action</button></div>'
			)
		});
		await Promise.resolve();

		const panel = document.querySelector('.ui-modal-panel') as HTMLElement | null;
		const closeButton = document.querySelector(
			'.ui-modal-panel .close'
		) as HTMLButtonElement | null;
		const footerButton = document.querySelector(
			'[data-testid="modal-footer-action"]'
		) as HTMLButtonElement | null;

		if (!panel || !closeButton || !footerButton) {
			throw new Error('Expected modal harness to render focusable content.');
		}

		expect(document.body.textContent).toContain('Modal description');
		expect(document.body.textContent).toContain('First modal action');
		expect(document.body.textContent).toContain('Modal footer action');

		panel.click();
		panel.focus();
		panel.dispatchEvent(
			new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, bubbles: true })
		);
		await Promise.resolve();
		expect(document.activeElement).toBe(footerButton);

		footerButton.focus();
		panel.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', bubbles: true }));
		await Promise.resolve();
		expect(document.activeElement).toBe(closeButton);

		const backdrop = document.querySelector('.ui-modal-backdrop') as HTMLButtonElement | null;
		backdrop?.click();
		await Promise.resolve();

		expect(document.querySelector('.ui-modal-panel')).toBeNull();
		expect(document.activeElement).toBe(restoreButton);
	});

	it('traps focus, handles escape/backdrop dismissal, and restores focus for the drawer', async () => {
		let restoreButton = createRestoreButton('Restore drawer focus');

		render(Drawer, {
			open: true,
			title: 'Drawer title',
			description: 'Drawer description',
			side: 'right',
			children: createSnippet(
				'<div><button type="button" data-testid="drawer-first-action">First drawer action</button><button type="button" data-testid="drawer-last-action">Last drawer action</button></div>'
			),
			footer: createSnippet(
				'<div><button type="button" data-testid="drawer-footer-action">Drawer footer action</button></div>'
			)
		});
		await Promise.resolve();

		let panel = document.querySelector('.ui-drawer-panel') as HTMLElement | null;
		let closeButton = document.querySelector('.ui-drawer-panel .close') as HTMLButtonElement | null;
		let footerButton = document.querySelector(
			'[data-testid="drawer-footer-action"]'
		) as HTMLButtonElement | null;

		if (!panel || !closeButton || !footerButton) {
			throw new Error('Expected drawer harness to render focusable content.');
		}

		expect(panel.className).toContain('right');
		expect(document.body.textContent).toContain('Drawer description');
		expect(document.body.textContent).toContain('First drawer action');
		expect(document.body.textContent).toContain('Drawer footer action');

		panel.click();
		panel.focus();
		panel.dispatchEvent(
			new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, bubbles: true })
		);
		await Promise.resolve();
		expect(document.activeElement).toBe(footerButton);

		footerButton.focus();
		panel.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', bubbles: true }));
		await Promise.resolve();
		expect(document.activeElement).toBe(closeButton);

		panel.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
		await Promise.resolve();

		expect(document.querySelector('.ui-drawer-panel')).toBeNull();
		expect(document.activeElement).toBe(restoreButton);

		document.body.innerHTML = initialBody;
		restoreButton = createRestoreButton('Restore drawer focus again');

		render(Drawer, {
			open: true,
			title: 'Drawer title',
			description: 'Drawer description',
			side: 'right',
			children: createSnippet(
				'<div><button type="button" data-testid="drawer-first-action">First drawer action</button><button type="button" data-testid="drawer-last-action">Last drawer action</button></div>'
			),
			footer: createSnippet(
				'<div><button type="button" data-testid="drawer-footer-action">Drawer footer action</button></div>'
			)
		});
		await Promise.resolve();

		const backdrop = document.querySelector('.ui-drawer-backdrop') as HTMLButtonElement | null;
		backdrop?.click();
		await Promise.resolve();

		expect(document.querySelector('.ui-drawer-panel')).toBeNull();
		expect(document.activeElement).toBe(restoreButton);
	});
});
