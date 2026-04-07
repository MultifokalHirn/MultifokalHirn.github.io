<script lang="ts">
	import authorImage from '$lib/assets/images/author.jpeg';
	import HomeContent from '$lib/content/pages/HomeContent.svelte';
	import Head from '$lib/_includes/head.svelte';
	import { site } from '$lib/site';
</script>

<Head title={site.title} description={site.description} path="/" />

<div style="margin: 0% 0.5% 0% 0.5%">
	<div itemprop="articleBody">
		<div class="row text-justify">
			<div class="col-md-3 col" style="margin-bottom: 2%">
				<div
					class="author-image"
					style="border: 0px dashed #ff0000; border-bottom: 0px dotted #ff0000;"
				>
					<img
						src={authorImage}
						style="width: 94%; margin: 2% 2% 2% 2%; border: 3px dotted black;"
						alt="Lennard Wolf"
					/>
				</div>
				<br />
			</div>
			<div class="mystery-green-area col-md-6" style="min-width: 70%; margin-bottom: 1%;">
				<HomeContent />
			</div>
		</div>
	</div>
</div>
