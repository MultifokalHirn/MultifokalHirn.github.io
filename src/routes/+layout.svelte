<script lang="ts">
	import Footer from '$lib/_includes/footer.svelte';
	import Header from '$lib/_includes/header.svelte';
	import { site } from '$lib/site';
	import './layout.css';

	let { children } = $props();
</script>

<div id="content" class="wrapper">
	<Header />

	<div id="content-container" class="container">
		<main
			id="main"
			aria-label="Content"
			style="width: 98%; margin-top: 2px; margin-left: 1%; margin-right: 1%"
		>
			{@render children()}
			<br />
		</main>
	</div>

	<Footer author={site.author} />
</div>

<style>
	.wrapper {
		margin: auto;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	#content-container {
		flex: 1;
	}
</style>
