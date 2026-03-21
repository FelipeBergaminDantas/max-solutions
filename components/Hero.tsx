'use client';

import { ArrowRight, TrendingUp, Target, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function MetricCard({ icon, prefix = '', target, suffix = '', label }: {
  icon: React.ReactNode;
  prefix?: string;
  target: number;
  suffix?: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || animated.current) return;
      animated.current = true;
      setVisible(true);
      const duration = 2400;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 4);
        setCount(Math.floor(eased * target));
        if (p < 1) requestAnimationFrame(tick);
        else setCount(target);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.3 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/20 transition-all group overflow-hidden">
      <div className="text-primary-green mb-2 group-hover:scale-110 transition-transform">{icon}</div>
      <div className="overflow-hidden h-8 md:h-9 mb-1">
        <div
          className="text-xl md:text-2xl font-bold transition-all duration-700 ease-out"
          style={{
            transform: visible ? 'translateY(0)' : 'translateY(100%)',
            opacity: visible ? 1 : 0,
          }}
        >
          {prefix}{count}{suffix}
        </div>
      </div>
      <div className="text-xs md:text-sm text-gray-400">{label}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-[#0a1929] to-primary-blue/20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          <div className="mb-10 flex flex-wrap justify-center gap-3">
            <a href="#" target="_blank" rel="noopener noreferrer"
              className="bg-primary-green/10 text-primary-green px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border border-primary-green/20 hover:bg-primary-green/20 transition-all inline-flex items-center gap-2">
              ✓ Certificação Mercado Livre
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer"
              className="bg-primary-blue/10 text-primary-blue px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border border-primary-blue/20 hover:bg-primary-blue/20 transition-all inline-flex items-center gap-2">
              ✓ Certificação Mercado Ads
            </a>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-9 leading-tight px-2">
            Transformamos dados em faturamento.{' '}
            <span className="text-primary-green">Sua loja no Mercado Livre com performance de engenharia.</span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 font-medium px-2 max-w-3xl mx-auto">
            Está cansado de investir em Product Ads e não ver o lucro entrar? O Ads potencializa o tráfego, mas o que põe dinheiro no bolso é a{' '}
            <span className="text-primary-green font-bold">CONVERSÃO</span>.
          </p>
          
          <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-12 px-2 max-w-2xl mx-auto">
            Na Max Solutions & Performance, nós ajudamos você a dominar o ecossistema, otimizar sua margem e escalar com segurança.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14 px-2">
            <a href="#contato"
              className="bg-primary-green hover:bg-primary-green/90 text-primary-dark px-6 py-3 rounded-lg font-bold text-sm md:text-base transition-all flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl">
              Quero um Diagnóstico Gratuito
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#clientes"
              className="bg-transparent border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-6 py-3 rounded-lg font-bold text-sm md:text-base transition-all">
              Ver Resultados
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto px-2">
            <MetricCard icon={<TrendingUp className="w-5 h-5 md:w-6 md:h-6" />} prefix="+" target={114} suffix="%" label="Qtd. de Vendas" />
            <MetricCard icon={<Target className="w-5 h-5 md:w-6 md:h-6" />} prefix="+" target={85} suffix="%" label="Faturamento Bruto" />
            <MetricCard icon={<Zap className="w-5 h-5 md:w-6 md:h-6" />} target={2} suffix="x" label="Conversão" />
            <MetricCard icon={<TrendingUp className="w-5 h-5 md:w-6 md:h-6" />} prefix="+" target={8} suffix="%" label="Visitas" />
          </div>

        </div>
      </div>
    </section>
  );
}
