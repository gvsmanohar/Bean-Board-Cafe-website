// components/UI/CTABooking.tsx
import React from 'react';
import Link from 'next/link';

export default function CTABooking() {
    return (
        // This div will be fixed on the screen, e.g., bottom-right.
        <div className="fixed bottom-6 right-6 z-50">
            <Link href="/bookings" passHref>
                {/* Placeholder for the "glowing, pulsating" animation */}
                <button className="px-6 py-3 text-lg font-bold rounded-full bg-bb-green-moss text-bb-green-dark shadow-xl 
          hover:shadow-bb-green-moss/70 hover:scale-[1.02] transition duration-300 ease-in-out 
          animate-pulse-slow">
                    BOOK YOUR TABLE 🌿
                </button>
            </Link>
        </div>
    );
}