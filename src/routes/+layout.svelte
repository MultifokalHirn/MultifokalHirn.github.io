<script lang="ts">
	import Footer from '$lib/_includes/footer.svelte';
	import Head from '$lib/_includes/head.svelte';
	import Header from '$lib/_includes/header.svelte';
	import './layout.css';

	let { children } = $props();
</script>

<Head title="Home" />

<div id="content" class="wrapper">
	<Header title="Home" />

	<div id="content-container" class="container" style="flex: 1; ">
		<main>
			{@render children()}
		</main>
	</div>

	<Footer author="Lennard Wolf" />
</div>

<style>
	.wrapper {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}
	.container {
		flex: 1;
		padding-top: 1%;
	}
</style>
