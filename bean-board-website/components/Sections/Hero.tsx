// components/Sections/Hero.tsx
// Use 'use client' if you want complex effects like Parallax, otherwise keep it a Server Component
import React from 'react';
import MotionDiv from '@/components/UI/MotionDiv';

interface HeroProps {
    title: string;
    subtitle: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
    return (
        // Sets the Hero section to take up the full screen height
        <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-bb-green-dark">

            {/* Placeholder for the Biophilic Background Image/Video. Add your image to /public/images/hero-forest.jpg */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-60"
                style={{ backgroundImage: 'url(/images/hero-forest.jpg)' }}
            />
            {/* Example: A dark overlay to make text pop, like filtered light */}
            <div className="absolute inset-0 bg-bb-green-dark/60" />

            <div className="z-10 text-center text-bb-earth">
                {/* Title: Slow, grand fade-in for 'Wonder' */}
                <MotionDiv>
                    <h1 className="text-9xl font-serif tracking-widest leading-none">
                        {title}
                    </h1>
                </MotionDiv>

                {/* Subtitle: Gentle slide-up for 'Grounded-ness' */}
                <MotionDiv delay={0.5}>
                    <p className="text-4xl mt-6 tracking-wide">
                        {subtitle}
                    </p>
                </MotionDiv>
            </div>
        </div>
    );
}