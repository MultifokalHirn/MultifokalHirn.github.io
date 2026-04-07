<script lang="ts">
	let { key, children } = $props();
</script>

<symbol
	id={key}
	fill-rule="evenodd"
	clip-rule="evenodd"
	stroke-linejoin="round"
	stroke-miterlimit="1.414"
	viewBox="0 0 16 16"
>
	{@render children?.()}
</symbol>
