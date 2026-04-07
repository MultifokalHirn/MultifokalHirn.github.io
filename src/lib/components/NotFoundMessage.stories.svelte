<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { expect, within } from 'storybook/test';
	import NotFoundMessage from './NotFoundMessage.svelte';

	const { Story } = defineMeta({
		title: 'App/Not Found Message',
		component: NotFoundMessage,
		tags: ['autodocs']
	});
</script>

<Story
	name="Default"
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const homeLink = canvasElement.querySelector('a');

		await expect(canvas.getByText('404')).toBeInTheDocument();
		await expect(canvas.getByRole('link', { name: 'Return home' })).toBeInTheDocument();
		expect(homeLink?.getAttribute('href')).toBe('/');
	}}
/>

<Story
	name="Server Error"
	args={{ status: 500 }}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('500')).toBeInTheDocument();
		await expect(canvas.getByRole('link', { name: 'Return home' })).toBeInTheDocument();
	}}
/>
