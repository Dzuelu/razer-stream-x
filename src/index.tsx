import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SelectionDrawer } from './selection-drawer/selection-drawer';

function App() {
  return (
    <>
      <SelectionDrawer />
      <h1>Hello world!</h1>
    </>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
