<script lang="ts">
	import { resolve } from '$app/paths';
	import RedirectPage from '$lib/components/RedirectPage.svelte';
</script>

<RedirectPage
	to={resolve('/posts')}
	title="Redirecting"
	description="Redirecting to the posts page."
	path="/blog"
/>
