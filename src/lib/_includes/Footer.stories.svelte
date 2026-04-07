<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { expect } from 'storybook/test';
	import Footer from './footer.svelte';

	const currentYear = new Date().getFullYear();

	const { Story } = defineMeta({
		title: 'App/Footer',
		component: Footer,
		tags: ['autodocs'],
		args: {
			author: 'Lennard Wolf'
		}
	});
</script>

<Story
	name="Default"
	play={async ({ canvasElement }) => {
		const text = canvasElement.textContent?.replace(/\s+/g, ' ').trim() ?? '';

		expect(text).toContain(`© ${currentYear}`);
		expect(text).toContain('Lennard Wolf');
		expect(text).not.toContain('Testing setup reference footer.');
	}}
/>

<Story
	name="With Description"
	args={{ description: 'Testing setup reference footer.' }}
	play={async ({ canvasElement }) => {
		const text = canvasElement.textContent?.replace(/\s+/g, ' ').trim() ?? '';

		expect(text).toContain('Testing setup reference footer.');
		expect(text).toContain(`© ${currentYear}`);
		expect(text).toContain('Lennard Wolf');
	}}
/>
