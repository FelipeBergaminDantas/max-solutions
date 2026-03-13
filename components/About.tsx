'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const teamMembers = [
  {
    name: "Max Augusto",
    role: "Fundador & Estrategista",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    image: "/team/max.jpg"
  },
  {
    name: "Carlos Eduardo",
    role: "Consultor Estratégico",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
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
              Sobre <span className="text-primary-green">Nós</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Foto à esquerda */}
            <div className="relative px-4 sm:px-0">
              <div className="aspect-square w-full max-w-sm sm:max-w-md mx-auto bg-gradient-to-br from-primary-dark to-primary-blue rounded-2xl overflow-hidden">
                {/* Placeholder para foto - substituir quando adicionar imagens reais */}
                <div className="w-full h-full flex items-center justify-center text-white text-center p-6 sm:p-8">
                  <div>
                    <p className="text-base sm:text-lg mb-2">Foto de {member.name}</p>
                    <p className="text-xs sm:text-sm text-gray-300">Adicionar em: public{member.image}</p>
                  </div>
                </div>
                {/* Descomente quando adicionar as fotos:
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                */}
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
