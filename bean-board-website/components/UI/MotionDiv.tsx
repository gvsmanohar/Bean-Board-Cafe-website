// components/UI/MotionDiv.tsx
'use client';
// Must be a client component to use Framer Motion and event listeners

import { motion } from 'framer-motion';

interface MotionDivProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    // Use 'whileInView' for animations that trigger as the user scrolls to a section
}

export default function MotionDiv({ children, delay = 0, className }: MotionDivProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }} // Start invisible and slightly below position
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible and correct position
            transition={{ duration: 0.8, delay: delay, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }} // Only trigger once when 20% of the element is visible
            className={className}
        >
            {children}
        </motion.div>
    );
}