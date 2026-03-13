'use client';

import { useState } from 'react';
import { TrendingUp, Target, DollarSign, Play, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Clients() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="clientes" className="py-16 sm:py-20 md:py-24 bg-neutral-light text-primary-dark overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-10 sm:mb-12 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5">
              Resultados <span className="text-primary-green">Comprovados</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700">
              Performance não é promessa. É entrega.
            </p>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl relative overflow-hidden">
            {/* Conteúdo deslizante com overflow hidden */}
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: showVideo ? 'translateX(-100%)' : 'translateX(0)' }}
              >
                {/* Slide 1: Resultados */}
                <div className="w-full flex-shrink-0 pr-4 sm:pr-6 md:pr-8">
                  <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                    <div>
                      <div className="inline-block bg-primary-green/10 text-primary-green px-4 py-2 rounded-full text-sm md:text-base font-semibold mb-4">
                        Segmento: Joias e Anéis
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-primary-dark">
                        De estagnação para crescimento exponencial
                      </h3>

                      <div className="space-y-3 sm:space-y-4">
                        <div>
                          <h4 className="text-primary-green font-semibold mb-1 text-base md:text-lg lg:text-xl">Desafio</h4>
                          <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                            Loja com vendas estagnadas, alto custo com anúncios e baixo retorno sobre investimento.
                          </p>
                        </div>

                        <div>
                          <h4 className="text-primary-green font-semibold mb-1 text-base md:text-lg lg:text-xl">Diagnóstico</h4>
                          <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                            Análise completa revelou oportunidades em otimização de anúncios, 
                            estruturação de catálogo e estratégia de precificação.
                          </p>
                        </div>

                        <div>
                          <h4 className="text-primary-green font-semibold mb-1 text-base md:text-lg lg:text-xl">Estratégia Aplicada</h4>
                          <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                            Reestruturação completa de campanhas, otimização de ROI, 
                            análise de concorrência e implementação de estratégias baseadas em dados.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center">
                      <div className="space-y-3 sm:space-y-4">
                        <ResultCard
                          icon={<TrendingUp className="w-7 h-7 md:w-8 md:h-8" />}
                          label="Crescimento em Faturamento"
                          value="3x"
                          description="Triplicou em menos de 6 meses"
                          color="green"
                        />
                        <ResultCard
                          icon={<Target className="w-7 h-7 md:w-8 md:h-8" />}
                          label="Redução de Custo"
                          value="-35%"
                          description="Custo por conversão otimizado"
                          color="blue"
                        />
                        <ResultCard
                          icon={<DollarSign className="w-7 h-7 md:w-8 md:h-8" />}
                          label="ROI"
                          value="+180%"
                          description="Retorno sobre investimento"
                          color="green"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 2: Vídeo */}
                <div className="w-full flex-shrink-0 px-4 sm:px-6 md:px-8">
                  <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-6 sm:mb-8">
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-primary-dark">Depoimento do Cliente</h3>
                      <p className="text-gray-700 text-sm md:text-base lg:text-lg">Veja o que nossos clientes têm a dizer</p>
                    </div>

                    {/* Container do vídeo */}
                    <div className="relative aspect-video bg-gradient-to-br from-primary-dark to-primary-blue rounded-xl overflow-hidden border-2 border-primary-green/20">
                      {/* Placeholder para o vídeo */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 sm:p-8 text-white">
                        <Play className="w-16 h-16 sm:w-20 sm:h-20 mb-4 text-primary-green" />
                        <p className="text-base md:text-lg mb-2">Vídeo do Cliente</p>
                        <p className="text-sm text-gray-300">
                          Adicione o vídeo aqui usando um iframe do YouTube/Vimeo
                        </p>
                        <p className="text-xs text-gray-400 mt-3 hidden sm:block">
                          Exemplo: &lt;iframe src="URL_DO_VIDEO" ...&gt;&lt;/iframe&gt;
                        </p>
                      </div>
                      
                      {/* Descomente e adicione a URL do vídeo quando estiver pronto:
                      <iframe
                        src="https://www.youtube.com/embed/SEU_VIDEO_ID"
                        title="Depoimento Cliente"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                      */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Botões de navegação */}
            <div className="flex justify-center gap-4 mt-6 sm:mt-8">
              <button
                onClick={() => setShowVideo(false)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition-all ${
                  !showVideo 
                    ? 'bg-primary-green text-primary-dark' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
                Ver Resultados
              </button>
              <button
                onClick={() => setShowVideo(true)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition-all ${
                  showVideo 
                    ? 'bg-primary-green text-primary-dark' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Ver Depoimento
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Indicadores */}
            <div className="flex justify-center gap-2 mt-5">
              <button
                onClick={() => setShowVideo(false)}
                className={`h-2 rounded-full transition-all ${
                  !showVideo ? 'w-8 bg-primary-green' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label="Ver resultados"
              />
              <button
                onClick={() => setShowVideo(true)}
                className={`h-2 rounded-full transition-all ${
                  showVideo ? 'w-8 bg-primary-green' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label="Ver depoimento"
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
