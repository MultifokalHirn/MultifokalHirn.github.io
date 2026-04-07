<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { expect, within } from 'storybook/test';
	import Spotlight from './Spotlight.svelte';

	const { Story } = defineMeta({
		title: 'UI/Spotlight',
		component: Spotlight,
		tags: ['autodocs'],
		args: {
			eyebrow: 'Announcement',
			title: 'Something exciting is coming soon',
			body: 'This surface follows the pointer with a colorful radial highlight while keeping the existing editorial page style.'
		}
	});
</script>

<Story
	name="Default"
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('Something exciting is coming soon')).toBeInTheDocument();
		await expect(canvas.getByText(/pointer with a colorful radial highlight/)).toBeInTheDocument();
	}}
/>
