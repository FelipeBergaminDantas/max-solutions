'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[rgba(5,15,30,0.95)] backdrop-blur-lg shadow-lg border-b border-white/5' 
          : 'bg-[rgba(5,15,30,0.8)] backdrop-blur-md border-b border-white/5'
      }`}
      style={{
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.3)' : '0 2px 10px rgba(0,0,0,0.2)'
      }}
    >
      <nav className="container mx-auto px-6 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl md:text-2xl font-bold hover:opacity-90 transition-opacity">
            Max <span className="text-primary-green">Solutions & Performance</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="#empresa" className="text-sm font-medium hover:text-primary-green transition-colors">
              A Empresa
            </Link>
            <Link href="#sobre-nos" className="text-sm font-medium hover:text-primary-green transition-colors">
              Sobre Nós
            </Link>
            <Link href="#clientes" className="text-sm font-medium hover:text-primary-green transition-colors">
              Clientes
            </Link>
            <Link 
              href="#contato" 
              className="bg-primary-green hover:bg-primary-green/90 text-primary-dark px-6 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-lg hover:shadow-xl"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
