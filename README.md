# MultifokalHirn.github.io

Personal SvelteKit site for Lennard Wolf, with Storybook, Vitest, and Playwright configured as a reference-quality testing setup.

## Development

Install dependencies and start the app locally:

```sh
npm install
npm run dev
```

Useful app commands:

```sh
npm run app:build
npm run app:preview
npm run check
npm run lint
npm run format
```

## Testing

The repository uses three complementary layers:

1. **Vitest** for unit tests, route loader tests, and browser-mode component tests.
2. **Storybook** for component reference stories and interaction tests via play functions.
3. **Playwright** for end-to-end route and navigation coverage against the built app.

Primary commands:

```sh
npm run test:unit
npm run test:coverage
npm run test:storybook
npm run test:e2e
npm run test
```

`npm run test` runs the same sequence expected for CI: coverage, Storybook interaction tests, and Playwright end-to-end tests.

## Coverage policy

Coverage is enforced at **100% for lines, statements, and functions** across all testable source files in `src/`, including the starter/demo components that ship with the Svelte template.

Branch coverage is still reported, but it is not used as a hard gate because Svelte template instrumentation produces synthetic branch misses for simple interpolations such as metadata titles and text nodes. Those reports remain visible so regressions are still easy to inspect.

## Storybook scope

Storybook includes both the starter example stories and app-specific stories for reusable components such as:

- `Footer`
- `LegacyHtmlContent`
- `NotFoundMessage`

These stories double as executable interaction tests through Storybook play functions.

## Playwright scope

The Playwright suite covers real route behavior, including:

- navigation from the home page to the resume page
- redirects such as `/blog -> /posts`
- post-to-tag browsing flows
- not-found rendering for unknown routes
