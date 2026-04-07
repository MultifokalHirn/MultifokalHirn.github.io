<script lang="ts">
	interface Props {
		title?: string;
		default_paths?: string[];
		header_pages?: string[];
		tags?: string[];
	}
	let { title, default_paths, header_pages = default_paths, tags }: Props = $props();
	let page_paths = $derived(header_pages || default_paths);
</script>

<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/>
<header id="nav-header" class="border-left-0 border-right-0">
	<div
		id="nav-container"
		class="position-relative d-flex justify-content-between align-items-center container"
	>
		<a class="website-title h3 m-0 mr-0" href="/">Header</a>

		{#if page_paths}
			<nav id="nav-menu-container" class="navbar-light">
				<input type="checkbox" id="nav-trigger" class="d-none" />
				<label
					for="nav-trigger"
					aria-label="button"
					class="d-inline-block d-md-none navbar-toggler-icon m-2"
				>
					<i class="fas fa-bars" style="cursor: pointer;"></i>
				</label>
				<div id="nav-menu" class="d-none d-md-flex">
					{#each page_paths as path}
						<a class="menu-opts d-block d-md-inline-block p-1" href={path}>{path}</a>
					{/each}
				</div>
			</nav>
		{/if}
	</div>
</header>

<style lang="scss">
	.website-title {
		font-size: 1.65rem !important;
		text-decoration: underline;
		--text-decoration-thickness: 2px;
		--text-decoration-style: dotted;

		/*transition: var(--text-decoration-thickness, 1px) 0.05s;*/
		/*transition-delay: 0s;*/
		color: black;
		/* max-width: 90%; */
		overflow-x: visible;
	}

	.website-title:hover {
		text-decoration-style: solid;
	}

	.menu-opts-home {
		/* margin-left: 2px; */
		/* margin-right: 2px; */
		/* padding-left: 2px; */
		/* padding-right: 2px; */
		text-decoration-style: solid !important;
		text-decoration-thickness: 2px;
		text-decoration-color: blue !important;
		text-decoration: none;
		border: white 2px dotted;
	}
	.menu-opts-home:hover {
		text-decoration: none;
	}
	.nav-trigger:checked ~ #nav-menu {
		display: block !important;
		position: relative !important;
		margin-top: 4.3rem;
		border: 2px dashed $layout-color-border;
		padding: 4% !important;
		padding-right: 5%;
		font-size: medium;
	}

	.nav-trigger:checked ~ .navbar-toggler-icon {
		display: hidden;
		cursor: pointer;
	}

	.navbar-toggler-icon {
		display: flex;
	}

	.content-container {
		padding-top: 1.5rem;
	}
</style>
