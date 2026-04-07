<script lang="ts">
	import { resolve } from '$app/paths';
	import RedirectPage from '$lib/components/RedirectPage.svelte';
</script>

<RedirectPage
	to={resolve('/resume')}
	title="Redirecting"
	description="Redirecting to the resume page."
	path="/cv"
/>
