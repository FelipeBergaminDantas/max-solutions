'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const teamMembers = [
  {
    name: "Max Augusto",
    role: "Fundador & Estrategista de Conversão",
    description: "Técnico em Automação Industrial e integrante da turma de Engenharia Mecatrônica da USP (2019). Em paralelo à sua jornada na engenharia, dedicou-se a decodificar os algoritmos de marketplace, desenvolvendo métodos validados para alavancar vendas. Há mais de 6 anos atuando na linha de frente do crescimento de sellers no Mercado Livre, sua especialidade é guiar operações desde o nível Mercado Líder até o cobiçado Mercado Líder Platinum. Max é a mente focada em transformar visitantes em compradores, sendo um dos responsáveis diretos pelas estratégias de aumento de conversão e posicionamento de clientes como os maiores vendedores de suas categorias.",
    image: "/team/max.jpeg"
  },
  {
    name: "Carlos Eduardo",
    role: "Fundador & Head de Operações e Ads",
    description: "Com forte base técnica construída na turma de Engenharia Mecatrônica da USP (2019) e experiência sólida atuando em grandes corretoras do mercado financeiro, Carlos traz uma capacidade analítica fora da curva e uma habilidade gigantesca para a resolução de problemas complexos. Ele é a peça-chave que enxerga o e-commerce através dos números, sendo um dos responsáveis pela gestão de alta performance em campanhas de Ads, garantindo que cada centavo investido retorne em forma de lucro real e seguro para a operação.",
    image: "/team/carlos.jpg"
  }
];

export default function About() {
  const [currentMember, setCurrentMember] = useState(0);

  const nextMember = () => {
    setCurrentMember((prev) => (prev + 1) % teamMembers.length);
  };

  const prevMember = () => {
    setCurrentMember((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const member = teamMembers[currentMember];

  return (
    <section id="sobre-nos" className="py-16 sm:py-20 md:py-24 bg-primary-dark">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-14 md:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              A <span className="text-primary-green">Liderança</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Foto à esquerda */}
            <div className="relative px-4 sm:px-0">
              <div className="aspect-square w-full max-w-sm sm:max-w-md mx-auto rounded-2xl overflow-hidden relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Botões de navegação */}
              <div className="flex justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
                <button
                  onClick={prevMember}
                  className="bg-white/10 hover:bg-white/20 p-2 sm:p-3 rounded-full transition-all border border-white/20"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button
                  onClick={nextMember}
                  className="bg-white/10 hover:bg-white/20 p-2 sm:p-3 rounded-full transition-all border border-white/20"
                  aria-label="Próximo"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>

            {/* Texto à direita */}
            <div className="space-y-4 sm:space-y-6 px-4 sm:px-0">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary-green text-lg sm:text-xl font-semibold mb-4 sm:mb-6">{member.role}</p>
              </div>
              
              <div className="prose prose-sm sm:prose-base lg:prose-lg prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  {member.description}
                </p>
              </div>

              {/* Indicadores */}
              <div className="flex gap-2 pt-4">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMember(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentMember 
                        ? 'w-8 bg-primary-green' 
                        : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Ver ${teamMembers[index].name}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
