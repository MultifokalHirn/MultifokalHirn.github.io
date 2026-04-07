<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { expect, userEvent, within } from 'storybook/test';
	import Modal from './Modal.svelte';

	const { Story } = defineMeta({
		title: 'UI/Modal',
		component: Modal,
		tags: ['autodocs'],
		args: {
			open: true,
			title: 'Newsletter signup',
			description: 'A dialog for focused decisions.',
			body: 'This modal keeps the site’s serif content while layering in a brighter animated accent.',
			closeLabel: 'Close dialog'
		}
	});
</script>

<Story
	name="Default"
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('dialog')).toBeInTheDocument();
		await userEvent.click(canvas.getByRole('button', { name: 'Close dialog' }));
		await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument();
	}}
/>
