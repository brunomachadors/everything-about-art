'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full">
      {/* Ícone do menu - Agora aparece até 1024px (tablets) */}
      <div className="lg:hidden flex justify-between items-center pb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none text-4xl text-left"
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Menu de navegação */}
      <div
        className={`w-full flex flex-col items-center gap-6 text-xl ${
          isOpen ? 'flex' : 'hidden'
        } lg:flex lg:flex-row lg:justify-center`}
      >
        <Link
          href="/"
          className="hover:text-yellow-500 w-full text-center py-2"
          onClick={closeMenu}
        >
          HOME
        </Link>
        <Link
          href="/artworks"
          className="hover:text-yellow-500 w-full text-center py-2"
          onClick={closeMenu}
        >
          OBRAS
        </Link>
        <Link
          href="/artist"
          className="hover:text-yellow-500 w-full text-center py-2"
          onClick={closeMenu}
        >
          ARTISTAS
        </Link>
        <Link
          href="/museum"
          className="hover:text-yellow-500 w-full text-center py-2"
          onClick={closeMenu}
        >
          MUSEUS
        </Link>
        <Link
          href="/street-art"
          className="hover:text-yellow-500 w-full text-center py-2"
          onClick={closeMenu}
        >
          ARTE URBANA
        </Link>
        <Link
          href="/about-us"
          className="hover:text-yellow-500 w-full text-center py-2"
          onClick={closeMenu}
        >
          SOBRE
        </Link>
      </div>
    </nav>
  );
}
