// components/Sections/Gallery.tsx
import React from 'react';
import MotionDiv from '@/components/UI/MotionDiv';

export default function Gallery() {
    const images = [1, 2, 3, 4, 5, 6];

    return (
        <section id="gallery" className="py-24 px-8 bg-bb-earth text-bb-stone">
            <MotionDiv>
                <h2 className="text-6xl font-serif text-bb-green-dark mb-12 text-center">
                    The Forest Dimension
                </h2>
            </MotionDiv>

            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((id, index) => (
                    // Staggered animation effect
                    <MotionDiv key={id} delay={0.1 * index} className="overflow-hidden rounded-xl shadow-xl">
                        {/* Actual image component would replace this placeholder */}
                        <div className="h-64 w-full bg-bb-green-moss/30 flex items-center justify-center 
                hover:scale-105 transition-transform duration-500 cursor-pointer">
                            <span className="text-bb-green-dark">Image {id} Placeholder</span>
                        </div>
                    </MotionDiv>
                ))}
            </div>
        </section>
    );
}