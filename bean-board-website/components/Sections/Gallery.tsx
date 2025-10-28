// components/Sections/Gallery.tsx
import React from 'react';

export default function Gallery() {
    return (
        <section id="gallery" className="p-20 text-bb-stone bg-bb-earth">
            <h2 className="text-5xl font-serif mb-8 text-center text-bb-green-dark">
                The Forest Dimension
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Placeholder for Immersive Image Grid */}
                <div className="h-64 bg-bb-green-moss/50 rounded-lg flex items-center justify-center">Photo 1</div>
                <div className="h-64 bg-bb-green-moss/50 rounded-lg flex items-center justify-center">Photo 2</div>
                <div className="h-64 bg-bb-green-moss/50 rounded-lg flex items-center justify-center">Photo 3</div>
                <div className="h-64 bg-bb-green-moss/50 rounded-lg flex items-center justify-center">Photo 4</div>
            </div>
            <p className="mt-8 text-center text-lg">
                Explore the lush greenery and earthy textures of Bean Board.
            </p>
        </section>
    );
}