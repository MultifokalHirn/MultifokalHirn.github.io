export const UI_ACCENTS = {
	blue: '#1d4ed8',
	pink: '#ec4899',
	yellow: '#facc15',
	green: '#22c55e',
	orange: '#f97316',
	violet: '#8b5cf6'
} as const;

export type UiAccent = keyof typeof UI_ACCENTS;
export type PaginationToken = number | 'ellipsis';

export function getAccentValue(accent: UiAccent = 'blue'): string {
	return UI_ACCENTS[accent];
}

export function getInitials(name: string): string {
	const parts = name.trim().split(/\s+/).filter(Boolean);

	if (parts.length === 0) {
		return '?';
	}

	return parts
		.slice(0, 2)
		.map((part) => part[0]?.toUpperCase() ?? '')
		.join('');
}

export function createPaginationTokens(
	page: number,
	pageCount: number,
	siblingCount = 1
): PaginationToken[] {
	const safePageCount = Math.max(1, Math.trunc(pageCount));
	const safePage = Math.min(Math.max(1, Math.trunc(page)), safePageCount);
	const safeSiblingCount = Math.max(0, Math.trunc(siblingCount));
	const totalSlots = safeSiblingCount * 2 + 5;

	if (safePageCount <= totalSlots) {
		return Array.from({ length: safePageCount }, (_, index) => index + 1);
	}

	const leftSibling = Math.max(safePage - safeSiblingCount, 1);
	const rightSibling = Math.min(safePage + safeSiblingCount, safePageCount);
	const showLeftEllipsis = leftSibling > 2;
	const showRightEllipsis = rightSibling < safePageCount - 1;

	if (!showLeftEllipsis) {
		const visibleCount = 3 + safeSiblingCount * 2;
		return [
			...Array.from({ length: visibleCount }, (_, index) => index + 1),
			'ellipsis',
			safePageCount
		];
	}

	if (!showRightEllipsis) {
		const visibleCount = 3 + safeSiblingCount * 2;
		const start = safePageCount - visibleCount + 1;
		return [1, 'ellipsis', ...Array.from({ length: visibleCount }, (_, index) => start + index)];
	}

	return [
		1,
		'ellipsis',
		...Array.from({ length: rightSibling - leftSibling + 1 }, (_, index) => leftSibling + index),
		'ellipsis',
		safePageCount
	];
}

export function withBasePath(href: string, appBase: string): string {
	return href.startsWith('/') ? `${appBase}${href}` : href;
}
