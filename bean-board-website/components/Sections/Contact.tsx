// components/Sections/Contact.tsx
import React from 'react';
import MotionDiv from '@/components/UI/MotionDiv';

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-8 bg-bb-green-dark text-bb-earth">
            <MotionDiv>
                <h2 className="text-6xl font-serif mb-12 text-center text-bb-earth">
                    Reach Our Hidden Grove
                </h2>
            </MotionDiv>

            <div className="max-w-xl mx-auto p-10 rounded-lg bg-bb-green-dark/90 border border-bb-green-moss/50">
                <form className="space-y-6">
                    <MotionDiv delay={0.1}>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-4 rounded-md bg-bb-earth text-bb-stone placeholder-bb-stone/60 focus:ring-2 focus:ring-bb-green-moss"
                        />
                    </MotionDiv>
                    <MotionDiv delay={0.2}>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-4 rounded-md bg-bb-earth text-bb-stone placeholder-bb-stone/60 focus:ring-2 focus:ring-bb-green-moss"
                        />
                    </MotionDiv>
                    <MotionDiv delay={0.3}>
                        <textarea
                            placeholder="Your Message"
                            rows={5}
                            className="w-full p-4 rounded-md bg-bb-earth text-bb-stone placeholder-bb-stone/60 focus:ring-2 focus:ring-bb-green-moss"
                        />
                    </MotionDiv>
                    <MotionDiv delay={0.4}>
                        <button
                            type="submit"
                            className="w-full bg-bb-green-moss text-bb-green-dark font-bold py-4 rounded-md hover:bg-bb-green-moss/80 transition duration-300 shadow-lg"
                        >
                            Send Message
                        </button>
                    </MotionDiv>
                </form>
            </div>
        </section>
    );
}