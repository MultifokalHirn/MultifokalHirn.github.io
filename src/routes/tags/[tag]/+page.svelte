<script lang="ts">
	import { resolve } from '$app/paths';
	import Breadcrumbs from '$lib/components/ui/Breadcrumbs.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import Spotlight from '$lib/components/ui/Spotlight.svelte';
	import TagPill from '$lib/components/ui/TagPill.svelte';
	import type { BlogPost } from '$lib/content/posts';
	import Head from '$lib/_includes/head.svelte';
	import { formatDate, slugifyTag } from '$lib/site';

	interface Props {
		data: {
			tag: string;
			posts: BlogPost[];
		};
	}

	let { data }: Props = $props();
	let breadcrumbItems = $derived([{ label: 'Home', href: '/' }, { label: `Tag: ${data.tag}` }]);
	const cardAccents = ['green', 'blue', 'orange', 'violet'] as const;
</script>

<Head
	title={`Tag: ${data.tag}`}
	description={`Posts tagged ${data.tag}.`}
	path={`/tags/${slugifyTag(data.tag)}`}
	tags={[data.tag]}
/>

<section class="tag-page">
	<Breadcrumbs items={breadcrumbItems} accent="green" />
	<Spotlight
		title={`Tag: ${data.tag}`}
		eyebrow="Archive view"
		body={`Posts tagged ${data.tag}.`}
		accent="green"
	/>

	{#if data.posts.length === 0}
		<Card
			title="No posts in this archive yet"
			body={`There are no published posts tagged ${data.tag} right now.`}
			accent="green"
		/>
	{:else}
		<ul class="tag-posts">
			{#each data.posts as post, index (post.slug)}
				<li>
					<Card
						eyebrow={formatDate(post.date)}
						title={post.title}
						accent={cardAccents[index % cardAccents.length]}
					>
						<p>{post.description}</p>
						<div class="tag-link-row">
							<TagPill
								label="Open post"
								href={resolve('/posts/[slug]', { slug: post.slug })}
								accent="blue"
							/>
							<TagPill label={data.tag} accent="green" selected />
						</div>
					</Card>
				</li>
			{/each}
		</ul>
	{/if}
</section>

<style>
	.tag-page {
		display: grid;
		gap: 1rem;
	}

	.tag-posts {
		display: grid;
		gap: 1rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.tag-link-row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem;
		margin-top: 0.85rem;
	}
</style>
