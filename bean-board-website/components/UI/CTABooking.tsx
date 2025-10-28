// components/UI/CTABooking.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTABooking() {

    // 1. Define the ANIMATION STATES (The 'what')
    const pulseAnimation = {
        scale: [1, 1.05, 1],
        boxShadow: [
            '0 0 10px rgba(140, 159, 107, 0.5)',
            '0 0 25px rgba(140, 159, 107, 0.8)',
            '0 0 10px rgba(140, 159, 107, 0.5)'
        ],
    };

    // 2. Define the TRANSITION PROPERTIES (The 'how')
    const pulseTransition = {
        duration: 2.5,
        ease: "easeInOut" as const,
        repeat: Infinity,
    };

    return (
        <div className="fixed bottom-8 right-8 z-50">
            <Link href="/bookings" passHref>
                <motion.button
                    animate={pulseAnimation}
                    transition={pulseTransition}

                    className="px-8 py-4 text-xl font-bold rounded-full bg-bb-green-moss text-bb-green-dark shadow-xl cursor-pointer"
                >
                    BOOK YOUR TABLE 🌿
                </motion.button>
            </Link>
        </div>
    );
}