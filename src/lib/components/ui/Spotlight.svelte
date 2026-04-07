<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { getAccentValue, type UiAccent } from './ui';

	interface Props extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
		title?: string;
		eyebrow?: string;
		body?: string;
		accent?: UiAccent;
		children?: Snippet;
	}

	let {
		children,
		title,
		eyebrow,
		body,
		accent = 'pink',
		class: className,
		...props
	}: Props = $props();

	let pointerX = $state(-100);
	let pointerY = $state(-50);
	let accentValue = $derived(getAccentValue(accent));
	let spotlightX = $derived(`${pointerX}%`);
	let spotlightY = $derived(`${pointerY}%`);

	function handlePointerMove(event: PointerEvent) {
		const element = event.currentTarget;

		if (!(element instanceof HTMLElement)) {
			return;
		}

		const rect = element.getBoundingClientRect();
		pointerX = ((event.clientX - rect.left) / rect.width) * 100;
		pointerY = ((event.clientY - rect.top) / rect.height) * 100;
	}

	function resetPointer() {
		pointerX = -100;
		pointerY = -50;
	}
</script>

<section
	{...props}
	class={['ui-component', 'ui-spotlight', 'ui-pop-surface', className]}
	style:--ui-accent={accentValue}
	style:--spotlight-x={spotlightX}
	style:--spotlight-y={spotlightY}
	onpointermove={handlePointerMove}
	onpointerleave={resetPointer}
	onmouseleave={resetPointer}
>
	{#if eyebrow}
		<p class="ui-eyebrow">{eyebrow}</p>{/if}

	{#if title}<h3>{title}</h3>{/if}
	{#if children}<div class="content">{@render children()}</div>{:else if body}<p class="content">
			{body}
		</p>{/if}
</section>

<style>
	.ui-spotlight {
		display: grid;
		gap: 0.8rem;
		isolation: isolate;
		overflow: visible;
		padding: 1.2rem;
		position: relative;
	}

	.ui-spotlight::after {
		background: radial-gradient(
			circle at var(--spotlight-x) var(--spotlight-y),
			color-mix(in srgb, var(--ui-accent) 42%, white),
			transparent 10%
		);
		content: '';
		inset: 0;
		pointer-events: none;
		position: absolute;
		transition: opacity var(--ui-transition-fast);
		z-index: 0;
	}

	.ui-spotlight > * {
		position: relative;
		z-index: 1;
	}

	h3,
	p {
		margin: 0;
	}

	h3 {
		font-size: 1.35rem;
		text-decoration: underline;
		text-decoration-color: var(--ui-accent);
		text-decoration-style: wavy;
	}

	.content {
		line-height: 1.55;
	}
</style>
