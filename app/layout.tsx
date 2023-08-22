import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '掛橋沙耶香集氣區',
  description: 'Created by Ken Cheung @monakaken',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}  max-h-dscreen bg-nogizaka`}>{children}
        <Analytics />
      </body>
    </html>

  );
}
