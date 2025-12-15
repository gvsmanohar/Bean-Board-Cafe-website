// app/page.tsx

import Hero from '@/components/Sections/Hero';
import About from '@/components/Sections/About';
import Menu from '@/components/Sections/Menu';
import Gallery from '@/components/Sections/Gallery';
import Events from '@/components/Sections/Events';
import Contact from '@/components/Sections/Contact';
import CTABooking from '@/components/UI/CTABooking';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fff9eb] text-black">
      {/* New Framer-style hero */}
      <section id="hero" className="pt-28 pb-24">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Brewed to perfection
          </h1>
          <p className="mt-4 text-lg text-neutral-700">
            Your perfect spot for coffee, pastries, and more.
          </p>
          <button
            className="mt-8 px-8 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-neutral-800 transition"
          >
            Explore menu
          </button>
        </div>

        {/* Cards row */}
        <div className="mt-20 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="rounded-[2.5rem] bg-white/70 shadow-lg overflow-hidden">
            <div
              className="h-72 bg-cover bg-center"
              style={{ backgroundImage: 'url(/images/coffee-1.jpg)' }}
            />
          </article>

          <article className="rounded-[2.5rem] bg-white/70 shadow-lg overflow-hidden">
            <div
              className="h-72 bg-cover bg-center"
              style={{ backgroundImage: 'url(/images/coffee-2.jpg)' }}
            />
          </article>

          <article className="rounded-[2.5rem] bg-white/70 shadow-lg overflow-hidden">
            <div
              className="h-72 bg-cover bg-center"
              style={{ backgroundImage: 'url(/images/coffee-3.jpg)' }}
            />
          </article>
        </div>
      </section>

      {/* Rest of your sections with working anchor links */}
      <section id="about">
        <About />
      </section>

      <section id="menu">
        <Menu />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="events">
        <Events />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <CTABooking />
    </main>
  );
}
