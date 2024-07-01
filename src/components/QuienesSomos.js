// components/QuienesSomos.js

export default function QuienesSomos() {
    return (
      <section id="quienes-somos" className="min-h-screen p-8 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <img src="/quienesSomos.png" alt="Community" className="w-full md:w-1/2 h-auto rounded-lg shadow-lg" />
          <div className="mt-8 md:mt-0 md:ml-8 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-green-600 dark:text-green-400">Quiénes Somos</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Tepepixqui, "Guardián del Bosque" en náhuatl, es un proyecto que busca reducir los incendios forestales, 
              protegiendo la flora y fauna, y generando un impacto positivo en el medio ambiente. Utilizamos un sistema 
              integral de detección temprana y respuesta rápida mediante estaciones con sensores y una aplicación móvil 
              para movilizar a la comunidad.
            </p>
            <h3 className="text-2xl font-bold mb-2 text-green-600 dark:text-green-400">Misión</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Nuestra misión es proteger los ecosistemas forestales y las comunidades aledañas mediante la detección 
              temprana de incendios y la movilización comunitaria para una respuesta rápida y efectiva.
            </p>
            <h3 className="text-2xl font-bold mb-2 text-green-600 dark:text-green-400">Visión</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Aspiramos a crear un futuro donde las tecnologías de monitoreo ambiental y la colaboración ciudadana 
              trabajen juntas para proteger nuestros bosques y combatir el cambio climático.
            </p>
          </div>
        </div>
      </section>
    );
  }
  