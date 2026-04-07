<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { expect, userEvent, within } from 'storybook/test';
	import Toggle from './Toggle.svelte';

	const { Story } = defineMeta({
		title: 'UI/Toggle',
		component: Toggle,
		tags: ['autodocs'],
		args: {
			label: 'Enable spotlight motion',
			description: 'Turns on the more colorful hover treatment.'
		}
	});
</script>

<Story
	name="Default"
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const toggle = canvas.getByRole('switch', { name: 'Enable spotlight motion' });

		await userEvent.click(toggle);
		await expect(toggle).toHaveAttribute('aria-checked', 'true');
	}}
/>
