'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full" aria-label="Navegação principal">
      {/* Botão de menu responsivo */}
      <div className="lg:hidden flex justify-between items-center pb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none text-4xl text-left"
          aria-label="Menu de navegação"
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Links */}
      <div
        className={`w-full flex flex-col items-center gap-6 text-xl ${
          isOpen ? 'flex' : 'hidden'
        } lg:flex lg:flex-row lg:justify-center`}
      >
        <Link
          href="/"
          onClick={closeMenu}
          className="hover:text-yellow-500 w-full text-center py-2"
        >
          HOME
        </Link>
        <Link
          href="/artworks"
          onClick={closeMenu}
          className="hover:text-yellow-500 w-full text-center py-2"
        >
          OBRAS
        </Link>
        <Link
          href="/artists"
          onClick={closeMenu}
          className="hover:text-yellow-500 w-full text-center py-2"
        >
          ARTISTAS
        </Link>
        <Link
          href="/museum"
          onClick={closeMenu}
          className="hover:text-yellow-500 w-full text-center py-2"
        >
          MUSEUS
        </Link>
        <Link
          href="/street-art"
          onClick={closeMenu}
          className="hover:text-yellow-500 w-full text-center py-2"
        >
          ARTE URBANA
        </Link>
        <Link
          href="/about-us"
          onClick={closeMenu}
          className="hover:text-yellow-500 w-full text-center py-2"
        >
          SOBRE
        </Link>
      </div>
    </nav>
  );
}
