<script lang="ts">
	import { page } from '$app/state';
	import NotFoundMessage from '$lib/components/NotFoundMessage.svelte';
	import Head from '$lib/_includes/head.svelte';

	let title = $derived(page.status === 404 ? '404' : `${page.status}`);
	let description = $derived(
		page.status === 404 ? 'Page not found.' : 'An unexpected error occurred.'
	);
</script>

<Head {title} {description} path={page.url.pathname} robots="noindex" />

<NotFoundMessage status={page.status} />
