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
    <main className="bg-bb-earth min-h-screen">
      <CTABooking /> {/* The Glowing Booking CTA */}

      {/* 1. HERO/ENTRY SECTION */}
      <section id="hero">
        <Hero title="Bean Board" subtitle="A Forest Within" />
      </section>

      {/* 2. ABOUT & HISTORY SECTION (Combined for Narrative Flow) */}
      <section id="about" className="py-20">
        <About />
      </section>

      {/* 3. MENU / WEEKLY SPECIALS SECTION */}
      <section id="menu" className="py-20 bg-bb-green-dark text-bb-earth">
        <Menu />
      </section>

      {/* 4. GALLERY SECTION */}
      <section id="gallery" className="py-20">
        <Gallery />
      </section>

      {/* 5. EVENTS SECTION */}
      <section id="events" className="py-20 bg-bb-earth">
        <Events />
      </section>

      {/* 6. CONTACT US SECTION (Includes Location & Hours) */}
      <section id="contact" className="py-20">
        <Contact />
      </section>

      {/* The Booking section links to a dedicated page for a complex form */}
    </main>
  );
}