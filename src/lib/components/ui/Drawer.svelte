<script lang="ts">
	import { tick } from 'svelte';
	import type { Snippet } from 'svelte';
	import { getAccentValue, type UiAccent } from './ui';

	type DrawerSide = 'left' | 'right';

	interface Props {
		title: string;
		description?: string;
		body?: string;
		open?: boolean;
		accent?: UiAccent;
		side?: DrawerSide;
		closeLabel?: string;
		children?: Snippet;
		footer?: Snippet;
		onclose?: () => void;
	}

	const uid = $props.id();

	let {
		children,
		footer,
		title,
		description,
		body,
		open = false,
		accent = 'green',
		side = 'right',
		closeLabel = 'Close drawer',
		onclose
	}: Props = $props();

	let panel = $state<HTMLElement | null>(null);
	let previousFocus: HTMLElement | null = null;
	let shouldRestoreFocus = false;
	let accentValue = $derived(getAccentValue(accent));

	function getFocusableElements() {
		if (!panel) {
			return [];
		}

		return Array.from(
			panel.querySelectorAll<HTMLElement>(
				'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
			)
		).filter((element) => !element.hasAttribute('disabled'));
	}

	function requestClose() {
		open = false;
		onclose?.();
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			event.preventDefault();
			requestClose();
			return;
		}

		if (event.key !== 'Tab') {
			return;
		}

		const focusable = getFocusableElements();
		const first = focusable[0] ?? panel;
		const last = focusable[focusable.length - 1] ?? panel;
		const active = document.activeElement;

		if (event.shiftKey && (active === first || active === panel)) {
			event.preventDefault();
			last.focus();
		} else if (!event.shiftKey && active === last) {
			event.preventDefault();
			first.focus();
		}
	}

	$effect(() => {
		if (!open) {
			if (shouldRestoreFocus) {
				previousFocus?.focus();
				shouldRestoreFocus = false;
				previousFocus = null;
			}
			return;
		}

		previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
		shouldRestoreFocus = true;

		void tick().then(() => {
			panel?.focus();
		});
	});
</script>

{#if open}
	<div class="ui-drawer-shell">
		<button
			type="button"
			class="ui-drawer-backdrop"
			aria-label="Close drawer"
			onclick={requestClose}
		></button>

		<div
			bind:this={panel}
			class={['ui-component', 'ui-drawer-panel', 'ui-pop-surface', side]}
			role="dialog"
			aria-modal="true"
			aria-labelledby={`${uid}-title`}
			aria-describedby={description ? `${uid}-description` : undefined}
			style:--ui-accent={accentValue}
			tabindex="-1"
			data-open="true"
			onkeydown={handleKeydown}
			onclick={(event) => event.stopPropagation()}
		>
			<header>
				<div>
					<h3 id={`${uid}-title`}>{title}</h3>
					{#if description}<p id={`${uid}-description`}>{description}</p>{/if}
				</div>

				<button type="button" class="ui-component ui-focusable close" onclick={requestClose}>
					{closeLabel}
				</button>
			</header>

			<div class="content">
				{#if children}{@render children()}{:else if body}<p>{body}</p>{/if}
			</div>
			{#if footer}<footer>{@render footer()}</footer>{/if}
		</div>
	</div>
{/if}

<style>
	.ui-drawer-shell {
		inset: 0;
		position: fixed;
		z-index: 40;
	}

	.ui-drawer-backdrop {
		background: rgba(0, 0, 0, 0.45);
		border: 0;
		inset: 0;
		position: absolute;
		width: 100%;
	}

	.ui-drawer-panel {
		height: calc(100vh - 1.5rem);
		max-width: min(28rem, calc(100vw - 1rem));
		padding: 1.15rem;
		position: absolute;
		top: 0.75rem;
		width: 100%;
	}

	.left {
		left: 0.75rem;
	}

	.right {
		right: 0.75rem;
	}

	header {
		align-items: start;
		display: flex;
		gap: 1rem;
		justify-content: space-between;
		margin-bottom: 1rem;
	}

	h3,
	p {
		margin: 0;
	}

	.content {
		line-height: 1.5;
	}

	.close {
		background: white;
		border: 2px dotted var(--ui-ink);
		border-radius: 999px;
		padding: 0.45rem 0.7rem;
	}

	footer {
		border-top: 2px dotted var(--ui-ink);
		margin-top: 1rem;
		padding-top: 0.9rem;
	}
</style>
