import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './n8n.tsx';   // or './n8n.tsx' if your file is named .tsx

createRoot(document.getElementById("root")!).render(<App />);
