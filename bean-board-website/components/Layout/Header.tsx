// components/Layout/Header.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
];
// components/Sections/Hero.tsx
// ...
// <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-bb-green-dark">

{/* 🟢 This line uses the image you placed in /public/images */ }
//    <div
//        className="absolute inset-0 bg-cover bg-center"
//        style={{ backgroundImage: 'url(/images/hero-forest.jpg)' }}
//    />

{/* ... rest of the component ... */ }
//</div>
export default function Header() {
    return (
        // Fixed Header that fades in after a short delay
        <motion.header
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }} // Delay fade-in until Hero text is done
            className="fixed top-0 left-0 right-0 z-40 text-bb-earth py-4"
        >
            <nav className="max-w-7xl mx-auto flex justify-between items-center
            px-4 rounded-full
               bg-black/30 backdrop-blur-md
               shadow-lg border border-white/10">

                {/* Logo/Site Title: Bean Board */}
                <Link href="/" className="hover:opacity-90 transition">
                    <Image
                        src="/images/beanboard-logo.png"  // Replace with your exact filename (e.g., logo.png, beanboard-logo.svg)
                        alt="Bean Board"
                        width={260}      // Adjust based on your logo size
                        height={80}     // Adjust based on your logo size
                        className="h-16 w-auto object-contain"  // Tailwind for responsive sizing; matches text-2xl scale
                        priority        // Optional: loads faster for above-the-fold logos
                    />
                </Link>

                {/* Navigation Links */}
                <ul className="flex space-x-8">
                    {navItems.map((item) => (
                        <li key={item.name} className="relative">
                            <motion.a
                                href={item.href}
                                className="text-lg font-medium"
                                whileHover={{ y: -2 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            >
                                {item.name}
                            </motion.a>
                            <motion.span
                                className="absolute left-0 -bottom-1 h-0.5 bg-bb-green-moss"
                                initial={{ width: 0 }}
                                whileHover={{ width: '100%' }}
                                transition={{ duration: 0.25 }}
                            />
                        </li>
                    ))}
                </ul>
            </nav>
        </motion.header>
    );
}