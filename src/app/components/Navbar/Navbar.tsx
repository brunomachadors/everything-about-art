'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full">
      <div className="sm:hidden flex justify-between items-center pb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none text-4xl text-left"
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      <div
        className={`flex flex-col items-center sm:flex-row sm:justify-center gap-6 text-2xl ${
          isOpen ? 'block' : 'hidden'
        } sm:flex`}
      >
        <Link href="/" className="hover:text-yellow-500">
          HOME
        </Link>
        <Link href="/artworks" className="hover:text-yellow-500">
          OBRAS
        </Link>
        <Link href="/artist" className="hover:text-yellow-500">
          ARTISTAS
        </Link>
        <Link href="/museum" className="hover:text-yellow-500">
          MUSEUS
        </Link>
        <Link href="/street-art" className="hover:text-yellow-500">
          ARTE URBANA
        </Link>
        <Link href="/about-us" className="hover:text-yellow-500">
          SOBRE
        </Link>
      </div>
    </nav>
  );
}
