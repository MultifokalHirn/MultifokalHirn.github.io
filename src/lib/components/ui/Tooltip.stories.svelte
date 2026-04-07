<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { expect, userEvent, within } from 'storybook/test';
	import Tooltip from './Tooltip.svelte';

	const { Story } = defineMeta({
		title: 'UI/Tooltip',
		component: Tooltip,
		tags: ['autodocs'],
		args: {
			label: 'Glossary note',
			text: 'Pop-art hover layers brighten the existing black-and-white shell.'
		}
	});
</script>

<Story
	name="Default"
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByRole('button', { name: 'Glossary note' });

		await userEvent.hover(trigger);
		await expect(canvas.getByRole('tooltip')).toBeInTheDocument();
	}}
/>
