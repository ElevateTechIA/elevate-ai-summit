import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

export const metadata: Metadata = {
  title: 'Elevate AI Masterclass 2026 | Free Live Virtual Classes for Entrepreneurs',
  description:
    'Join Cesar Vega LIVE in our 3-day virtual masterclass. Learn how to use AI to buy back your time, multiply your output, and accelerate your business. Free live online classes, May 15-17.',
  openGraph: {
    title: 'Elevate AI Masterclass 2026 | Free Live Classes',
    description: 'Free 3-day live virtual masterclass. AI for entrepreneurs & business owners.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-white" suppressHydrationWarning>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
