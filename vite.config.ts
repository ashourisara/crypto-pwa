import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: "auto",
      includeAssets: ["favicon.ico", "apple-touch-icon.png"],
      manifest: {
        name: "Crypto PWA Dashboard",
        short_name: "CryptoDash",
        description: "A PWA for cryptocurrency",
        theme_color: "#FFFFFF",
        icons: [
          {
            src: "/favicon.svg",
            sizes: "32x32",
            type: "image/png",
          },
          {
            src: "/web-app-manifest-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "/web-app-manifest-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/web-app-manifest-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
});
