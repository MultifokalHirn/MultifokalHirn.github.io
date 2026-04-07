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
	let scriptContent = $derived(`window.location.replace(${JSON.stringify(to)});`);
</script>

<Head {title} {description} {path} robots="noindex" />

<svelte:head>
	<meta http-equiv="refresh" content={refreshContent} />
	<script>
		{
			scriptContent;
		}
	</script>
</svelte:head>

<p>If you are not redirected, open <code>{to}</code>.</p>
