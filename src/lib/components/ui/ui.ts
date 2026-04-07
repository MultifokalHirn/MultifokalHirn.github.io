export const UI_ACCENTS = {
	blue: '#1d4ed8',
	pink: '#ec4899',
	yellow: '#facc15',
	green: '#22c55e',
	orange: '#f97316',
	violet: '#8b5cf6',
	white: '#ffffff',
	black: '#000000'
} as const;

export type UiAccent = keyof typeof UI_ACCENTS;
export type PaginationToken = number | 'ellipsis';

export function getAccentValue(accent: UiAccent = 'blue'): string {
	return UI_ACCENTS[accent];
}

function getRelativeLuminance(channel: number): number {
	const normalized = channel / 255;

	return normalized <= 0.03928 ? normalized / 12.92 : ((normalized + 0.055) / 1.055) ** 2.4;
}

function parseHexColor(color: string): [number, number, number] {
	const normalized = color.replace('#', '');
	const safeColor =
		normalized.length === 3
			? normalized
					.split('')
					.map((part) => `${part}${part}`)
					.join('')
			: normalized;

	return [
		Number.parseInt(safeColor.slice(0, 2), 16),
		Number.parseInt(safeColor.slice(2, 4), 16),
		Number.parseInt(safeColor.slice(4, 6), 16)
	];
}

export function getAccentInk(accent: UiAccent = 'blue'): string {
	const [red, green, blue] = parseHexColor(getAccentValue(accent));
	const luminance =
		0.2126 * getRelativeLuminance(red) +
		0.7152 * getRelativeLuminance(green) +
		0.0722 * getRelativeLuminance(blue);
	const contrastWithBlack = (luminance + 0.05) / 0.05;
	const contrastWithWhite = 1.05 / (luminance + 0.05);

	return contrastWithWhite >= contrastWithBlack ? '#ffffff' : '#000000';
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
