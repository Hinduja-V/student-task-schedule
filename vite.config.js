import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/student-task-schedule/', // 👈 Important: replace with your GitHub repo name
  plugins: [react()],
});
