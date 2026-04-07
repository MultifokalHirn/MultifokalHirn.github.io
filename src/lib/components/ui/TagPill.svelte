<script lang="ts">
	import { base } from '$app/paths';
	import { getAccentInk, getAccentValue, type UiAccent, withBasePath } from './ui';

	interface Props {
		label: string;
		href?: string;
		accent?: UiAccent;
		selected?: boolean;
	}

	let { label, href, accent = 'violet', selected = false }: Props = $props();
	let accentValue = $derived(getAccentValue(accent));
	let accentInk = $derived(getAccentInk(accent));
	let resolvedHref = $derived(href ? withBasePath(href, base) : undefined);
</script>

{#if resolvedHref}
	<a
		href={resolvedHref}
		class={['ui-component', 'ui-tag-pill', 'ui-focusable', selected && 'selected']}
		style:--ui-accent={accentValue}
		style:--ui-accent-ink={accentInk}
		aria-current={selected ? 'page' : undefined}>{label}</a
	>
{:else}
	<span
		class={['ui-component', 'ui-tag-pill', selected && 'selected']}
		style:--ui-accent={accentValue}
		style:--ui-accent-ink={accentInk}>{label}</span
	>
{/if}

<style>
	.ui-tag-pill {
		background: color-mix(in srgb, var(--ui-accent) 15%, white);
		border: 2px dotted var(--ui-ink);
		border-radius: 999px;
		box-shadow: 0.22rem 0.22rem 0 0 var(--ui-accent);
		display: inline-flex;
		font-family: var(--ui-font-code);
		font-size: 0.88rem;
		padding: 0.35rem 0.75rem;
		text-decoration: none;
		transition:
			box-shadow var(--ui-transition-fast),
			transform var(--ui-transition-fast),
			border-style var(--ui-transition-fast),
			background-color var(--ui-transition-fast);
	}

	.ui-tag-pill:is(:hover, :focus-visible, .selected) {
		border-style: solid;
		box-shadow: 0.34rem 0.34rem 0 0 var(--ui-accent);
		transform: translate(-0.08rem, -0.08rem) rotate(-1deg);
	}

	.selected {
		background: var(--ui-accent);
		color: var(--ui-accent-ink);
	}
</style>
