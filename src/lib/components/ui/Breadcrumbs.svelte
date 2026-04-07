<script lang="ts">
	import { base } from '$app/paths';
	import { getAccentValue, type UiAccent, withBasePath } from './ui';

	interface BreadcrumbItem {
		label: string;
		href?: string;
	}

	interface Props {
		items: BreadcrumbItem[];
		accent?: UiAccent;
	}

	let { items, accent = 'blue' }: Props = $props();
	let accentValue = $derived(getAccentValue(accent));

	function normalizeHref(href: string) {
		return withBasePath(href, base);
	}
</script>

<nav class="ui-component ui-breadcrumbs" aria-label="Breadcrumb" style:--ui-accent={accentValue}>
	<ol>
		{#each items as item, index (`${item.label}-${item.href ?? index}`)}
			<li>
				{#if item.href && index < items.length - 1}
					<a class="ui-focusable" href={normalizeHref(item.href)}>{item.label}</a>
				{:else}
					<span aria-current="page">{item.label}</span>
				{/if}
			</li>
		{/each}
	</ol>
</nav>

<style>
	.ui-breadcrumbs ol {
		display: flex;
		flex-wrap: wrap;
		gap: 0.45rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.ui-breadcrumbs li {
		align-items: center;
		display: inline-flex;
		gap: 0.45rem;
	}

	.ui-breadcrumbs li + li::before {
		color: var(--ui-accent);
		content: '///';
		font-family: var(--ui-font-code);
		font-size: 0.75rem;
	}

	a,
	span {
		border-radius: 0.2rem;
		color: var(--ui-ink);
		padding: 0.12rem 0.2rem;
		text-decoration-color: var(--ui-accent);
		text-decoration-style: dotted;
		text-decoration-thickness: 0.12em;
	}

	span[aria-current='page'] {
		font-weight: 700;
		text-decoration-style: solid;
	}
</style>
