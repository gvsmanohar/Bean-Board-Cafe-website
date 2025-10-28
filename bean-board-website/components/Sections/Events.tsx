// components/Sections/Events.tsx
import React from 'react';

export default function Events() {
    return (
        <section id="events" className="p-20 text-bb-green-dark bg-bb-earth">
            <h2 className="text-5xl font-serif mb-12 text-center">
                Gather in the Grove
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
                {/* Placeholder for an Event Listing */}
                <div className="border-l-4 border-bb-green-moss p-4 shadow-lg rounded-lg bg-white">
                    <h3 className="text-2xl font-bold">Weekly Poetry Night</h3>
                    <p className="text-lg text-bb-green-moss">Every Wednesday | 7:00 PM</p>
                    <p className="mt-2">Join us for a relaxing evening of open-mic poetry and specialty brews.</p>
                </div>
                <div className="border-l-4 border-bb-green-moss p-4 shadow-lg rounded-lg bg-white">
                    <h3 className="text-2xl font-bold">Biophilic Design Workshop</h3>
                    <p className="text-lg text-bb-green-moss">Next Saturday | 10:00 AM</p>
                    <p className="mt-2">Learn to bring the Forest Within to your own home with our expert designers.</p>
                </div>
            </div>
        </section>
    );
}