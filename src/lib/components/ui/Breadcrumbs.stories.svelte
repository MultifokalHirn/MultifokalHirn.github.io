<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { expect, within } from 'storybook/test';
	import Breadcrumbs from './Breadcrumbs.svelte';

	const { Story } = defineMeta({
		title: 'UI/Breadcrumbs',
		component: Breadcrumbs,
		tags: ['autodocs'],
		args: {
			items: [
				{ label: 'Home', href: '/' },
				{ label: 'Components', href: '/components' },
				{ label: 'Card' }
			]
		}
	});
</script>

<Story
	name="Default"
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('navigation', { name: 'Breadcrumb' })).toBeInTheDocument();
		await expect(canvas.getByText('Card')).toBeInTheDocument();
	}}
/>
