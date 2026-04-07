<script lang="ts">
	import { resolve } from '$app/paths';
	import Breadcrumbs from '$lib/components/ui/Breadcrumbs.svelte';
	import Spotlight from '$lib/components/ui/Spotlight.svelte';
	import TagPill from '$lib/components/ui/TagPill.svelte';
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
	let breadcrumbItems = $derived([
		{ label: 'Home', href: '/' },
		{ label: 'Posts', href: '/posts' },
		{ label: data.post.title }
	]);
</script>

<Head
	title={data.post.title}
	description={data.post.description}
	tags={data.post.tags}
	path={data.post.path}
/>

<section class="post-page">
	<Breadcrumbs items={breadcrumbItems} accent="blue" />

	<Spotlight
		title={data.post.title}
		eyebrow="Post"
		body={data.post.description}
		accent="blue"
		itemprop="name"
	/>

	<div class="post-meta">
		<time datetime={data.post.date} itemprop="datePublished">
			{formatDate(data.post.date)}
		</time>
	</div>

	<div itemprop="articleBody" class="post-body-shell">
		<article itemscope itemtype="http://schema.org/BlogPosting" class="post-body">
			<PostContent />
			<h4 class="post-end-marker">◻</h4>
		</article>
	</div>

	{#if data.post.tags.length > 0}
		<div class="post-tags">
			{#each data.post.tags as tag (tag)}
				<TagPill
					label={tag}
					href={resolve('/tags/[tag]', { tag: slugifyTag(tag) })}
					accent="violet"
				/>
			{/each}
		</div>
	{/if}
</section>

<style>
	.post-page {
		display: grid;
		gap: 0.9rem;
	}

	.post-meta {
		display: flex;
		font-family: var(--ui-font-code);
		font-size: 0.82rem;
		justify-content: flex-end;
	}

	.post-body-shell {
		margin-top: 0.5rem;
	}

	.post-body {
		margin-top: 0;
	}

	.post-end-marker {
		color: blue;
		font-size: large;
		text-align: left;
	}

	.post-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem;
		justify-content: flex-end;
	}
</style>
