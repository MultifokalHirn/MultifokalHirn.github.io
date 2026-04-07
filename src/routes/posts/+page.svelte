<script lang="ts">
	import { resolve } from '$app/paths';
	import Breadcrumbs from '$lib/components/ui/Breadcrumbs.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import Spotlight from '$lib/components/ui/Spotlight.svelte';
	import TagPill from '$lib/components/ui/TagPill.svelte';
	import { publishedPosts } from '$lib/content/posts';
	import Head from '$lib/_includes/head.svelte';
	import { formatDate, slugifyTag } from '$lib/site';

	const breadcrumbItems = [{ label: 'Home', href: '/' }, { label: 'Posts' }] as const;

	const cardAccents = ['orange', 'blue', 'green', 'violet'] as const;
</script>

<Head
	title="Posts"
	description="Published posts by Lennard Wolf."
	path="/posts"
	tags={['blog', 'posts']}
/>

<section class="posts-index">
	<Breadcrumbs items={[...breadcrumbItems]} accent="orange" />
	<Spotlight
		title="Posts"
		eyebrow="Writing archive"
		body="Published notes, experiments, and project write-ups."
		accent="orange"
	/>

	{#if publishedPosts.length === 0}
		<Card
			title="No posts yet"
			body="Fresh notes will show up here once they are published."
			accent="orange"
		/>
	{:else}
		<ul class="post-grid">
			{#each publishedPosts as post, index (post.slug)}
				<li>
					<Card
						eyebrow={formatDate(post.date)}
						title={post.title}
						accent={cardAccents[index % cardAccents.length]}
					>
						<p>{post.excerpt}</p>
						<div class="post-links">
							<TagPill
								label="Read post"
								href={resolve('/posts/[slug]', { slug: post.slug })}
								accent="blue"
							/>

							{#each post.tags as tag (tag)}
								<TagPill
									label={tag}
									href={resolve('/tags/[tag]', { tag: slugifyTag(tag) })}
									accent="violet"
								/>
							{/each}
						</div>
					</Card>
				</li>
			{/each}
		</ul>
	{/if}
</section>

<style>
	.posts-index {
		display: grid;
		gap: 1rem;
	}

	.post-grid {
		display: grid;
		gap: 1rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.post-links {
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem;
		margin-top: 0.85rem;
	}
</style>
