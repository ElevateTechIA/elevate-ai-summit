import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

export const metadata: Metadata = {
  title: 'Elevate AI Summit 2026 | Free Virtual Event for Entrepreneurs',
  description:
    'Join Cesar Vega & world-class AI experts LIVE. Learn how to use AI to buy back your time, multiply your results, and accelerate your business. Free 3-day virtual event, May 15-17.',
  openGraph: {
    title: 'Elevate AI Summit 2026 | Free Virtual Event',
    description: 'Free 3-day virtual event. AI for entrepreneurs & business owners.',
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
