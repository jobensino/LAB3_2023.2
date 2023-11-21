import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(async () => {
  return {
    server: {
      port: 3001,
      host: true,
    },
    plugins: [
      react({
        babel: {
          parserOpts: {
            plugins: ["decorators-legacy", "classProperties"],
          },
        }
      }),
      tsconfigPaths(),
    ],
    define: {
      "process.env": {},
    },
    build:{
      target:"esnext", //browsers can handle top-level-await features
    },
  };
});
