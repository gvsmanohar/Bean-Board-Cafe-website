// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'bb-earth': '#F7F3E8',         // Background: Soft cream/beige (Rammed Earth)
                'bb-green-dark': '#1E392A',    // Primary Text/Accent (Deep Forest Green)
                'bb-green-moss': '#8C9F6B',    // Highlight/CTA (Muted Moss Green)
                'bb-stone': '#2A2A2A',         // Dark Text/Elements (Natural Stone)
            },
            fontFamily: {
                // You would define a custom font here
                // sans: ['Inter', 'sans-serif'], 
                // serif: ['Cormorant Garamond', 'serif'],
            },
        },
    },
    plugins: [],
};
export default config;