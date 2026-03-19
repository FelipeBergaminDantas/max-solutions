'use client';

const squads = [
  {
    icon: '🏅',
    title: 'Equipe de Consultores Certificados',
    description:
      'Nossa linha de frente é composta por especialistas com Certificação Oficial do Mercado Livre. Eles dominam as regras do jogo, as atualizações do algoritmo e as melhores práticas da plataforma. São os responsáveis por auditar sua conta, conscientizar sobre os riscos e traçar a rota mais segura e lucrativa para a sua operação.',
  },
  {
    icon: '📈',
    title: 'Equipe de Inteligência de Dados e Analytics',
    description:
      'No e-commerce de alto nível, quem cruza os dados mais rápido, lucra mais. Nosso time de analistas é focado em processar as informações de mercado, monitorar a concorrência e mapear as oportunidades ocultas dentro do seu nicho. Eles traduzem o volume de informações do Mercado Livre em estratégias claras, garantindo que as decisões tomadas na sua conta sejam sempre baseadas em matemática e eficiência, nunca em "achismos".',
  },
];

export default function Squads() {
  return (
    <section id="esquadrao" className="py-16 sm:py-20 md:py-24 bg-neutral-light text-primary-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12 sm:mb-14 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5">
              Nossos Esquadrões de{' '}
              <span className="text-primary-green">Alta Performance</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700">
              Times especializados trabalhando em sinergia pela sua operação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {squads.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 sm:p-10 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="text-4xl sm:text-5xl mb-5">{item.icon}</div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-primary-dark">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
