import type { Preview } from '@storybook/sveltekit';
import { INITIAL_VIEWPORTS } from 'storybook/viewport';
import '../src/lib/components/ui/styles.css';
import '../src/routes/layout.css';

const preview: Preview = {
	//👇 Enables auto-generated documentation for all stories
	tags: ['autodocs'],
	parameters: {
		viewport: {
			options: INITIAL_VIEWPORTS
		},

		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},

		a11y: {
			// 'todo' - show a11y violations in the test UI only
			// 'error' - fail CI on a11y violations
			// 'off' - skip a11y checks entirely
			test: 'todo'
		}
	},
	initialGlobals: {
		viewport: { value: 'desktop', isRotated: false }
	}
};

export default preview;
