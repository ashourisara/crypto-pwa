import ReactDOM from "react-dom/client";
import "./index.css";
import AppProviders from "./providers";
import { registerSW } from "virtual:pwa-register";
import AppRoutes from "./routes/index.tsx";

registerSW({ immediate: true });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppProviders>
    <AppRoutes />
  </AppProviders>
);
