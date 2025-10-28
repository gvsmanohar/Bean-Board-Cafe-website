// app/layout.tsx
import './globals.css';
import { Cormorant_Garamond } from 'next/font/google';
import Header from '@/components/Layout/Header'; // <-- IMPORT
import Footer from '@/components/Layout/Footer'; // <-- IMPORT

// Define the custom serif font (Headers)
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-serif',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} scroll-smooth`}>
      <body className="bg-bb-earth text-bb-stone font-sans">
        <Header /> {/* <-- RENDER HEADER */}

        {/* This main wrapper is necessary to offset the fixed header */}
        <main className="pt-[64px]">
          {children}
        </main>

        <Footer /> {/* <-- RENDER FOOTER */}
      </body>
    </html>
  );
}