'use client';

import { useState } from 'react';
import { TrendingUp, Target, DollarSign, ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';

export default function Clients() {
  const [showPrints, setShowPrints] = useState(false);
  const [mobileModal, setMobileModal] = useState(false);

  const handleVerPrints = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setMobileModal(true);
    } else {
      setShowPrints(true);
    }
  };

  return (
    <section id="clientes" className="py-16 sm:py-20 md:py-24 bg-neutral-light text-primary-dark overflow-hidden">

      {/* Modal fullscreen para mobile */}
      {mobileModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center md:hidden"
          style={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(0,0,0,0.85)' }}
        >
          <button
            onClick={() => setMobileModal(false)}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="w-full h-full flex items-center justify-center p-4">
            <Image
              src="/result_tudo_prata.png"
              alt="Resultados Tudo Pratas"
              width={1200}
              height={800}
              className="max-w-full max-h-screen object-contain rounded-lg"
            />
          </div>
        </div>
      )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-10 sm:mb-12 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5">
              Performance não é promessa. <span className="text-primary-green">É entrega.</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700">
              Como dobramos a eficiência de uma operação com apenas 8% de aumento em visitas.
            </p>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl relative overflow-hidden">
            {/* Conteúdo deslizante com overflow hidden */}
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: showPrints ? 'translateX(-100%)' : 'translateX(0)' }}
              >
                {/* Slide 1: Resultados */}
                <div className="w-full flex-shrink-0 pr-4 sm:pr-6 md:pr-8">
                  <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                    <div>
                      <div className="flex flex-wrap gap-3 mb-4">
                        <div className="inline-block bg-primary-blue/10 text-primary-blue px-4 py-2 rounded-full text-sm md:text-base font-semibold">
                          Loja: Tudo Pratas
                        </div>
                        <div className="inline-block bg-primary-green/10 text-primary-green px-4 py-2 rounded-full text-sm md:text-base font-semibold">
                          Segmento: Joias e Anéis
                        </div>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-primary-dark">
                        Conta estagnada transformada em operação de alta performance
                      </h3>

                      <div className="space-y-3 sm:space-y-4">
                        <div>
                          <h4 className="text-primary-green font-semibold mb-1 text-base md:text-lg lg:text-xl">O Desafio</h4>
                          <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                            Conta estagnada, com alto gasto em publicidade e baixa conversão por anúncio.
                          </p>
                        </div>

                        <div>
                          <h4 className="text-primary-green font-semibold mb-1 text-base md:text-lg lg:text-xl">A Estratégia</h4>
                          <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                            Reestruturação visual do catálogo, aplicação de design de alta conversão e ajuste fino da precificação.
                          </p>
                        </div>

                        <div>
                          <h4 className="text-primary-green font-semibold mb-1 text-base md:text-lg lg:text-xl">O Resultado</h4>
                          <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                            Dobramos a conversão de 2,7% para 5,4% com apenas 8% de aumento em visitas — mais eficiência, menos desperdício.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center">
                      <div className="space-y-3 sm:space-y-4">
                        <ResultCard
                          icon={<TrendingUp className="w-7 h-7 md:w-8 md:h-8" />}
                          label="Quantidade de Vendas"
                          value="+114%"
                          description="Aumento na quantidade de vendas"
                          color="green"
                        />
                        <ResultCard
                          icon={<Target className="w-7 h-7 md:w-8 md:h-8" />}
                          label="Faturamento Bruto"
                          value="+85%"
                          description="Crescimento no faturamento bruto"
                          color="blue"
                        />
                        <ResultCard
                          icon={<DollarSign className="w-7 h-7 md:w-8 md:h-8" />}
                          label="Taxa de Conversão"
                          value="2x"
                          description="De 2,7% para 5,4% de conversão"
                          color="green"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 2: Imagem de Resultado */}
                <div className="w-full flex-shrink-0 px-4 sm:px-6 md:px-8">
                  <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-6 sm:mb-8">
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-primary-dark">Resultados Reais</h3>
                      <p className="text-gray-700 text-sm md:text-base lg:text-lg">Print dos resultados da Tudo Pratas</p>
                    </div>

                    <div className="relative w-full rounded-xl overflow-hidden border-2 border-primary-green/20 shadow-lg">
                      <Image
                        src="/result_tudo_prata.png"
                        alt="Resultados Tudo Pratas"
                        width={1200}
                        height={800}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Botões de navegação */}
            <div className="flex justify-center gap-4 mt-6 sm:mt-8">
              <button
                onClick={() => setShowPrints(false)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition-all ${
                  !showPrints 
                    ? 'bg-primary-green text-primary-dark' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
                Ver Resultados
              </button>
              <button
                onClick={handleVerPrints}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition-all ${
                  showPrints 
                    ? 'bg-primary-green text-primary-dark' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Ver Prints
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Indicadores */}
            <div className="flex justify-center gap-2 mt-5">
              <button
                onClick={() => setShowPrints(false)}
                className={`h-2 rounded-full transition-all ${
                  !showPrints ? 'w-8 bg-primary-green' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label="Ver resultados"
              />
              <button
                onClick={() => { setShowPrints(true); handleVerPrints(); }}
                className={`h-2 rounded-full transition-all ${
                  showPrints ? 'w-8 bg-primary-green' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label="Ver prints"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResultCard({ 
  icon, 
  label, 
  value, 
  description, 
  color 
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  description: string;
  color: 'green' | 'blue';
}) {
  const colorClass = color === 'green' ? 'text-primary-green' : 'text-primary-blue';
  
  return (
    <div className="bg-gradient-to-br from-primary-dark to-primary-blue rounded-xl p-5 md:p-6 hover:shadow-lg transition-all text-white">
      <div className={`${colorClass} mb-3`}>{icon}</div>
      <div className="text-sm md:text-base text-gray-300 mb-1">{label}</div>
      <div className="text-3xl md:text-4xl font-bold mb-1">{value}</div>
      <div className="text-sm md:text-base text-gray-300">{description}</div>
    </div>
  );
}
