import { createRoot } from 'react-dom/client';

const App = () => (
  <>
    <h1>💖 Hello World!</h1>
    <p>Welcome to your React Electron application.</p>
  </>
);

const root = createRoot(document.body);
root.render(<App />);
