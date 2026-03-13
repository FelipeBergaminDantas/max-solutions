'use client';

import Image from 'next/image';

export default function Company() {
  return (
    <section id="empresa" className="py-16 sm:py-20 md:py-24 bg-neutral-light text-primary-dark">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-8 sm:mb-10 md:mb-12">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 relative mb-6 sm:mb-8 bg-gradient-to-br from-primary-dark to-primary-blue rounded-2xl flex items-center justify-center">
              {/* Logo será adicionado aqui */}
              <div className="text-white text-center p-4">
                <p className="text-xs sm:text-sm mb-2">Logo da Empresa</p>
                <p className="text-xs text-gray-300">Adicionar em: public/logo.png</p>
              </div>
              {/* Descomente quando adicionar o logo:
              <Image
                src="/logo.png"
                alt="Max Solutions & Performance"
                fill
                className="object-contain p-8"
              />
              */}
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center px-4">
              Sobre a <span className="text-primary-green">Max Solutions & Performance</span>
            </h2>
          </div>

          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-700 leading-relaxed px-4">
            <p className="mb-4 sm:mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            
            <p className="mb-4 sm:mb-6">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            
            <p className="mb-4 sm:mb-6">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
            
            <p className="mb-4 sm:mb-6">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
            </p>
            
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
