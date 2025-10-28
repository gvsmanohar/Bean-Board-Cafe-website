// components/Sections/About.tsx
import React from 'react';
import MotionDiv from '@/components/UI/MotionDiv';

export default function About() {
    return (
        <section id="about" className="py-24 px-8 bg-bb-earth text-bb-stone">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                <MotionDiv delay={0.1}>
                    <h2 className="text-6xl font-serif text-bb-green-dark mb-6">
                        Our Root Story
                    </h2>
                    <p className="text-xl mb-4 leading-relaxed">
                        **Bean Board** is more than a café; it&apos;s an escape into a **&quot;Forest Within.&quot;** Our history is rooted in a passion for biophilic design, blurring the lines
                        between architecture and nature to create a sanctuary of awe and connection.
                    </p>
                    <p className="text-lg leading-relaxed border-l-4 border-bb-green-moss pl-4">
                        Founded on the principle of **Grounded-ness**, we source our beans responsibly,
                        mirroring the natural cycle of growth and renewal. We invite you to breathe deeper
                        and reconnect with nature here.
                    </p>
                </MotionDiv>

                {/* Placeholder for a secondary image of reclaimed wood or clay */}
                <MotionDiv delay={0.3} className="h-96 rounded-xl shadow-2xl bg-bb-green-moss/50"> </MotionDiv>
            </div>
        </section>
    );
}