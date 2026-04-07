<script lang="ts">
	import Head from '$lib/_includes/head.svelte';

	interface Props {
		to: string;
		title?: string;
		description?: string;
		path?: string;
	}

	let {
		to,
		title = 'Redirecting',
		description = 'Redirecting to the requested page.',
		path = '/'
	}: Props = $props();

	let refreshContent = $derived(`0; url=${to}`);

	$effect(() => {
		window.location.replace(to);
	});
</script>

<Head {title} {description} {path} robots="noindex" />

<svelte:head>
	<meta http-equiv="refresh" content={refreshContent} />
</svelte:head>

<p>If you are not redirected, open <code>{to}</code>.</p>
