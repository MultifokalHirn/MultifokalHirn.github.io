<script lang="ts">
	import appleTouchIcon from '$lib/assets/images/favicon/apple-touch-icon.png';
	import favicon16 from '$lib/assets/images/favicon/favicon-16x16.png';
	import favicon32 from '$lib/assets/images/favicon/favicon-32x32.png';
	import faviconIco from '$lib/assets/images/favicon/favicon.ico';
	import msTileImage from '$lib/assets/images/favicon/mstile-150x150.png';
	import safariPinnedTab from '$lib/assets/images/favicon/safari-pinned-tab.svg';
	import browserConfig from '$lib/assets/browserconfig.xml?url';
	import webManifest from '$lib/assets/site.webmanifest?url';
	import { site } from '$lib/site';

	interface Props {
		title?: string;
		description?: string;
		tags?: string[];
		path?: string;
		robots?: string;
	}

	let {
		title = site.title,
		description = site.description,
		tags = [],
		path = '/',
		robots = 'index,follow'
	}: Props = $props();

	let pageTitle = $derived(title === site.title ? title : `${title} | ${site.title}`);
	let canonicalUrl = $derived(path.startsWith('http') ? path : new URL(path, site.url).toString());
	let keywords = $derived(tags.length > 0 ? tags.join(', ') : null);
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={description} />
	<meta name="author" content={site.author} />
	<meta name="robots" content={robots} />
	<meta name="theme-color" content="#000000" />
	<meta name="msapplication-TileColor" content="#000000" />
	<meta name="msapplication-TileImage" content={msTileImage} />
	<meta name="msapplication-config" content={browserConfig} />
	<link rel="canonical" href={canonicalUrl} />
	<link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
	<link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
	<link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
	<link rel="mask-icon" href={safariPinnedTab} color="#000000" />
	<link rel="shortcut icon" href={faviconIco} />
	<link rel="manifest" href={webManifest} />

	<link
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
		rel="stylesheet"
		integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
		crossorigin="anonymous"
	/>

	{#if keywords}
		<meta name="keywords" content={keywords} />
	{/if}
</svelte:head>
