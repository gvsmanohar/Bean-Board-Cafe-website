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

export default function Header() {
    return (
        <motion.header
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="fixed top-4 left-0 right-0 z-40 flex justify-center pointer-events-none"
        >
            {/* Pill container */}
            <nav
                className="pointer-events-auto flex items-center justify-between gap-10
                   px-8 py-3 rounded-full
                   bg-[#e3ddcf] shadow-[0_18px_35px_rgba(0,0,0,0.25)]"
                style={{ maxWidth: '960px', width: 'calc(100% - 3rem)' }}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/images/beanboard-logo.png"
                        alt="Bean Board"
                        width={140}
                        height={40}
                        className="h-9 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Links */}
                <ul className="flex items-center gap-8 text-sm font-medium text-[#222]">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className="hover:text-black transition-colors"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </motion.header>
    );
}
