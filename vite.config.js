
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 4321,
    allowedHosts: [
      '3c53ee0a-0ea6-49a6-a0c0-b5e2f018d4bd-00-1pb5hful4ekf6.spock.replit.dev',
      '.replit.dev',
      '.repl.co'
    ]
  }
});
import { defineConfig } from 'vite'

export default defineConfig({
  preview: {
    allowedHosts: [
      '3c53ee0a-0ea6-49a6-a0c0-b5e2f018d4bd-00-1pb5hful4ekf6.spock.replit.dev',
      '.replit.dev',
      '.repl.co'
    ]
  }
})
