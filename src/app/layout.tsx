import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header/Header';

export const metadata: Metadata = {
  title: 'Tudo sobre arte',
  description: 'Um projeto sobre artistas e obras de arte icônicas.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col items-center justify-between">
        <Header />
        {children}
        <footer className="w-full py-4 text-center text-sm">
          FOOTER - Tudo sobre arte © {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
