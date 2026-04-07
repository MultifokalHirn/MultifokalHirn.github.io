<script lang="ts">
	import Head from '$lib/_includes/head.svelte';
	import resumePdf from '$lib/assets/resume.pdf';
</script>

<Head title="CV" description="Lennard Wolf's Resume" path="/resume" />

<div style="width: 100%; margin-top: 2px; margin-bottom: 1%; border: 2px dashed blue;">
	<div style="text-align: center">
		<iframe
			src={resumePdf}
			width="100%"
			height="1000"
			loading="lazy"
			title="Lennard Wolf Resume"
			style="overflow-y: scroll"
		></iframe>
	</div>
</div>
