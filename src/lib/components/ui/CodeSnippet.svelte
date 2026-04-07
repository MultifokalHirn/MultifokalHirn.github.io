<script lang="ts">
	import { getAccentValue, type UiAccent } from './ui';

	interface Props {
		code: string;
		language?: string;
		filename?: string;
		accent?: UiAccent;
	}

	let { code, language = 'txt', filename, accent = 'blue' }: Props = $props();
	let accentValue = $derived(getAccentValue(accent));
</script>

<figure class="ui-component ui-code-snippet" style:--ui-accent={accentValue}>
	<header>
		{#if filename}<span class="filename">{filename}</span>{/if}
		<span class="language">{language}</span>
	</header>

	<pre><code>{code}</code></pre>
</figure>

<style>
	.ui-code-snippet {
		background: var(--ui-surface);
		border: 2px solid var(--ui-ink);
		border-radius: var(--ui-radius-lg);
		box-shadow: 0.45rem 0.45rem 0 0 var(--ui-accent);
		margin: 0;
		overflow: hidden;
	}

	header {
		align-items: center;
		background: color-mix(in srgb, var(--ui-accent) 18%, white);
		border-bottom: 2px dashed var(--ui-ink);
		display: flex;
		font-family: var(--ui-font-code);
		font-size: 0.82rem;
		gap: 0.6rem;
		justify-content: space-between;
		padding: 0.7rem 0.95rem;
		text-transform: uppercase;
	}

	.language {
		border: 2px dotted var(--ui-ink);
		border-radius: 999px;
		padding: 0.15rem 0.55rem;
	}

	pre {
		margin: 0;
		overflow-x: auto;
		padding: 1rem;
	}

	code {
		color: var(--ui-ink);
		display: block;
		font-family: var(--ui-font-code);
		font-size: 0.9rem;
		line-height: 1.45;
		white-space: pre-wrap;
	}
</style>
