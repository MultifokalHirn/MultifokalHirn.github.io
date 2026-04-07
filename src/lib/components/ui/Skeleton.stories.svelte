<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { expect } from 'storybook/test';
	import Skeleton from './Skeleton.svelte';

	const { Story } = defineMeta({
		title: 'UI/Skeleton',
		component: Skeleton,
		tags: ['autodocs'],
		args: {
			shape: 'card'
		}
	});
</script>

<Story
	name="Card"
	play={async ({ canvasElement }) => {
		await expect(canvasElement.querySelectorAll('.block').length).toBeGreaterThan(1);
	}}
/>

<Story name="Avatar" args={{ shape: 'avatar' }} />
