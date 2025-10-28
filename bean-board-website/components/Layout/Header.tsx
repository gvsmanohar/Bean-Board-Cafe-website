// components/Layout/Header.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
];

export default function Header() {
    return (
        // Fixed Header that fades in after a short delay
        <motion.header
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }} // Delay fade-in until Hero text is done
            className="fixed top-0 left-0 right-0 z-40 bg-bb-green-dark/70 backdrop-blur-sm shadow-lg text-bb-earth p-4"
        >
            <nav className="max-w-7xl mx-auto flex justify-between items-center">

                {/* Logo/Site Title: Bean Board */}
                <Link href="/" className="text-2xl font-serif font-bold tracking-widest hover:text-bb-green-moss transition-colors">
                    BEAN BOARD 🌿
                </Link>

                {/* Navigation Links */}
                <ul className="flex space-x-8">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                className="text-lg hover:text-bb-green-moss transition-colors font-medium"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </motion.header>
    );
}