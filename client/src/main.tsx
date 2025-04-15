import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import setupScrollReveal from "./lib/scrollReveal";

// Mount React app
createRoot(document.getElementById("root")!).render(<App />);

// Initialize scroll reveal animations after React hydration
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    setupScrollReveal();
  }, 100);
});
