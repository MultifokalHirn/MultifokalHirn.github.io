<script lang="ts">
	import { resolve } from '$app/paths';
	import FocusRing from '$lib/components/ui/FocusRing.svelte';
	import Spotlight from '$lib/components/ui/Spotlight.svelte';
	import TagPill from '$lib/components/ui/TagPill.svelte';
	import Tooltip from '$lib/components/ui/Tooltip.svelte';

	const roleTags = [
		{
			label: 'software engineer',
			accent: 'green',
			tooltip: 'with 7+ years of professional experience'
		},
		{
			label: 'IAM consultant',
			accent: 'pink',
			tooltip: '@amiconsult'
		}
	] as const;

	const primaryLinks = [
		// { label: 'CV', href: resolve('/resume'), accent: 'orange' },
		{ label: 'GitHub', href: resolve('/github'), accent: 'violet' },
		{ label: 'LinkedIn', href: resolve('/linkedin'), accent: 'blue' }
	] as const;

	const elsewhereLinks = [
		{ label: 'letterboxd', href: 'https://letterboxd.com/MultifokalHirn', accent: 'pink' },
		{ label: 'about.me', href: 'https://about.me/lennardwolf', accent: 'green' }
	] as const;

	const stackTags = [
		{ label: 'SvelteKit', accent: 'blue' },
		{ label: 'Storybook', accent: 'orange' },
		{ label: 'Playwright', accent: 'green' },
		{ label: 'Vitest', accent: 'violet' }
	] as const;

	// const workflowSnippet = ['bun run check', 'bun run test', 'bun run build-storybook'].join('\n');
</script>

<Spotlight title="" eyebrow="welcome" accent="blue" class="mb-4">
	<p class="lead-copy">
		Hello, my name is Lennard Wolf. I am a
		{#each roleTags as role, index (role.label)}
			<Tooltip label={role.label} text={role.tooltip} position="bottom" accent={role.accent} />
			{#if !(index === roleTags.length - 1)}<span> {' & '}</span>{:else}{/if}
		{/each}
		based in Berlin.
	</p>
	<br />
	<br />
	<div class="pill-row">
		<FocusRing
			// title="Keyboard-friendly quick links"
			// description="The interactive surfaces on the site are designed to stay compact, readable, and easy to tab through."
			accent="white"
		>
			<div class="pill-row">
				{#each [...primaryLinks, ...elsewhereLinks] as link (link.label)}
					<TagPill label={link.label} href={link.href} accent={link.accent} />
				{/each}
			</div>
		</FocusRing>
		<!-- {#each primaryLinks as link (link.label)}
			<TagPill label={link.label} href={link.href} accent={link.accent} />
		{/each} -->
	</div>
</Spotlight>

<div class="row g-3 mt-1">
	<!-- <div class="col-lg-7 d-grid gap-3">
		<Card eyebrow="Current toolkit" title="What I use to ship and test the site" accent="yellow">
			<div class="pill-row">
				{#each stackTags as tag (tag.label)}
					<TagPill label={tag.label} accent={tag.accent} />
				{/each}
			</div>

			<div class="tooltip-row">
				<Tooltip
					label="Why show the workflow?"
					text="These are the commands I usually run while iterating on the site."
					position="bottom"
				/>
			</div>

			<CodeSnippet
				filename="site-workflow.sh"
				language="bash"
				code={workflowSnippet}
				accent="blue"
			/>
		</Card>
	</div> -->

	<div class="col-lg-5 d-grid gap-3">
		<!-- <FocusRing
			title="Keyboard-friendly quick links"
			description="The interactive surfaces on the site are designed to stay compact, readable, and easy to tab through."
			accent="orange"
		>
			<div class="pill-row">
				{#each [...primaryLinks, ...elsewhereLinks] as link (link.label)}
					<TagPill label={link.label} href={link.href} accent={link.accent} />
				{/each}
			</div>
		</FocusRing> -->

		<!-- <Card
			eyebrow="Elsewhere"
			title="A few places I spend time online"
			body="GitHub and LinkedIn are the main professional touchpoints, with a couple of more informal links nearby when you feel like wandering."
			accent="green"
		/> -->
	</div>
</div>

<style>
	.lead-copy {
		align-items: center;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.pill-row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem;
	}
</style>
