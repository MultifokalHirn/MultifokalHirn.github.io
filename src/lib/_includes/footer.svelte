<script lang="ts">
	interface Props {
		author?: string;
		description?: string;
	}

	let { author = 'Lennard Wolf', description }: Props = $props();
</script>

<footer id="site-footer">
	<div class="container">
		<div class="row">
			{#if description}
				<div class="col-lg col-12">
					<p class="text-secondary text-justify">{description}</p>
				</div>
			{/if}
		</div>
		<p style="font-size: small; color: black; text-align: right">
			© {new Date().getFullYear()} -
			{author}
		</p>
	</div>
</footer>
