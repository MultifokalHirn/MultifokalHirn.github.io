<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { expect, userEvent, within } from 'storybook/test';
	import FocusRing from './FocusRing.svelte';

	const { Story } = defineMeta({
		title: 'UI/Focus Ring',
		component: FocusRing,
		tags: ['autodocs']
	});
</script>

<script lang="ts">
	import FocusRingPreview from './FocusRing.svelte';
</script>

<Story
	name="Default"
	asChild
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByPlaceholderText('name@example.com');

		await userEvent.click(input);
		await expect(input).toHaveFocus();
	}}
>
	<FocusRingPreview
		title="Keyboard-first polish"
		description="The shared focus treatment uses offset color and keeps the current site’s black-and-white structure."
	>
		<div style="display: grid; gap: 0.75rem;">
			<input
				class="ui-component ui-focusable ui-pop-surface"
				style="padding: 0.8rem 1rem; border-radius: 0.8rem;"
				type="email"
				placeholder="name@example.com"
			/>
			<button
				type="button"
				class="ui-component ui-focusable ui-pop-surface"
				style="padding: 0.8rem 1rem;"
			>
				Save note
			</button>
		</div>
	</FocusRingPreview>
</Story>
