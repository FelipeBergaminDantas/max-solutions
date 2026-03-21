'use client';

import { Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary-dark via-primary-blue/10 to-primary-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 sm:mb-6 px-4">
            Pronto para transformar sua loja em uma{' '}
            <span className="text-primary-green">máquina de lucro</span>?
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 sm:mb-5 px-4">
            Pare de queimar verba com estratégias que não convertem.
          </p>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-10 sm:mb-12 px-4">
            Solicite agora um diagnóstico da sua operação e descubra exatamente onde estão os gargalos que impedem sua conta de escalar.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 max-w-2xl mx-auto mb-10 sm:mb-12 px-4">
            <ContactCard
              icon={<MessageCircle className="w-8 h-8 md:w-10 md:h-10" />}
              title="WhatsApp"
              description="+55 11 94762-8089"
              link="https://wa.me/5511947628089"
              linkText="Enviar mensagem"
            />
            <ContactCard
              icon={<Mail className="w-8 h-8 md:w-10 md:h-10" />}
              title="Email"
              description="max.mlconsult@gmail.com"
              link="https://mail.google.com/mail/?view=cm&to=max.mlconsult@gmail.com"
              linkText="Enviar email"
            />
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-8 sm:p-10 mx-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5">Diagnóstico Gratuito</h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8">
              Solicite agora um diagnóstico da sua operação e descubra exatamente onde estão os gargalos que impedem sua conta de escalar.
            </p>
            <a 
              href="https://wa.me/5511947628089?text=Olá! Gostaria de solicitar um diagnóstico gratuito."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-green hover:bg-primary-green/90 text-primary-dark px-8 sm:px-10 py-4 sm:py-5 rounded-lg font-bold text-base sm:text-lg md:text-xl transition-all shadow-lg hover:shadow-xl"
            >
              Solicitar Diagnóstico Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ 
  icon, 
  title, 
  description, 
  link, 
  linkText 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  link: string;
  linkText: string;
}) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-7 hover:bg-white/10 transition-all">
      <div className="text-primary-green mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm md:text-base mb-4">{description}</p>
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-blue hover:text-primary-green transition-colors text-sm md:text-base font-semibold"
      >
        {linkText} →
      </a>
    </div>
  );
}
