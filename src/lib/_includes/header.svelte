<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import Button from '$lib/components/ui/Button.svelte';
	import Drawer from '$lib/components/ui/Drawer.svelte';
	import TagPill from '$lib/components/ui/TagPill.svelte';
	import { navigation, site } from '$lib/site';

	let pathname = $derived(page.url.pathname);
	let mobileMenuOpen = $state(false);

	const navAccents = ['blue', 'orange', 'green', 'violet'] as const;

	function getNavLabel(title: string, isHome?: boolean) {
		return isHome ? 'Home' : title;
	}
</script>

<header id="nav-header" class="border-left-0 border-right-0">
	<div
		id="nav-container"
		class="position-relative d-flex justify-content-between align-items-center container flex-wrap"
	>
		<a class="website-title h3 m-0 mr-0" href={resolve('/')}>{site.description}</a>

		<nav id="nav-menu-container" class="navbar-light" aria-label="Primary">
			<Button
				class="d-inline-flex d-md-none nav-trigger-button"
				label="Menu"
				tone="orange"
				size="small"
				onclick={() => {
					mobileMenuOpen = true;
				}}
			/>

			<div id="nav-menu" class="d-none d-md-flex nav-pill-row">
				{#each navigation as item, index (item.href)}
					<TagPill
						label={item.title}
						href={item.href}
						accent={navAccents[index % navAccents.length]}
						selected={pathname === item.href}
					/>
				{/each}
			</div>

			{#if mobileMenuOpen}
				<Drawer
					open={mobileMenuOpen}
					title="Navigate"
					description="Move between the homepage, resume, and profile links."
					side="right"
					accent="orange"
					onclose={() => {
						mobileMenuOpen = false;
					}}
				>
					<nav class="mobile-drawer-nav" aria-label="Mobile navigation">
						{#each navigation as item (item.href)}
							<a
								class="ui-component ui-pop-surface ui-focusable mobile-link trigger-button"
								href={resolve(item.href)}
								onclick={() => {
									mobileMenuOpen = false;
								}}
							>
								<span class="mobile-link-title"
									>{getNavLabel(item.title, 'isHome' in item ? item.isHome : undefined)}</span
								>
								<span class="mobile-link-url">{resolve(item.href)}</span>
							</a>
						{/each}
					</nav>
				</Drawer>
			{/if}
		</nav>
	</div>
</header>

<style>
	.nav-pill-row {
		align-items: center;
		flex-wrap: wrap;
		gap: 0.55rem;
		justify-content: flex-end;
	}

	:global(#nav-header) {
		white-space: normal;
	}

	:global(#nav-container) {
		gap: 0.9rem;
		height: auto;
		min-height: 4.9rem;
		padding-block: 0.7rem;
	}

	:global(#nav-menu-container) {
		margin-left: auto;
		position: static;
	}

	.website-title {
		flex: 1 1 14rem;
		line-height: 1.1;
		max-inline-size: min(100%, 21rem);
		min-width: 0;
		text-wrap: balance;
		white-space: normal;
	}

	:global(.nav-trigger-button) {
		margin: 0;
	}

	.mobile-drawer-nav {
		display: grid;
		gap: 0.85rem;
	}

	.mobile-link {
		background: white;
		border-radius: var(--ui-radius-md);
		color: var(--ui-ink);
		display: grid;
		gap: 0.25rem;
		padding: 0.9rem 1rem;
		text-decoration: none;
	}

	.mobile-link-title {
		font-family: var(--ui-font-display);
		font-size: 1.1rem;
		text-decoration: underline;
		text-decoration-color: var(--ui-accent-blue);
		text-decoration-style: wavy;
	}

	.mobile-link-url {
		font-family: var(--ui-font-code);
		font-size: 0.82rem;
	}

	@media (max-width: 899px) {
		:global(#nav-container) {
			align-items: flex-start;
		}

		.website-title {
			font-size: clamp(1.15rem, 4.5vw, 1.45rem) !important;
			max-inline-size: min(100%, 15rem);
		}
	}
</style>
