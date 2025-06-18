import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './index.css'
import Header from "./pages/header";
import Home from "./pages/home";
import IPPPing from "./pages/IPPPing"
import NoPage from "./pages/noPage";
import Portfolio from './pages/portfolio';
import Foot from './pages/footer';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<><Home /> <Foot /></>} />
          <Route path="projects/">
            <Route path="IPPPing" element={<><IPPPing /><Foot /></>} />
            <Route path="portfolio" element={<><Portfolio /><Foot /></>} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
