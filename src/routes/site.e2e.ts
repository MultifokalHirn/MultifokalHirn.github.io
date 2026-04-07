import { expect, test } from '@playwright/test';

test('home page links to the resume page', async ({ page }) => {
	await page.goto('/');

	await expect(page.getByText(/Hello, my name is Lennard Wolf/i)).toBeVisible();

	await page.locator('main').getByRole('link', { name: 'Resume' }).first().click();

	await page.waitForURL('**/resume');
	await expect(page.getByTitle('Lennard Wolf Resume')).toBeVisible();
});

test('blog redirects to the posts page', async ({ page }) => {
	await page.goto('/blog');

	await page.waitForURL('**/posts');
	await expect(page.getByRole('heading', { name: 'Posts' })).toBeVisible();
});

test('posts pages link through to tag archives', async ({ page }) => {
	await page.goto('/posts');

	await expect(page.getByRole('heading', { name: 'Posts' })).toBeVisible();

	await page.locator('a[href="/posts/python-project-template"]').click();

	await page.waitForURL('**/posts/python-project-template');
	await expect(
		page.getByRole('heading', { name: /\[OUTDATED\] Python Project Template/i })
	).toBeVisible();

	await page.getByRole('link', { name: 'python' }).click();

	await page.waitForURL('**/tags/python');
	await expect(page.getByRole('heading', { name: 'Tag: python' })).toBeVisible();
	await expect(page.getByText(/\[OUTDATED\] Python Project Template/i)).toBeVisible();
	await expect(page.locator('a[href="/posts/python-project-template"]')).toBeVisible();
});

test('unknown routes render the not found message', async ({ page }) => {
	await page.goto('/this-route-does-not-exist');

	await expect(page.getByText('404')).toBeVisible();
	await expect(page.getByRole('link', { name: 'Return home' })).toBeVisible();
});
