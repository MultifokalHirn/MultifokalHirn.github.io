<script lang="ts">
	import TagPill from '$lib/components/ui/TagPill.svelte';

	interface Props {
		author?: string;
		description?: string;
	}

	let { author = 'Lennard Wolf', description }: Props = $props();
	const year = new Date().getFullYear();
</script>

<footer id="site-footer">
	<div class="container">
		{#if description}
			<p class="text-secondary footer-description text-justify">{description}</p>
		{/if}

		<div class="footer-meta pb-2">
			<TagPill label={`© ${year} - ${author}`} accent="green" />
		</div>
	</div>
</footer>

<style>
	.footer-description {
		margin-bottom: 0.85rem;
	}

	.footer-meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem;
		justify-content: flex-end;
	}
</style>
