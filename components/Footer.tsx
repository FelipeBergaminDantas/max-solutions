import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-dark border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Max <span className="text-primary-green">Solutions & Performance</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Consultoria especializada em performance e crescimento no Mercado Livre. Transformamos dados em lucro real.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#empresa" className="text-gray-400 hover:text-primary-green transition-colors">
                  A Empresa
                </Link>
              </li>
              <li>
                <Link href="#diferenciais" className="text-gray-400 hover:text-primary-green transition-colors">
                  Diferenciais
                </Link>
              </li>
              <li>
                <Link href="#sobre-nos" className="text-gray-400 hover:text-primary-green transition-colors">
                  A Liderança
                </Link>
              </li>
              <li>
                <Link href="#clientes" className="text-gray-400 hover:text-primary-green transition-colors">
                  Resultados
                </Link>
              </li>
              <li>
                <Link href="#contato" className="text-gray-400 hover:text-primary-green transition-colors">
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="https://wa.me/5511947628089" target="_blank" rel="noopener noreferrer" className="hover:text-primary-green transition-colors">
                  WhatsApp: +55 11 94762-8089
                </a>
              </li>
              <li>
                <a href="https://mail.google.com/mail/?view=cm&to=max.mlconsult@gmail.com" className="hover:text-primary-green transition-colors">
                  max.mlconsult@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Certificações</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-green hover:text-primary-green/80 transition-colors flex items-center gap-2"
                >
                  ✓ Mercado Livre
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-green hover:text-primary-green/80 transition-colors flex items-center gap-2"
                >
                  ✓ Mercado Ads
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
            <p className="text-xs text-gray-500 mt-3">
              Clique para ver os certificados
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2025-2026 Max Solutions & Performance. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link href="/privacidade" className="hover:text-primary-green transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="hover:text-primary-green transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
