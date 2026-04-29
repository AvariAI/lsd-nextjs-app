import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LSD + Next.js | Design System Demo',
  description: 'Modern design system with Next.js, TypeScript, and TailwindCSS v4',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
