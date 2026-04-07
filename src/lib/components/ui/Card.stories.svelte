<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { expect, within } from 'storybook/test';
	import Card from './Card.svelte';

	const { Story } = defineMeta({
		title: 'UI/Card',
		component: Card,
		tags: ['autodocs'],
		args: {
			eyebrow: 'Field note',
			title: 'Current style, brighter motion',
			body: 'This card keeps the black border and serif copy from the live site while adding colorful pop-art depth.'
		}
	});
</script>

<Story
	name="Default"
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('Current style, brighter motion')).toBeInTheDocument();
		await expect(canvas.getByText(/serif copy/)).toBeInTheDocument();
	}}
/>

<Story name="Interactive" args={{ interactive: true, accent: 'orange' }} />
