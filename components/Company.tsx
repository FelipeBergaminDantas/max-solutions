'use client';

import Image from 'next/image';

export default function Company() {
  return (
    <section id="empresa" className="py-16 sm:py-20 md:py-24 bg-neutral-light text-primary-dark">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-8 sm:mb-10 md:mb-12">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 relative mb-6 sm:mb-8">
              <Image
                src="/logo.png"
                alt="Max Solutions & Performance"
                fill
                className="object-contain"
              />
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center px-4">
              Muito além do faturamento.{' '}
              <span className="text-primary-green">Estratégia 360º para quem busca lucro real e segurança.</span>
            </h2>
          </div>

          <div className="max-w-[1400px] mx-auto px-4 lg:px-8 text-center">
            <p className="mb-4 sm:mb-6 text-base sm:text-lg text-gray-700 leading-relaxed">
              Na Max Solutions & Performance, nós fugimos do óbvio. Enquanto o mercado foca apenas em aumentar o faturamento — muitas vezes sacrificando a margem —, nós focamos no que realmente importa: o <strong>aumento do lucro líquido</strong> e a <strong>eficiência da sua operação</strong>.
            </p>
            
            <p className="mb-4 sm:mb-6 text-base sm:text-lg text-gray-700 leading-relaxed">
              O jogo do Mercado Livre não é apenas sobre vender mais; é sobre <strong>vender com inteligência</strong>, <strong>diminuir reclamações</strong> e <strong>dominar a taxa de conversão</strong>. Não vendemos milagres de curto prazo ou promessas vazias. Acreditamos que a chave para o sucesso sustentável é a união entre <strong>consciência e estratégia</strong>.
            </p>
            
            <p className="mb-4 sm:mb-6 text-base sm:text-lg text-gray-700 leading-relaxed">
              Unimos a <strong>precisão técnica</strong> com o domínio de ferramentas que a maioria dos sellers ignora para garantir que sua conta cresça com <strong>segurança e rentabilidade</strong>.
            </p>
            
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Se você busca uma consultoria que entende que <strong>faturamento sem lucro é apenas vaidade</strong>, você está no lugar certo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
