
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Inter } from 'next/font/google'; // Correct way to import Google fonts in Next.js

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Gokul.AI - Personal Portfolio',
  description: 'Personal portfolio of Gokul Sree Chandra, an AI/ML and NLP enthusiast.',
  icons: {
    icon: '/GokulAIx.png', // Path relative to the public folder
    apple: '/GokulAIx.png', // For Apple devices
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <head>
        {/* Explicit link tags for favicon */}
        <link rel="icon" href="/GokulAIx.png" type="image/png" />
        <link rel="apple-touch-icon" href="/GokulAIx.png" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
