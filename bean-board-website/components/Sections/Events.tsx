// components/Sections/Events.tsx
import React from 'react';
import MotionDiv from '@/components/UI/MotionDiv';

export default function Events() {
    const events = [
        { title: 'Weekly Poetry Night', date: 'Every Wednesday | 7:00 PM', delay: 0.1 },
        { title: 'Biophilic Design Workshop', date: 'Next Saturday | 10:00 AM', delay: 0.3 },
        { title: 'Local Coffee Roasters Showcase', date: 'Monthly | Check Calendar', delay: 0.5 },
    ];

    return (
        <section id="events" className="py-24 px-8 bg-bb-green-moss/10 text-bb-green-dark">
            <MotionDiv>
                <h2 className="text-6xl font-serif text-bb-green-dark mb-12 text-center">
                    Gather in the Grove
                </h2>
            </MotionDiv>

            <div className="max-w-4xl mx-auto space-y-6">
                {events.map((event) => (
                    <MotionDiv key={event.title} delay={event.delay} className="border-l-4 border-bb-green-moss p-6 shadow-lg rounded-lg bg-bb-earth">
                        <h3 className="text-3xl font-bold">{event.title}</h3>
                        <p className="text-lg text-bb-green-moss mt-1">{event.date}</p>
                    </MotionDiv>
                ))}
            </div>
        </section>
    );
}