// app/layout.tsx
import './globals.css';
import { Cormorant_Garamond } from 'next/font/google';

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
    // Apply default font and the primary background color
    <html lang="en" className={`${cormorant.variable} scroll-smooth`}>
      <body className="bg-bb-earth text-bb-stone font-sans">
        {children}
      </body>
    </html>
  );
}