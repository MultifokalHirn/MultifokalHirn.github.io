<script lang="ts">
	import { resolve } from '$app/paths';
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
</script>

<Head
	title={`Tag: ${data.tag}`}
	description={`Posts tagged ${data.tag}.`}
	path={`/tags/${slugifyTag(data.tag)}`}
	tags={[data.tag]}
/>

<article class="post">
	<!-- istanbul ignore next -->
	<h1>Tag: {data.tag}</h1>
	<ul>
		{#each data.posts as post (post.slug)}
			<li>
				<a href={resolve('/posts/[slug]', { slug: post.slug })}>{post.title}</a>
				({formatDate(post.date)})<br />
				<!-- istanbul ignore next -->
				{post.description}
			</li>
		{/each}
	</ul>
</article>
<hr />
