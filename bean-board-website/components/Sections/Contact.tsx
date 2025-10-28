// components/Sections/Contact.tsx
import React from 'react';

export default function Contact() {
    return (
        <section id="contact" className="p-20 text-bb-earth bg-bb-green-dark">
            <h2 className="text-5xl font-serif mb-12 text-center">
                Reach Our Hidden Grove
            </h2>
            <div className="max-w-2xl mx-auto p-8 rounded-lg bg-bb-green-dark/90 border border-bb-green-moss">
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 rounded-md border-2 border-bb-green-moss bg-bb-earth text-bb-stone placeholder-bb-stone/70 focus:ring-bb-green-moss focus:border-bb-green-moss"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 rounded-md border-2 border-bb-green-moss bg-bb-earth text-bb-stone placeholder-bb-stone/70 focus:ring-bb-green-moss focus:border-bb-green-moss"
                    />
                    <textarea
                        placeholder="Your Message"
                        rows={4}
                        className="w-full p-3 rounded-md border-2 border-bb-green-moss bg-bb-earth text-bb-stone placeholder-bb-stone/70 focus:ring-bb-green-moss focus:border-bb-green-moss"
                    />
                    <button
                        type="submit"
                        className="w-full bg-bb-green-moss text-bb-green-dark font-bold py-3 rounded-md hover:bg-bb-green-moss/80 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
                <p className="text-center mt-6 text-sm text-bb-earth/80">
                    Also available for calls at: (555) 555-BEAN
                </p>
            </div>
        </section>
    );
}