// components/Layout/Footer.tsx
import React from 'react';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        // Use the dark, earthy color for a strong base
        <footer className="bg-bb-green-dark text-bb-earth py-12 px-8 border-t-4 border-bb-green-moss">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Column 1: Brand & Philosophy */}
                <div>
                    <h3 className="text-2xl font-serif text-bb-green-moss mb-4">Bean Board</h3>
                    <p className="text-sm leading-relaxed">
                        Your sanctuary for coffee and connection, inspired by the Forest Within.
                        We practice biophilic design to awaken wonder and grounded-ness.
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#about" className="hover:text-bb-green-moss transition-colors">Our Story</a></li>
                        <li><a href="#menu" className="hover:text-bb-green-moss transition-colors">Menu</a></li>
                        <li><Link href="/bookings" className="hover:text-bb-green-moss transition-colors">Book a Table</Link></li>
                    </ul>
                </div>

                {/* Column 3: Contact Info */}
                <div>
                    <h4 className="text-lg font-bold mb-4">Visit & Connect</h4>
                    <address className="not-italic text-sm space-y-2">
                        <p>123 Forest Grove, Visakhapatnam, India</p>
                        <p>Email: contact@beanboard.com</p>
                        <p>Phone: (555) 555-BEAN</p>
                    </address>
                </div>

                {/* Column 4: Social Media (Placeholder) */}
                <div>
                    <h4 className="text-lg font-bold mb-4">Follow the Light</h4>
                    <div className="flex space-x-4 text-xl">
                        {/* Placeholder icons for Instagram, Facebook */}
                        <span className="hover:text-bb-green-moss cursor-pointer">📸</span>
                        <span className="hover:text-bb-green-moss cursor-pointer">📘</span>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-10 border-t border-bb-green-moss/30 pt-6">
                <p className="text-xs text-bb-earth/70">
                    &copy; {currentYear} Bean Board. All rights reserved.
                </p>
            </div>
        </footer>
    );
}