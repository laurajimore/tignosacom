import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [tailwindcss()],
    base: '/', // Asegura las rutas de tus imágenes y estilos para la web
});
