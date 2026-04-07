<script lang="ts">
	import { normalizeLegacyHtml } from './legacy-html';

	interface Props {
		html: string;
		repoPath?: string;
	}

	let props: Props = $props();
</script>

<div class="legacy-content">
	{@html normalizeLegacyHtml(props.html, props.repoPath)}
</div>
