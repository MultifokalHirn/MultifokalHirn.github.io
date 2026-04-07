<script lang="ts">
	import { resolve } from '$app/paths';
	import type { BlogPost } from '$lib/content/posts';
	import Head from '$lib/_includes/head.svelte';
	import { formatDate, slugifyTag } from '$lib/site';

	interface Props {
		data: {
			post: BlogPost;
		};
	}

	let { data }: Props = $props();
	let PostContent = $derived(data.post.component);
</script>

<Head
	title={data.post.title}
	description={data.post.description}
	tags={data.post.tags}
	path={data.post.path}
/>

<div style="border-top: 0px dashed black; padding: auto">
	<div style="border-bottom: 1px solid blue">
		<h2
			itemprop="name"
			style="text-decoration: underline; text-decoration-style: wavy; text-decoration-thickness: 0px; padding-bottom: 4px; text-decoration-color: blue; margin-top: 0%; margin-bottom: 0%; border: 0px dotted black"
		>
			{data.post.title}
		</h2>
	</div>
	<div style="text-align: right">
		<span style="font-family: 'Hack Nerd Font Mono'; font-size: 7pt !important; color: black;">
			<time datetime={data.post.date} itemprop="datePublished">
				{formatDate(data.post.date)}
			</time>
		</span>
	</div>
	<div
		itemprop="articleBody"
		style="width: 99%; margin-left: 1px; margin-right: 1px; padding-bottom: 0%; padding-top: 1%; padding-left: 0%; padding-right: 0%; margin-top: 1%; border-top: 0px dotted blue"
	>
		<article itemscope itemtype="http://schema.org/BlogPosting" style="margin-top: 2%">
			<PostContent />
			<h4 style="font-size: large; color: blue; text-align: left">◻</h4>
		</article>
	</div>

	{#if data.post.tags.length > 0}
		<div style="text-align: right">
			<span style="font-size: small"
				>[
				{#each data.post.tags as tag (tag)}
					<a href={resolve('/tags/[tag]', { tag: slugifyTag(tag) })}
						><code class="highligher-rouge"><nobr>{tag}</nobr></code>&nbsp;</a
					>
				{/each}
				]</span
			>
		</div>
	{/if}
</div>
