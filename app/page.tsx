import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Company from '@/components/Company';
import About from '@/components/About';
import Clients from '@/components/Clients';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Company />
      <About />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
}
