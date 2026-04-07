<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { getAccentValue, type UiAccent } from './ui';

	interface Props extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
		title?: string;
		description?: string;
		accent?: UiAccent;
		children?: Snippet;
	}

	let {
		children,
		title,
		description,
		accent = 'orange',
		class: className,
		...props
	}: Props = $props();

	let accentValue = $derived(getAccentValue(accent));
</script>

<section
	{...props}
	class={['ui-component', 'ui-focus-ring', className]}
	style:--ui-accent={accentValue}
>
	{#if title || description}
		<header>
			{#if title}<h3>{title}</h3>{/if}
			{#if description}<p>{description}</p>{/if}
		</header>
	{/if}
	<div class="frame">
		{#if children}{@render children()}{:else}<p class="ui-muted">
				Add focusable content inside the FocusRing component.
			</p>{/if}
	</div>
</section>

<style>
	.ui-focus-ring {
		display: grid;
		gap: 0.85rem;
	}

	header {
		display: grid;
		gap: 0.35rem;
	}

	h3,
	p {
		margin: 0;
	}

	.frame {
		background-color: color-mix(in srgb, var(--ui-accent) 10%, white);
		border: var(--ui-border) dotted var(--ui-ink);
		border-radius: var(--ui-radius-lg);
		padding: 1rem;
		transition:
			box-shadow var(--ui-transition-base),
			transform var(--ui-transition-base);
	}

	.frame:focus-within {
		box-shadow:
			0 0 0 var(--ui-ring-size) var(--ui-surface),
			0 0 0 calc(var(--ui-ring-size) * 2) var(--ui-accent),
			0.55rem 0.55rem 0 0 var(--ui-accent);
		transform: translate(-0.12rem, -0.12rem);
	}
</style>
