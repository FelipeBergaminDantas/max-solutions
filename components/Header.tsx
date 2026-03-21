'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Menu } from 'lucide-react';

const navLinks = [
  { href: '#empresa', label: 'A Empresa' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#sobre-nos', label: 'A Liderança' },
  { href: '#clientes', label: 'Resultados' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fecha menu ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F5F7FA] shadow-lg border-b border-black/10'
            : 'bg-[#F5F7FA] border-b border-black/10'
        }`}
      >
        <nav className="container mx-auto px-2 py-3 max-w-7xl">
          <div className="flex items-center justify-between">

            {/* Logo + nome */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity shadow-lg rounded-xl px-3 py-1 w-fit">
              <Image src="/logo.png" alt="Max Solutions & Performance" width={88} height={88} className="object-contain md:hidden" />
              <Image src="/logo - header.png" alt="Max Solutions & Performance" width={88} height={88} className="object-contain hidden md:block" />
              <span className="hidden md:inline text-xl md:text-2xl font-bold">
                <span className="text-primary-green">Solutions & Performance</span>
              </span>
            </Link>

            {/* Links desktop */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(({ href, label }) => (
                <Link key={href} href={href} className="text-sm font-medium text-[#0B1C2D] hover:text-primary-green transition-colors">
                  {label}
                </Link>
              ))}
              <Link
                href="#contato"
                className="bg-primary-green hover:bg-primary-green/90 text-primary-dark px-6 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-lg hover:shadow-xl"
              >
                Diagnóstico Gratuito
              </Link>
            </div>

            {/* Botão hamburguer mobile */}
            <button
              className="md:hidden text-[#0B1C2D] p-2 rounded-lg hover:bg-black/5 transition-colors"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menu"
            >
              <Menu className="w-6 h-6" />
            </button>

          </div>
        </nav>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Menu lateral */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 bg-[#F5F7FA] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-black/10">
          <span className="text-primary-green font-bold text-lg">Menu</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-[#0B1C2D] p-1 rounded-lg hover:bg-black/5 transition-colors"
            aria-label="Fechar menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
          <div className="mb-3">
            <Link
              href="#contato"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center bg-primary-green hover:bg-primary-green/90 text-primary-dark px-6 py-3 rounded-lg font-bold text-sm transition-all shadow-lg"
            >
              Diagnóstico Gratuito
            </Link>
          </div>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-[#0B1C2D] hover:text-primary-green hover:bg-black/5 px-4 py-3 rounded-lg font-medium transition-all"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="px-4 pb-8">
        </div>
      </div>
    </>
  );
}
