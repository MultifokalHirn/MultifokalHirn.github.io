<script lang="ts">
	import Footer from '$lib/_includes/footer.svelte';
	import Head from '$lib/_includes/head.svelte';
	import Header from '$lib/_includes/header.svelte';
	// import favicon from '$lib/assets/favicon.svg';
	import './layout.css';

	let { children } = $props();
</script>

<Head title="Home" />
<!-- <svelte:head><link rel="icon" href={favicon} /></svelte:head> -->
<Header title="Home" />
{@render children()}
<Footer author="Lennard Wolf" />
