<script lang="ts">
	import Head from '$lib/_includes/head.svelte';
	import authorImage from '$lib/assets/images/author.jpeg';
	import Spotlight from '$lib/components/ui/Spotlight.svelte';
	import HomeContent from '$lib/content/pages/HomeContent.svelte';
	import { site } from '$lib/site';
</script>

<Head title={site.title} description={site.description} path="/" />

<section class="home-shell" itemprop="articleBody">
	<div class="row g-4 align-items-start">
		<div class="col-md-4 col-lg-3">
			<!-- <Card eyebrow="Lennard Wolf" accent="blue" class="profile-card"> -->
			<Spotlight class="profile-stack" accent="yellow">
				<!-- <div class="avatar-row">
						<Avatar
							name="Lennard Wolf"
							src={authorImage}
							size="large"
							square
							status="online"
							accent="blue"
						/>
					</div> -->
				<img src={authorImage} alt="Portrait of Lennard Wolf" loading="lazy" />
				<!-- <Image
					class="profile-image"
					src={authorImage}
					alt="Portrait of Lennard Wolf"
					ratio="1 / 1.15"
					accent="yellow"
				/> -->
				<!-- 
					<div class="profile-tags">
						<TagPill label="Berlin" accent="pink" />
						<TagPill label="SvelteKit" accent="green" />
					</div> -->
			</Spotlight>
			<!-- </Card> -->
		</div>

		<div class=" col-md-8 col-lg-9">
			<HomeContent />
		</div>
	</div>
</section>

<style>
	.profile-image {
	}
	.home-shell {
		margin: 0 0.5%;
	}
	img {
		border-radius: calc(var(--ui-radius-lg) - 0.35rem);
		display: block;
		height: 100%;
		object-fit: cover;
		width: 100%;
	}

	.profile-stack {
		display: grid;
		gap: 1rem;
	}
</style>
