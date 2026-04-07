<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { expect, within } from 'storybook/test';
	import authorImage from '$lib/assets/images/author.jpeg';
	import Image from './Image.svelte';

	const { Story } = defineMeta({
		title: 'UI/Image',
		component: Image,
		tags: ['autodocs'],
		args: {
			src: authorImage,
			alt: 'Portrait of Lennard Wolf',
			caption: 'Editorial framing with a brighter accent shadow.'
		}
	});
</script>

<Story
	name="Default"
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByAltText('Portrait of Lennard Wolf')).toBeInTheDocument();
		await expect(canvas.getByText(/Editorial framing/)).toBeInTheDocument();
	}}
/>
