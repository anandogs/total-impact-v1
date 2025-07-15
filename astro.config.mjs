// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 4321
  },
  vite: {
    server: {
      allowedHosts: [
        '3c53ee0a-0ea6-49a6-a0c0-b5e2f018d4bd-00-1pb5hful4ekf6.spock.replit.dev',
        '.replit.dev',
        '.repl.co'
      ]
    }
  }
});