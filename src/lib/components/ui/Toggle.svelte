<script lang="ts">
	import { getAccentValue, type UiAccent } from './ui';

	interface Props {
		label: string;
		description?: string;
		checked?: boolean;
		disabled?: boolean;
		tone?: UiAccent;
		onchange?: (checked: boolean) => void;
	}

	let {
		label,
		description,
		checked = false,
		disabled = false,
		tone = 'green',
		onchange
	}: Props = $props();

	let accentValue = $derived(getAccentValue(tone));

	function toggle() {
		if (disabled) {
			return;
		}

		checked = !checked;
		onchange?.(checked);
	}
</script>

<button
	type="button"
	role="switch"
	aria-checked={checked}
	aria-label={label}
	{disabled}
	class={['ui-component', 'ui-toggle', 'ui-pop-surface', 'ui-focusable', checked && 'checked']}
	style:--ui-accent={accentValue}
	onclick={toggle}
>
	<span class="track" aria-hidden="true">
		<span class="thumb"></span>
	</span>

	<span class="copy">
		<strong>{label}</strong>
		{#if description}
			<small>{description}</small>
		{/if}
	</span>
</button>

<style>
	.ui-toggle {
		align-items: center;
		display: inline-flex;
		gap: 0.9rem;
		padding: 0.9rem 1rem;
		text-align: left;
		width: 100%;
	}

	.track {
		background: white;
		border: 2px solid var(--ui-ink);
		border-radius: 999px;
		display: inline-flex;
		flex-shrink: 0;
		height: 1.7rem;
		padding: 0.12rem;
		width: 3.2rem;
	}

	.thumb {
		background: var(--ui-accent);
		border: 2px solid var(--ui-ink);
		border-radius: 999px;
		height: 1.2rem;
		transition: transform var(--ui-transition-fast);
		width: 1.2rem;
	}

	.checked .thumb {
		transform: translateX(1.38rem);
	}

	.copy {
		display: grid;
		gap: 0.15rem;
	}

	strong,
	small {
		margin: 0;
	}

	small {
		color: var(--ui-muted);
	}

	.ui-toggle:disabled {
		cursor: not-allowed;
		opacity: 0.6;
	}
</style>
