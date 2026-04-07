<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { getAccentValue, type UiAccent } from './ui';

	interface Props extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
		src: string;
		alt: string;
		caption?: string;
		accent?: UiAccent;
		ratio?: string;
		decorative?: boolean;
	}

	let {
		src,
		alt,
		caption,
		accent = 'blue',
		ratio = '4 / 3',
		decorative = false,
		class: className,
		...props
	}: Props = $props();

	let accentValue = $derived(getAccentValue(accent));
</script>

<figure
	{...props}
	class={['ui-component', 'ui-image', className]}
	style:--ui-accent={accentValue}
	style:--ui-ratio={ratio}
>
	<div class="frame">
		<img {src} alt={decorative ? '' : alt} loading="lazy" />
	</div>

	{#if caption}
		<figcaption>{caption}</figcaption>
	{/if}
</figure>

<style>
	.ui-image {
		display: grid;
		gap: 0.75rem;
		margin: 0;
	}

	.frame {
		aspect-ratio: var(--ui-ratio);
		background: linear-gradient(135deg, color-mix(in srgb, var(--ui-accent) 18%, white), white 65%);
		border: 2px dashed var(--ui-ink);
		border-radius: var(--ui-radius-lg);
		box-shadow: 0.45rem 0.45rem 0 0 var(--ui-accent);
		overflow: hidden;
		padding: 0.55rem;
	}

	img {
		border-radius: calc(var(--ui-radius-lg) - 0.35rem);
		display: block;
		height: 100%;
		object-fit: cover;
		width: 100%;
	}

	figcaption {
		font-family: var(--ui-font-code);
		font-size: 0.88rem;
	}
</style>
