import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig
  plugins: [react()],
  server;
    app.listen(port,'0.0.0.0', () => {
        console.log(`Server is running on port ${port}`);
});
