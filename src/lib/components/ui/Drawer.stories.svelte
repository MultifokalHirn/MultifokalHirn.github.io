<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { expect, userEvent, within } from 'storybook/test';
	import Drawer from './Drawer.svelte';

	const { Story } = defineMeta({
		title: 'UI/Drawer',
		component: Drawer,
		tags: ['autodocs'],
		args: {
			open: true,
			title: 'Quick links',
			description: 'A slide-in panel for secondary navigation or context tools.',
			body: 'Use the drawer to surface navigation, filters, or supplemental details.',
			closeLabel: 'Close drawer'
		}
	});
</script>

<Story
	name="Default"
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('dialog')).toBeInTheDocument();
		const [, closeButton] = canvas.getAllByRole('button', { name: 'Close drawer' });
		await userEvent.click(closeButton);
		await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument();
	}}
/>

<Story name="Left Side" args={{ side: 'left', accent: 'orange' }} />
