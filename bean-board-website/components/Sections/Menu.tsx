// components/Sections/Menu.tsx
import React from 'react';
import MotionDiv from '@/components/UI/MotionDiv';

export default function Menu() {
    const specials = [
        { name: 'Moss Latte', desc: 'A hint of matcha with our signature espresso blend.' },
        { name: 'Rammed Earth Cheesecake', desc: 'Layered texture inspired by natural clay walls.' },
        { name: 'Canopy Cold Brew', desc: 'Slow-dripped and aged in stone vessels.' },
    ];

    return (
        <section id="menu" className="py-24 px-8 bg-bb-green-dark text-bb-earth">
            <MotionDiv>
                <h2 className="text-6xl font-serif text-bb-green-moss mb-12 text-center">
                    Weekly Harvest & Specials
                </h2>
            </MotionDiv>

            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
                {specials.map((item, index) => (
                    <MotionDiv key={item.name} delay={0.1 * index} className="text-center p-6 border border-bb-green-moss rounded-lg hover:shadow-lg transition-shadow duration-500">
                        <h3 className="text-3xl font-serif mb-2">{item.name}</h3>
                        <p className="text-lg text-bb-earth/70">{item.desc}</p>
                    </MotionDiv>
                ))}
            </div>

            <MotionDiv delay={0.6}>
                <div className="text-center mt-12">
                    <a href="/menu-full.pdf" className="text-bb-green-moss hover:underline text-xl font-bold">
                        View Full Menu (PDF)
                    </a>
                </div>
            </MotionDiv>
        </section>
    );
}