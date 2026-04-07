export function normalizeLegacyHtml(html: string, repoPath?: string): string {
	let content = html.replaceAll('<!--more-->', '');

	if (!repoPath) {
		return content;
	}

	const repoUrl = `https://github.com/${repoPath}`;

	return content
		.replaceAll('href="./', `href="${repoUrl}/blob/main/`)
		.replaceAll('href=".', `href="${repoUrl}/blob/main/.`)
		.replaceAll(`href="/${repoPath}/`, `href="${repoUrl}/`)
		.replaceAll(`src="/${repoPath}/`, `src="${repoUrl}/`)
		.replaceAll('href="/tag/', 'href="/tags/');
}
