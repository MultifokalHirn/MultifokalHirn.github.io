<script lang="ts">
	import { base } from '$app/paths';
	import { createPaginationTokens, getAccentValue, type UiAccent, withBasePath } from './ui';

	interface Props {
		page: number;
		pageCount: number;
		basePath?: string;
		siblingCount?: number;
		accent?: UiAccent;
	}

	let {
		page,
		pageCount,
		basePath = '?page=',
		siblingCount = 1,
		accent = 'orange'
	}: Props = $props();

	let accentValue = $derived(getAccentValue(accent));
	let safePage = $derived(
		Math.min(Math.max(1, Math.trunc(page)), Math.max(1, Math.trunc(pageCount)))
	);
	let tokens = $derived(createPaginationTokens(page, pageCount, siblingCount));
	let canGoBack = $derived(safePage > 1);
	let canGoForward = $derived(safePage < Math.max(1, Math.trunc(pageCount)));
	let previousHref = $derived(canGoBack ? getHref(safePage - 1) : undefined);
	let nextHref = $derived(canGoForward ? getHref(safePage + 1) : undefined);
	let previousClass = $derived(['control', 'ui-focusable', !canGoBack && 'disabled']);
	let nextClass = $derived(['control', 'ui-focusable', !canGoForward && 'disabled']);

	function getHref(targetPage: number) {
		return withBasePath(`${basePath}${targetPage}`, base);
	}
</script>

<nav class="ui-component ui-pagination" aria-label="Pagination" style:--ui-accent={accentValue}>
	<a class={previousClass} aria-disabled={!canGoBack} href={previousHref}>Prev</a>

	<ol>
		{#each tokens as token, index (`${token}-${index}`)}
			<li>
				{#if token === 'ellipsis'}
					<span class="ellipsis" aria-hidden="true">...</span>
				{:else}
					<a
						class={['ui-focusable', token === safePage && 'current']}
						aria-current={token === safePage ? 'page' : undefined}
						data-current={token === safePage}
						href={getHref(token)}
					>
						{token}
					</a>
				{/if}
			</li>
		{/each}
	</ol>

	<a class={nextClass} aria-disabled={!canGoForward} href={nextHref}>Next</a>
</nav>

<style>
	.ui-pagination {
		align-items: center;
		display: inline-flex;
		flex-wrap: wrap;
		gap: 0.65rem;
	}

	ol {
		display: inline-flex;
		gap: 0.45rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	a,
	.ellipsis {
		align-items: center;
		background: white;
		border: 2px dashed var(--ui-ink);
		border-radius: 999px;
		box-shadow: 0.18rem 0.18rem 0 0 color-mix(in srgb, var(--ui-accent) 70%, white);
		display: inline-flex;
		font-family: var(--ui-font-code);
		font-size: 0.88rem;
		justify-content: center;
		min-width: 2.4rem;
		padding: 0.4rem 0.7rem;
		text-decoration: none;
	}

	.current {
		background: color-mix(in srgb, var(--ui-accent) 28%, white);
		border-style: solid;
		font-weight: 700;
	}

	.control {
		min-width: unset;
	}

	.disabled {
		opacity: 0.45;
		pointer-events: none;
	}
</style>
