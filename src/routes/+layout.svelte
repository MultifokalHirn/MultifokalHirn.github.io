<script lang="ts">
	import Footer from '$lib/_includes/footer.svelte';
	import Header from '$lib/_includes/header.svelte';
	import '$lib/components/ui/styles.css';
	import { site } from '$lib/site';
	import { onMount } from 'svelte';
	import './fonts.css';
	import './layout.css';

	let { children } = $props();
	let cssNakedDay = $state(true); // Set to false to disable CSS Naked Day script

	/**
	 * CSS Naked Day script v2.0 | The MIT License (MIT) Copyright (c) 2015 Ben Buchanan http://opensource.org/licenses/MIT
	 * Removes all linked, alternate, embedded and inline styles on April 9th (unless set to ignored). Works in IE11 and evergreen browsers.
	 * Changes: 2020.08.23 v2.0 - Updated to catch alternate stylesheets & added ignore feature.
	 * Source: https://css-naked-day.org/tools/200ok-css-naked-day-javascript.js
	 */

	const today = new Date();
	let month = today.getMonth();
	let day = today.getDate();
	var elements, attrs;

	// For testing:
	// month = 3;
	// day = 9;
	onMount(() => {
		cssNakedDay = Boolean(month === 3 && day === 9);
		if (cssNakedDay && typeof window !== 'undefined' && window.document) {
			// Add data-cssnakedday="ignore" to any element you want this script to ignore/not remove.
			// Useful if you have CSS supporting functionality that should still work during naked day.
			function notIgnored(el: Element) {
				return el.getAttribute('data-cssnakedday') != 'ignore';
			}

			// Remove all linked stylesheets and style blocks
			elements = document.querySelectorAll('link[rel~="stylesheet"], style');
			for (var i = 0; i < elements.length; i++) {
				if (notIgnored(elements[i])) {
					elements[i].parentNode?.removeChild(elements[i]);
				}
			}

			// Remove all inline styles
			attrs = document.querySelectorAll('[style]');
			for (var ii = 0; ii < attrs.length; ii++) {
				if (notIgnored(attrs[ii])) {
					attrs[ii].removeAttribute('style');
				}
			}
		}
	});
</script>

{#if cssNakedDay}
	<p>
		Why is this page looking so simple? It's <a href="https://css-naked-day.org/">CSS Naked Day</a>!
	</p>
	<hr />
{/if}
<div id="content" class="wrapper">
	<Header></Header>

	<div id="content-container" class="container">
		<main
			id="main"
			aria-label="Content"
			style="width: 98%; margin-top: 2px; margin-left: 1%; margin-right: 1%"
		>
			{@render children()}
			<br />
		</main>
	</div>

	<Footer author={site.author}></Footer>
</div>

<style>
	.wrapper {
		margin: auto;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	#content-container {
		flex: 1;
	}
</style>
