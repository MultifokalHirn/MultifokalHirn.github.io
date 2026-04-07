import type { Component } from 'svelte';

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

declare module '*.md' {
	const component: Component<Record<string, never>>;
	export const metadata: Record<string, unknown>;
	export default component;
}

declare module '*.html?raw' {
	const html: string;
	export default html;
}

declare module '*.xml?url' {
	const assetUrl: string;
	export default assetUrl;
}

declare module '*.webmanifest?url' {
	const assetUrl: string;
	export default assetUrl;
}

export {};
