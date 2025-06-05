
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
    icon: [
      { url: '/GokulAIx.png', href: '/GokulAIx.png', type: 'image/png', sizes: 'any' }
    ],
    apple: [
      { url: '/GokulAIx.png', href: '/GokulAIx.png', type: 'image/png' }
    ],
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
        {/* Favicon links are primarily handled by the metadata.icons object above */}
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
