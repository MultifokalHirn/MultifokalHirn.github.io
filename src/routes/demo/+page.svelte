<script lang="ts">
	import { resolve } from '$app/paths';
	import Head from '$lib/_includes/head.svelte';
</script>

<Head title="Demo" description="Internal demo routes." path="/demo" robots="noindex" />

<a href={resolve('/demo/playwright')}>playwright</a>
