// components/Sections/Hero.tsx
import React from 'react';

// Define the component props based on the structure planned earlier
interface HeroProps {
    title: string;
    subtitle: string;
}

// This is the default export component that Next.js requires.
export default function Hero({ title, subtitle }: HeroProps) {
    // We'll add the Parallax and Framer Motion effects here later.
    return (
        <div className="relative h-screen w-full flex items-center justify-center bg-bb-stone">
            {/* Background Image/Video representing the "Forest Within" will go here */}

            <div className="z-10 text-center text-bb-earth">
                <h1 className="text-8xl font-serif tracking-widest leading-none opacity-0 animate-fadeIn">
                    {title}
                </h1>
                <p className="text-3xl mt-4 opacity-0 animate-slideUp">
                    {subtitle}
                </p>
            </div>
        </div>
    );
}