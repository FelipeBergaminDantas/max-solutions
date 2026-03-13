import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Termos de Uso | Max Solutions & Performance',
  description: 'Termos de uso da Max Solutions & Performance',
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Termos de Uso</h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e usar este site, você aceita e concorda em cumprir estes termos de uso. 
                Se você não concordar com qualquer parte destes termos, não deve usar nosso site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Serviços Oferecidos</h2>
              <p>
                A Max Solutions & Performance oferece serviços de consultoria estratégica para 
                crescimento e performance no Mercado Livre. Os resultados podem variar de acordo 
                com diversos fatores específicos de cada negócio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo deste site, incluindo textos, gráficos, logos e imagens, é 
                propriedade da Max Solutions & Performance e protegido por leis de direitos autorais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Limitação de Responsabilidade</h2>
              <p>
                A Max Solutions & Performance não se responsabiliza por quaisquer danos diretos, 
                indiretos, incidentais ou consequenciais resultantes do uso ou incapacidade de 
                usar nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Modificações</h2>
              <p>
                Reservamo-nos o direito de modificar estes termos a qualquer momento. 
                Recomendamos que você revise periodicamente esta página.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Lei Aplicável</h2>
              <p>
                Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida 
                nos tribunais competentes do Brasil.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Contato</h2>
              <p>
                Para questões sobre estes termos, entre em contato através de 
                contato@maxsolutions.com.br
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
