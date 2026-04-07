<script lang="ts">
	import { resolve } from '$app/paths';
	import { publishedPosts } from '$lib/content/posts';
	import Head from '$lib/_includes/head.svelte';
	import { formatDate } from '$lib/site';
</script>

<Head
	title="Posts"
	description="Published posts by Lennard Wolf."
	path="/posts"
	tags={['blog', 'posts']}
/>

<article>
	<header class="pb-1">
		<h2 style="margin-top: 0px;">Posts</h2>
	</header>

	<div style="width: 100%;">
		{#if publishedPosts.length === 0}
			<p>No posts <i>yet</i>.</p>
		{:else}
			<ul
				class="list-unstyled m-0"
				style="margin-top: 1%; padding-top: 0%; padding-left: 0%; padding-right: 0%; margin-bottom: 3%; margin-block-start: 0em; margin-block-end: 0em; padding-inline-start: 0px;"
			>
				{#each publishedPosts as post (post.slug)}
					<li
						class="link-area-lw my-hover-class list-unstyled"
						style="width: 100%; margin-left: 0px; margin-right: 0px; padding-left: 1%; padding-right: 1%; padding-bottom: 1%; margin-bottom: 3%; padding-top: 1%"
					>
						<a href={resolve('/posts/[slug]', { slug: post.slug })} style="display: block">
							<span
								style="font-family: 'Hack Nerd Font Mono'; padding-left: 2px; padding-right: 2px; font-size: 9pt;"
							>
								{formatDate(post.date)}
							</span>
							<h4
								class="mt-0"
								style="text-decoration: underline; text-decoration-thickness: 2px; text-decoration-color: blue; color: #000000"
							>
								{post.title}
							</h4>
							<br />
							<div style="border-top: 0px dotted blue">
								<p>{post.excerpt}</p>
							</div>
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</article>
