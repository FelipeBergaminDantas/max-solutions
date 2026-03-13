'use client';

import { ArrowRight, TrendingUp, Target, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24 min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-[#0a1929] to-primary-blue/20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badges de Certificação */}
          <div className="mb-6 md:mb-8 flex flex-wrap justify-center gap-3 md:gap-4">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary-green/10 text-primary-green px-5 py-2.5 rounded-full text-sm md:text-base font-semibold border border-primary-green/20 hover:bg-primary-green/20 transition-all inline-flex items-center gap-2"
            >
              ✓ Certificação Mercado Livre
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary-blue/10 text-primary-blue px-5 py-2.5 rounded-full text-sm md:text-base font-semibold border border-primary-blue/20 hover:bg-primary-blue/20 transition-all inline-flex items-center gap-2"
            >
              ✓ Certificação Mercado Ads
            </a>
          </div>

          {/* Título Principal */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-5 md:mb-7 leading-tight px-4">
            Transformamos Dados em{' '}
            <span className="text-primary-green">Faturamento</span>
          </h1>
          
          {/* Subtítulo */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 md:mb-5 font-medium px-4">
            Reduza Custos. Aumente Lucro. Escale com Estratégia.
          </p>
          
          {/* Texto secundário */}
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 md:mb-14 px-4">
            Não é sorte. É método.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-16 px-4">
            <a 
              href="#contato" 
              className="bg-primary-green hover:bg-primary-green/90 text-primary-dark px-8 sm:px-10 py-4 sm:py-5 rounded-lg font-bold text-base md:text-lg lg:text-xl transition-all flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl"
            >
              Solicitar Diagnóstico Gratuito
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#clientes" 
              className="bg-transparent border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 sm:px-10 py-4 sm:py-5 rounded-lg font-bold text-base md:text-lg lg:text-xl transition-all"
            >
              Ver Resultados
            </a>
          </div>

          {/* Cards de Métricas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto px-4">
            <MetricCard icon={<TrendingUp className="w-7 h-7 md:w-8 md:h-8" />} value="+200%" label="Faturamento" />
            <MetricCard icon={<Target className="w-7 h-7 md:w-8 md:h-8" />} value="-35%" label="Custo/Conversão" />
            <MetricCard icon={<Zap className="w-7 h-7 md:w-8 md:h-8" />} value="3x" label="ROI" />
            <MetricCard icon={<TrendingUp className="w-7 h-7 md:w-8 md:h-8" />} value="100%" label="Crescimento" />
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 md:p-6 hover:bg-white/10 hover:border-white/20 transition-all group">
      <div className="text-primary-green mb-3 group-hover:scale-110 transition-transform">{icon}</div>
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1">{value}</div>
      <div className="text-sm md:text-base text-gray-400">{label}</div>
    </div>
  );
}
