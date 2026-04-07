<script lang="ts">
	import favicon from '$lib/assets/images/favicon.png';
	interface Props {
		title?: string;
		head_inline?: string;
		tags?: string[];
	}
	let { head_inline, tags }: Props = $props();
</script>

<!-- <link
	rel="alternate"
	type="application/rss+xml"
	title={title ?? 'Default Title'}
	href={resolve('/feed.xml')}
/> -->
<link rel="shortcut icon" type="image/png" href={favicon} />
{#if head_inline}
	{@html head_inline}
{/if}

<svelte:head>
	<meta charset="utf-8" />
	<!-- <meta http-equiv="X-UA-Compatible" content="IE=edge" /> -->
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link href="https://fonts.googleapis.com/css?family=Fira+Mono" />

	<link
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
		rel="stylesheet"
		integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
		crossorigin="anonymous"
	/>

	<!-- <link rel="stylesheet" href={resolve('/assets/css/main.css')} /> -->
	<link href="https://fonts.googleapis.com/css?family=Assistant:300" rel="stylesheet" />

	{#if tags && tags.length > 0}
		<!-- {@html collect-tags({ tags })} -->
		{@html tags.map((tag: string) => `<meta name="keywords" content="${tag}">`).join('\n')}
	{/if}

	<!-- {@html resolve('head-includes.html')} -->
</svelte:head>
