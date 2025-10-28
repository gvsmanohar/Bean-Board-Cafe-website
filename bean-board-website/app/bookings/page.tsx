// app/bookings/page.tsx

/**
 * The dedicated page for handling customer reservations and bookings.
 * This will feature the advanced booking form for Bean Board.
 */
import React from 'react';

// This is the default export component that Next.js expects for a page.
export default function BookingsPage() {
    return (
        <div className="min-h-screen p-8 bg-bb-earth text-bb-stone">
            <h1 className="text-4xl font-bold mb-4 text-bb-green-dark">Book Your Forest Escape</h1>
            <p className="text-xl">
                A custom booking form integration will go here, complete with
                a calendar and confirmation flow.
            </p>
            {/* The actual booking form component will be imported here later */}
        </div>
    );
}