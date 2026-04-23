<script lang="ts">
	import { resolve } from '$app/paths';
	import RedirectPage from '$lib/components/RedirectPage.svelte';
</script>

<RedirectPage
	to={resolve('/posts')}
	title="Redirecting to Lennard Wolf's Blog"
	description="Redirecting to the posts page."
	path="/blog"
></RedirectPage>
