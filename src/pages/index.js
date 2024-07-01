// pages/index.js
import Navbar from '../components/Navbar';
import Mapa from '../components/Mapa';
import QuienesSomos from '../components/QuienesSomos';
import FAQ from '../components/FAQ';
import PorQueAyudar from '../components/PorQueAyudar';
import NuestroImpacto from '../components/NuestroImpacto';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <main className="pt-16">
        <Mapa />
        <QuienesSomos />
        <FAQ />
        <PorQueAyudar />
        <NuestroImpacto />
      </main>
      <Footer />
    </div>
  );
}
