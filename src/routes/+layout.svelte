<script lang="ts">
	import Footer from '$lib/_includes/footer.svelte';
	import Head from '$lib/_includes/head.svelte';
	import Header from '$lib/_includes/header.svelte';
	import './layout.css';

	let { children } = $props();
</script>

<Head title="Home" />

<div class="wrapper">
	<Header title="Home" />
	<div class="container">
		{@render children()}
	</div>
	<Footer author="Lennard Wolf" />
</div>

<style lang="scss">
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
