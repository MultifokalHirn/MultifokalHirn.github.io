<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { getAccentValue, getInitials, type UiAccent } from './ui';

	type AvatarSize = 'small' | 'medium' | 'large';
	type AvatarStatus = 'online' | 'away' | 'busy' | 'offline';

	interface Props extends HTMLAttributes<HTMLElement> {
		name: string;
		src?: string;
		alt?: string;
		size?: AvatarSize;
		status?: AvatarStatus;
		accent?: UiAccent;
		square?: boolean;
	}

	const STATUS_ACCENTS = {
		online: 'green',
		away: 'yellow',
		busy: 'pink',
		offline: 'violet'
	} as const satisfies Record<AvatarStatus, UiAccent>;

	let {
		name,
		src,
		alt,
		size = 'medium',
		status = 'online',
		accent = 'blue',
		square = false,
		class: className,
		...props
	}: Props = $props();

	let initials = $derived(getInitials(name));
	let accentValue = $derived(getAccentValue(accent));
	let statusAccentValue = $derived(getAccentValue(STATUS_ACCENTS[status]));
</script>

<div
	{...props}
	class={['ui-component', 'ui-avatar', `size-${size}`, square && 'square', className]}
	style:--ui-accent={accentValue}
>
	{#if src}
		<img {src} alt={alt ?? name} />
	{:else}
		<span aria-hidden="true">{initials}</span>
		<span class="ui-sr-only">{name}</span>
	{/if}

	<span class="status" aria-label={status} title={status} style:--ui-status={statusAccentValue}
	></span>
</div>

<style>
	.ui-avatar {
		align-items: center;
		background: radial-gradient(
			circle at 20% 20%,
			color-mix(in srgb, var(--ui-accent) 28%, white),
			white 58%
		);
		border: 2px solid var(--ui-ink);
		border-radius: 999px;
		box-shadow: 0.3rem 0.3rem 0 0 var(--ui-accent);
		display: inline-flex;
		font-family: var(--ui-font-code);
		font-weight: 700;
		justify-content: center;
		overflow: hidden;
		position: relative;
	}

	.square {
		border-radius: var(--ui-radius-md);
	}

	.size-small {
		font-size: 0.9rem;
		height: 2.5rem;
		width: 2.5rem;
	}

	.size-medium {
		font-size: 1.05rem;
		height: 3.3rem;
		width: 3.3rem;
	}

	.size-large {
		font-size: 1.25rem;
		height: 4.2rem;
		width: 4.2rem;
	}

	img {
		height: 100%;
		object-fit: cover;
		width: 100%;
	}

	.status {
		background: var(--ui-status);
		border: 2px solid var(--ui-ink);
		border-radius: 999px;
		bottom: 0.05rem;
		display: block;
		height: 0.9rem;
		position: absolute;
		right: 0.05rem;
		width: 0.9rem;
	}
</style>
