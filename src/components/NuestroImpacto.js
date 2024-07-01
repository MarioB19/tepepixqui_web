// components/NuestroImpacto.js
import Image from "next/image";

export default function NuestroImpacto() {
  return (
    <section id="nuestro-impacto" className="min-h-screen p-8 pt-2 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-green-600 dark:text-green-400">Nuestro Impacto</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Tepepixqui tiene un impacto directo en la reducción de incendios forestales y la preservación de ecosistemas. 
          La página web y la aplicación móvil trabajan en conjunto para educar y movilizar a la comunidad, fomentando 
          una cultura de prevención y colaboración. La aplicación móvil no solo informa y capacita a los ciudadanos, 
          sino que también facilita su participación activa en la lucha contra los incendios, alineándose con los Objetivos 
          de Desarrollo Sostenible (ODS) 13 (Acción por el Clima), 15 (Vida de Ecosistemas Terrestres) y 17 (Alianzas para lograr los Objetivos).
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          El proyecto busca crear una red de ciudadanos capacitados y comprometidos con la protección del medio ambiente, 
          promoviendo la participación comunitaria y la responsabilidad compartida en la lucha contra los incendios forestales.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-100 dark:bg-green-700 p-4 rounded-lg shadow-lg text-center">
            <Image src="/ods13.png" alt="ODS 13" width={100} height={100} className="mx-auto mb-4" />
            <h3 className="text-xl font-bold text-green-800 dark:text-green-300">ODS 13: Acción por el Clima</h3>
            <p className="text-gray-900 dark:text-white">
              Tomamos medidas urgentes para combatir el cambio climático y sus impactos.
            </p>
          </div>
          <div className="bg-green-100 dark:bg-green-700 p-4 rounded-lg shadow-lg text-center">
            <Image src="/ods15.png" alt="ODS 15" width={100} height={100} className="mx-auto mb-4" />
            <h3 className="text-xl font-bold text-green-800 dark:text-green-300">ODS 15: Vida de Ecosistemas Terrestres</h3>
            <p className="text-gray-900 dark:text-white">
              Protegemos, restauramos y promovemos el uso sostenible de los ecosistemas terrestres.
            </p>
          </div>
          <div className="bg-green-100 dark:bg-green-700 p-4 rounded-lg shadow-lg text-center">
            <Image src="/ods17.png" alt="ODS 17" width={100} height={100} className="mx-auto mb-4" />
            <h3 className="text-xl font-bold text-green-800 dark:text-green-300">ODS 17: Alianzas para Lograr los Objetivos</h3>
            <p className="text-gray-900 dark:text-white">
              Fortalecemos los medios de implementación y revitalizamos la alianza mundial para el desarrollo sostenible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
