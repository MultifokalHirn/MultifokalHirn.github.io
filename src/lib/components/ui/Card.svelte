<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { getAccentValue, type UiAccent } from './ui';

	interface Props extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
		title?: string;
		eyebrow?: string;
		body?: string;
		accent?: UiAccent;
		interactive?: boolean;
		children?: Snippet;
		footer?: Snippet;
	}

	let {
		children,
		footer,
		title,
		eyebrow,
		body,
		accent = 'yellow',
		interactive = false,
		class: className,
		...props
	}: Props = $props();

	let accentValue = $derived(getAccentValue(accent));
</script>

<article
	{...props}
	class={['ui-component', 'ui-card', 'ui-pop-surface', interactive && 'interactive', className]}
	style:--ui-accent={accentValue}
>
	{#if eyebrow}<p class="ui-eyebrow">{eyebrow}</p>{/if}
	{#if title}<h3>{title}</h3>{/if}
	{#if children}<div class="content">{@render children()}</div>{:else if body}<p class="content">
			{body}
		</p>{/if}
	{#if footer}<footer>{@render footer()}</footer>{/if}
</article>

<style>
	.ui-card {
		display: grid;
		gap: 0.8rem;
		padding: 1.2rem;
	}

	.interactive {
		cursor: pointer;
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
		text-decoration-thickness: 0.12em;
	}

	.content {
		line-height: 1.5;
	}

	footer {
		border-top: 2px dotted var(--ui-ink);
		font-family: var(--ui-font-code);
		font-size: 0.88rem;
		padding-top: 0.8rem;
	}
</style>
