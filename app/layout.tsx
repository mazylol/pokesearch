import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pokésearch',
  description: 'Search for your favorite Pokémon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="root" className="bg-gray-200 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
