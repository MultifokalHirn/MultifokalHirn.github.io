<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { expect, within } from 'storybook/test';
	import authorImage from '$lib/assets/images/author.jpeg';
	import Avatar from './Avatar.svelte';

	const { Story } = defineMeta({
		title: 'UI/Avatar',
		component: Avatar,
		tags: ['autodocs'],
		args: {
			name: 'Lennard Wolf',
			status: 'online'
		}
	});
</script>

<Story
	name="Default"
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('LW')).toBeInTheDocument();
	}}
/>

<Story
	name="With Image"
	args={{ src: authorImage, alt: 'Portrait of Lennard Wolf', status: 'away' }}
/>
