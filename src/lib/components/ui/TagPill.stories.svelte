<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { expect, within } from 'storybook/test';
	import TagPill from './TagPill.svelte';

	const { Story } = defineMeta({
		title: 'UI/Tag Pill',
		component: TagPill,
		tags: ['autodocs'],
		args: {
			label: 'svelte',
			href: '/tags/svelte'
		}
	});
</script>

<Story
	name="Linked"
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('link', { name: 'svelte' })).toBeInTheDocument();
	}}
/>

<Story name="Selected" args={{ selected: true, accent: 'orange' }} />
