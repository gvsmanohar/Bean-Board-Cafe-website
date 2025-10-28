// tailwind.config.ts (You should already have this)
import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'bb-earth': '#F7F3E8',         // Background: Soft cream/beige (Rammed Earth)
                'bb-green-dark': '#1E392A',    // Primary Text/Accent (Deep Forest Green)
                'bb-green-moss': '#8C9F6B',    // Highlight/CTA (Muted Moss Green)
                'bb-stone': '#2A2A2A',         // Dark Text/Elements (Natural Stone)
            },
            fontFamily: {
                // We will define a custom serif font for headers (like a tree's texture)
                // You'll need to import this in layout.tsx later.
                serif: ['Cormorant Garamond', 'serif'],
            },
        },
    },
    plugins: [],
};
export default config;