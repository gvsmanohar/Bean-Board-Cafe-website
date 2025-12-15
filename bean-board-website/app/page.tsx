export default function Home() {
  return (
    <main className="min-h-screen bg-[#fff9eb] text-black">
      {/* Navbar stays as you have it */}

      {/* Hero section */}
      <section className="pt-28 pb-24">
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
          {/* Card */}
          <article className="rounded-[2.5rem] bg-white/70 shadow-lg overflow-hidden">
            {/* replace with next/image */}
            <div className="h-72 bg-cover bg-center" style={{ backgroundImage: "url(/images/coffee-1.jpg)" }} />
          </article>

          <article className="rounded-[2.5rem] bg-white/70 shadow-lg overflow-hidden">
            <div className="h-72 bg-cover bg-center" style={{ backgroundImage: "url(/images/coffee-2.jpg)" }} />
          </article>

          <article className="rounded-[2.5rem] bg-white/70 shadow-lg overflow-hidden">
            <div className="h-72 bg-cover bg-center" style={{ backgroundImage: "url(/images/coffee-3.jpg)" }} />
          </article>
        </div>
      </section>
    </main>
  );
}
