import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Material from './Material.tsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Material />
  </StrictMode>,
)
