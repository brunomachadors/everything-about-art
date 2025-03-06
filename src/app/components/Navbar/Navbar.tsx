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
        className={`flex flex-col justify-center items-center sm:flex-row sm:justify-center gap-6 text-2xl ${
          isOpen ? 'block' : 'hidden'
        } sm:flex`}
      >
        <Link
          href="/"
          className="hover:text-yellow-500"
          onClick={() => setIsOpen(false)}
        >
          HOME
        </Link>
        <Link
          href="/artworks"
          className="hover:text-yellow-500"
          onClick={() => setIsOpen(false)}
        >
          OBRAS
        </Link>
        <Link
          href="/artist"
          className="hover:text-yellow-500"
          onClick={() => setIsOpen(false)}
        >
          ARTISTAS
        </Link>
        <Link
          href="/museum"
          className="hover:text-yellow-500"
          onClick={() => setIsOpen(false)}
        >
          MUSEUS
        </Link>
        <Link
          href="/street-art"
          className="hover:text-yellow-500"
          onClick={() => setIsOpen(false)}
        >
          ARTE URBANA
        </Link>
        <Link
          href="/about-us"
          className="hover:text-yellow-500"
          onClick={() => setIsOpen(false)}
        >
          SOBRE
        </Link>
      </div>
    </nav>
  );
}
