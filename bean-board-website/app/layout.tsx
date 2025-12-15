// app/layout.tsx
import './globals.css';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-serif',        // for headings
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans-body',    // for body text
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="bg-[#fff9eb] text-[#171717] font-[var(--font-sans-body)]">
        <Header />

        <main className="pt-[64px]">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
