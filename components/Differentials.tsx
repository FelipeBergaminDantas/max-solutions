'use client';

import { Camera, BarChart2, DollarSign, ShieldCheck, Globe } from 'lucide-react';

const differentials = [
  {
    icon: <Camera className="w-8 h-8" />,
    title: 'Engenharia de Conversão Visual',
    description:
      'No mundo online, as fotos são os seus únicos vendedores. Nós ensinamos nossos clientes a criar anúncios que conectam visualmente e guiam o comprador até a compra. Se a imagem não convence, o investimento em Ads é desperdiçado.',
  },
  {
    icon: <BarChart2 className="w-8 h-8" />,
    title: 'Gestão Estratégica de Ads',
    description:
      'Assumimos o controle da sua publicidade para otimizar o ACOS. Não buscamos apenas cliques; buscamos compradores qualificados com o menor custo possível, escalando com inteligência.',
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: 'Precificação e Lucro Real',
    description:
      'Vender muito não significa ganhar muito. Fornecemos planilhas exclusivas de precificação para que você tenha clareza total das suas margens. O nosso foco é o que sobra no seu bolso no final do mês.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Conscientização e Segurança da Conta',
    description:
      'Nós monitoramos os indicadores vitais da sua operação e conscientizamos você sobre a saúde da sua reputação. Atuamos como seu radar estratégico, dando o alerta para evitar que problemas saiam do controle e prejudiquem sua medalha.',
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Ecossistema 360º',
    description:
      'Ensinamos você a explorar tudo o que o Mercado Livre oferece: listas de transmissão, páginas de loja estruturadas, Full e Flex. Fugimos do básico para que você domine o marketplace de ponta a ponta.',
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12 sm:mb-14 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 text-primary-dark">
              Nossos <span className="text-primary-green">Diferenciais</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-dark/70">
              Os pilares que sustentam a performance da sua operação.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {differentials.map((item, index) => (
              <div
                key={index}
                className="bg-primary-dark/5 border border-primary-dark/10 rounded-xl p-6 sm:p-8 hover:bg-primary-dark/10 hover:border-primary-green/40 transition-all"
              >
                <div className="text-primary-green mb-4">{item.icon}</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-primary-dark">
                  {item.title}
                </h3>
                <p className="text-primary-dark/70 text-sm md:text-base leading-relaxed">
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
