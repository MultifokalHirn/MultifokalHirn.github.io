<script lang="ts">
	type SkeletonShape = 'line' | 'card' | 'avatar';

	interface Props {
		shape?: SkeletonShape;
		lines?: number;
		width?: string;
		height?: string;
	}

	let { shape = 'line', lines = 3, width = '100%', height = '1rem' }: Props = $props();
	let lineItems = $derived(Array.from({ length: lines }, (_, index) => index));
</script>

<div
	class={['ui-component', 'ui-skeleton', `shape-${shape}`]}
	style:--ui-width={width}
	style:--ui-height={height}
	aria-hidden="true"
>
	{#if shape === 'avatar'}
		<span class="avatar block"></span>
	{:else if shape === 'card'}
		<span class="hero block"></span>
		{#each lineItems as line (line)}
			<span class="line block" style:--line-width={line === lineItems.length - 1 ? '72%' : '100%'}
			></span>
		{/each}
	{:else}
		{#each lineItems as line (line)}
			<span class="line block" style:--line-width={line === lineItems.length - 1 ? '68%' : '100%'}
			></span>
		{/each}
	{/if}
</div>

<style>
	.ui-skeleton {
		display: grid;
		gap: 0.6rem;
	}

	.block {
		animation: ui-skeleton-shimmer 1.4s linear infinite;
		background: linear-gradient(
			90deg,
			rgba(0, 0, 0, 0.08) 0%,
			rgba(255, 255, 255, 0.7) 50%,
			rgba(0, 0, 0, 0.08) 100%
		);
		background-size: 200% 100%;
		border-radius: var(--ui-radius-md);
		display: block;
	}

	.line {
		height: var(--ui-height);
		width: var(--line-width, var(--ui-width));
	}

	.hero {
		height: 6rem;
		width: min(100%, 28rem);
	}

	.avatar {
		border-radius: 999px;
		height: 3.6rem;
		width: 3.6rem;
	}
</style>
