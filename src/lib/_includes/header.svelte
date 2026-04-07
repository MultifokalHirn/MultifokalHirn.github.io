<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { navigation, site } from '$lib/site';

	let pathname = $derived(page.url.pathname);
</script>

<header id="nav-header" class="border-left-0 border-right-0">
	<div
		id="nav-container"
		class="position-relative d-flex justify-content-between align-items-center container"
	>
		<a class="website-title h3 m-0 mr-0" href={resolve('/')}>{site.description}</a>

		<nav id="nav-menu-container" class="navbar-light">
			<input type="checkbox" id="nav-trigger" class="d-none" />
			<label
				for="nav-trigger"
				aria-label="Toggle navigation"
				class="d-inline-block d-md-none navbar-toggler-icon m-2"
			>
				<span style="cursor: pointer; font-size: 1.5rem; line-height: 1">&#9776;</span>
			</label>
			<div id="nav-menu" class="d-none d-md-flex">
				{#each navigation as item (item.href)}
					<a
						class={[
							'menu-opts',
							'p-1',
							'd-block',
							'd-md-inline-block',
							'isHome' in item && item.isHome && 'menu-opts-home'
						]}
						href={resolve(item.href)}
						aria-current={pathname === item.href ? 'page' : undefined}
					>
						{item.title}
					</a>
				{/each}
			</div>
		</nav>
	</div>
</header>
