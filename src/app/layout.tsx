import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'P Gokul Sree Chandra | AI Systems Engineer from India | GokulAIx',
  description: 'Portfolio of P Gokul Sree Chandra (@GokulAIx), a leading AI Systems Engineer and Machine Learning Engineer from India. Specialist in Agentic Workflows, RAG Infrastructure, and Backend APIs.',
  keywords: [
    'P Gokul Sree Chandra',
    'GokulAIx',
    'Gokul AI',
    'AI engineer from India',
    'AI Systems Engineer',
    'Machine Learning Engineer',
    'Generative AI Engineer',
    'Backend Engineer',
    'Python Developer',
    'LangGraph expert',
    'RAG Infrastructure specialist',
    'FastAPI Developer India',
    'NLP Engineer',
    'Applied ML Engineer',
  ],
  authors: [{ name: 'P Gokul Sree Chandra' }],
  creator: 'P Gokul Sree Chandra',
  metadataBase: new URL('https://gokulsreechandra.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gokulsreechandra.dev',
    title: 'P Gokul Sree Chandra | AI Systems Engineer | GokulAIx',
    description: 'Expert AI Engineer from India specializing in building reliable, production-grade AI systems, Agentic workflows, and RAG pipelines.',
    siteName: 'Gokul Sree Chandra Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'P Gokul Sree Chandra | AI Systems Engineer | @GokulAIx',
    description: 'AI Engineer from India | Agentic Workflows, RAG Infrastructure, Backend APIs',
    creator: '@GokulAIx',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        <link rel="icon" href="/Logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/Logo.png" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
