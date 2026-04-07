<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { getAccentValue, type UiAccent } from './ui';

	type ButtonSize = 'small' | 'medium' | 'large';
	type ButtonVariant = 'solid' | 'outline' | 'ghost';

	interface Props extends Omit<HTMLButtonAttributes, 'children'> {
		label?: string;
		tone?: UiAccent;
		size?: ButtonSize;
		variant?: ButtonVariant;
		children?: Snippet;
	}

	let {
		children,
		label = 'Push here',
		tone = 'blue',
		size = 'medium',
		variant = 'solid',
		type = 'button',
		class: className,
		...props
	}: Props = $props();

	let accentValue = $derived(getAccentValue(tone));
</script>

<button
	{...props}
	{type}
	class={[
		'ui-component',
		'ui-button',
		'ui-pop-surface',
		'ui-focusable',
		`size-${size}`,
		`variant-${variant}`,
		className
	]}
	style:--ui-accent={accentValue}
>
	{#if children}{@render children()}{:else}{label}{/if}
</button>

<style>
	.ui-button {
		align-items: center;
		cursor: pointer;
		display: inline-flex;
		font-weight: 600;
		gap: 0.55rem;
		justify-content: center;
		line-height: 1;
		padding: 0.8rem 1.1rem;
		text-decoration: none;
	}

	.size-small {
		font-size: 0.9rem;
		padding: 0.65rem 0.95rem;
	}

	.size-medium {
		font-size: 1rem;
	}

	.size-large {
		font-size: 1.1rem;
		padding: 1rem 1.35rem;
	}

	.variant-solid {
		background-color: var(--ui-accent);
	}

	.variant-outline {
		background:
			linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.9)),
			repeating-linear-gradient(
				-35deg,
				color-mix(in srgb, var(--ui-accent) 12%, transparent) 0 0.9rem,
				transparent 0.9rem 1.8rem
			);
	}

	.variant-ghost {
		background: transparent;
		border-style: dotted;
		box-shadow: none;
	}

	.ui-button:disabled {
		cursor: not-allowed;
		opacity: 0.55;
		transform: none;
	}
	.ui-button.variant-ghost:disabled {
		box-shadow: none;
	}
</style>
