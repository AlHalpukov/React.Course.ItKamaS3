import { createRoot } from "react-dom/client";
import MainPage from "./components/MainPage.tsx";
import "./index.css";

const rootEl = document.getElementById("root");

const reactRoot = createRoot(rootEl!);

// reactRoot.render(<App />);
reactRoot.render(<MainPage />);
