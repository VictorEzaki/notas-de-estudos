import '../css/app.css';

import { initializeTheme } from './composables/useAppearance';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// This will set light / dark mode on page load...
initializeTheme();
