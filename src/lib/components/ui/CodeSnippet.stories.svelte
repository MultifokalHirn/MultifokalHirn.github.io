<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { expect, within } from 'storybook/test';
	import CodeSnippet from './CodeSnippet.svelte';

	const { Story } = defineMeta({
		title: 'UI/Code Snippet',
		component: CodeSnippet,
		tags: ['autodocs'],
		args: {
			filename: 'Button.svelte',
			language: 'svelte',
			code: `<Button tone="pink" variant="outline">\n\tRead more\n</Button>`
		}
	});
</script>

<Story
	name="Default"
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('Button.svelte')).toBeInTheDocument();
		await expect(canvas.getByText(/Read more/)).toBeInTheDocument();
	}}
/>
