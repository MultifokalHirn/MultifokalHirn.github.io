<script lang="ts">
	import { resolve } from '$app/paths';
	import RedirectPage from '$lib/components/RedirectPage.svelte';
</script>

<RedirectPage
	to={resolve('/')}
	title="Redirecting"
	description="Redirecting to the home page."
	path="/home"
/>
