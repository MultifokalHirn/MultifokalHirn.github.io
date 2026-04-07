<script lang="ts">
	import type { Snippet } from 'svelte';
	import { getAccentValue, type UiAccent } from './ui';

	type TooltipPosition = 'top' | 'bottom';

	interface Props {
		text: string;
		label?: string;
		position?: TooltipPosition;
		accent?: UiAccent;
		children?: Snippet;
	}

	const uid = $props.id();

	let {
		children,
		text,
		label = 'Hover target',
		position = 'top',
		accent = 'pink'
	}: Props = $props();
	let accentValue = $derived(getAccentValue(accent));
</script>

<span class="ui-component ui-tooltip-shell" style:--ui-accent={accentValue}>
	<span class="trigger" aria-describedby={uid}>
		{#if children}{@render children()}{:else}<button
				type="button"
				class="ui-component ui-pop-surface ui-focusable trigger-button">{label}</button
			>{/if}
	</span>

	<span id={uid} role="tooltip" class={['bubble', position]}>{text}</span>
</span>

<style>
	.ui-tooltip-shell {
		display: inline-grid;
		position: relative;
	}

	.bubble {
		background: color-mix(in srgb, var(--ui-accent) 24%, white);
		border: 2px solid var(--ui-ink);
		border-radius: var(--ui-radius-sm);
		box-shadow: 0.3rem 0.3rem 0 0 var(--ui-accent);
		font-family: var(--ui-font-code);
		font-size: 0.82rem;
		left: 50%;
		max-width: 15rem;
		opacity: 0;
		padding: 0.55rem 0.7rem;
		pointer-events: none;
		position: absolute;
		transform: translate(-50%, 0.35rem);
		transition:
			opacity var(--ui-transition-fast),
			transform var(--ui-transition-fast);
		width: max-content;
		z-index: 20;
	}

	.top {
		bottom: calc(100% + 0.75rem);
	}

	.bottom {
		top: calc(100% + 0.75rem);
		transform: translate(-50%, -0.35rem);
	}

	.ui-tooltip-shell:is(:hover, :focus-within) .bubble {
		opacity: 1;
	}

	.ui-tooltip-shell:is(:hover, :focus-within) .top {
		transform: translate(-50%, 0);
	}

	.ui-tooltip-shell:is(:hover, :focus-within) .bottom {
		transform: translate(-50%, 0);
	}

	.trigger-button {
		padding: 0.7rem 0.95rem;
	}
</style>
