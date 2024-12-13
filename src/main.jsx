import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import MainRoutes from './routes/MainRoutes.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider>
            <MainRoutes />
        </ThemeProvider>
    </StrictMode>
);