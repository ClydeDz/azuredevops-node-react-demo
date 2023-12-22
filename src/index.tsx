import { createRoot } from 'react-dom/client';

import App from './components/App';
import { StrictMode } from 'react';


// Render your React component instead
const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
