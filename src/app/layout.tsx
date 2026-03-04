import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Gokul Sree Chandra | AI Systems Engineer',
  description: 'Portfolio of P Gokul Sree Chandra (@GokulAIx), an AI Systems Engineer specializing in Agentic Workflows, RAG Infrastructure, and Backend APIs.',
  keywords: [
    'Gokul Sree Chandra',
    'GokulAIx',
    'AI Systems Engineer',
    'Agentic Workflows',
    'RAG Infrastructure',
    'Backend APIs',
    'Machine Learning',
    'Python Developer',
    'LangGraph',
    'FastAPI',
  ],
  authors: [{ name: 'Gokul Sree Chandra' }],
  creator: 'Gokul Sree Chandra',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gokulsreechandra.dev',
    title: 'Gokul Sree Chandra | AI Systems Engineer',
    description: 'Expert in building reliable AI systems, Agentic workflows, and production-grade RAG pipelines.',
    siteName: 'Gokul Sree Chandra Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gokul Sree Chandra | AI Systems Engineer',
    description: 'AI Systems Engineer | Agentic Workflows, RAG Infrastructure, Backend APIs',
    creator: '@GokulAIx',
  },
  robots: {
    index: true,
    follow: true,
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
