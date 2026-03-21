import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Política de Privacidade | Max Solutions & Performance',
  description: 'Política de privacidade da Max Solutions & Performance',
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Informações que Coletamos</h2>
              <p>
                A Max Solutions & Performance coleta informações fornecidas voluntariamente por você 
                através de formulários de contato, incluindo nome, email, telefone e informações sobre 
                seu negócio no Mercado Livre.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Como Usamos suas Informações</h2>
              <p>Utilizamos suas informações para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Responder suas solicitações de contato</li>
                <li>Fornecer diagnósticos e consultorias</li>
                <li>Enviar informações sobre nossos serviços</li>
                <li>Melhorar nossos serviços</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Proteção de Dados</h2>
              <p>
                Implementamos medidas de segurança para proteger suas informações pessoais contra 
                acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Compartilhamento de Informações</h2>
              <p>
                Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros 
                sem seu consentimento, exceto quando exigido por lei.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Seus Direitos</h2>
              <p>Você tem o direito de:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Acessar suas informações pessoais</li>
                <li>Corrigir informações incorretas</li>
                <li>Solicitar a exclusão de seus dados</li>
                <li>Revogar consentimentos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Contato</h2>
              <p>
                Para questões sobre esta política de privacidade, entre em contato através de 
                max.mlconsult@gmail.com
              </p>
            </section>

            <p className="text-sm text-gray-400 mt-8">
              Última atualização: Janeiro de 2025
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
