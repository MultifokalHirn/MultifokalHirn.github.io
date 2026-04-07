<script lang="ts">
	import Head from '$lib/_includes/head.svelte';
	import authorImage from '$lib/assets/images/author.jpeg';
	import Image from '$lib/components/ui/Image.svelte';
	import HomeContent from '$lib/content/pages/HomeContent.svelte';
	import { site } from '$lib/site';
</script>

<Head title={site.title} description={site.description} path="/" />

<section class="home-shell" itemprop="articleBody">
	<div class="row g-4 align-items-start">
		<div class="col-md-4 col-lg-3">
			<!-- <Card eyebrow="Lennard Wolf" accent="blue" class="profile-card"> -->
			<div class="profile-stack">
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

				<Image src={authorImage} alt="Portrait of Lennard Wolf" ratio="1 / 1.15" accent="yellow" />
				<!-- 
					<div class="profile-tags">
						<TagPill label="Berlin" accent="pink" />
						<TagPill label="SvelteKit" accent="green" />
					</div> -->
			</div>
			<!-- </Card> -->
		</div>

		<div class="mystery-green-area col-md-8 col-lg-9">
			<HomeContent />
		</div>
	</div>
</section>

<style>
	.home-shell {
		margin: 0 0.5%;
	}

	.profile-stack {
		display: grid;
		gap: 1rem;
	}

	.avatar-row {
		display: flex;
		justify-content: center;
	}

	.profile-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem;
	}
</style>
