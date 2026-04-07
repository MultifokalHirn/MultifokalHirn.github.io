<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { expect, within } from 'storybook/test';
	import Pagination from './Pagination.svelte';

	const { Story } = defineMeta({
		title: 'UI/Pagination',
		component: Pagination,
		tags: ['autodocs'],
		args: {
			page: 4,
			pageCount: 12,
			basePath: '/components?page='
		}
	});
</script>

<Story
	name="Middle Range"
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('navigation', { name: 'Pagination' })).toBeInTheDocument();
		await expect(canvas.getByRole('link', { name: '4' })).toHaveAttribute('aria-current', 'page');
	}}
/>
