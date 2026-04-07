<script lang="ts">
	import { base } from '$app/paths';
	import { getAccentValue, type UiAccent, withBasePath } from './ui';

	interface Props {
		label: string;
		href?: string;
		accent?: UiAccent;
		selected?: boolean;
	}

	let { label, href, accent = 'violet', selected = false }: Props = $props();
	let accentValue = $derived(getAccentValue(accent));
	let resolvedHref = $derived(href ? withBasePath(href, base) : undefined);
</script>

{#if resolvedHref}
	<a
		href={resolvedHref}
		class={['ui-component', 'ui-tag-pill', 'ui-focusable', selected && 'selected']}
		style:--ui-accent={accentValue}
		aria-current={selected ? 'page' : undefined}>{label}</a
	>
{:else}
	<span
		class={['ui-component', 'ui-tag-pill', selected && 'selected']}
		style:--ui-accent={accentValue}>{label}</span
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
	}

	.selected {
		background: var(--ui-accent);
		border-style: solid;
	}
</style>
