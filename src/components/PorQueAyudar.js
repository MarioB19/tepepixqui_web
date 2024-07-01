// components/PorQueAyudar.js

export default function PorQueAyudar() {
    const benefits = [
      "Contribuir a la reducción del cambio climático al proteger los sumideros de carbono naturales.",
      "Preservar la biodiversidad y los hábitats naturales para muchas especies.",
      "Reducir el riesgo de desastres naturales como inundaciones y deslizamientos de tierra.",
      "Fomentar el ecoturismo y las oportunidades económicas sostenibles para las comunidades locales.",
      "Mejorar la calidad del aire y del agua mediante la conservación de los bosques.",
      "Crear conciencia sobre la importancia de los ecosistemas forestales y la necesidad de protegerlos.",
      "Fortalecer la resiliencia de las comunidades frente a los impactos del cambio climático."
    ];
  
    return (
      <section id="por-que-ayudar" className="min-h-screen p-8 pb-2 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-green-600 dark:text-green-400">Por Qué Ayudar</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-green-500">✔</span>
                {benefit}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-400">Estadísticas de Incendios Forestales en Jalisco</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              ¿Sabías que Jalisco es el estado con más incendios forestales?
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Según la CONAFOR, en el 2023 ocurrieron 1483 incendios forestales en Jalisco, y más de 194,123 hectáreas fueron afectadas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-green-100 dark:bg-green-700 p-4 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-green-800 dark:text-green-300">01:44</h4>
                <p className="text-gray-900 dark:text-white">Tiempo de Detección</p>
              </div>
              <div className="bg-green-100 dark:bg-green-700 p-4 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-green-800 dark:text-green-300">04:18</h4>
                <p className="text-gray-900 dark:text-white">Tiempo de Llegada</p>
              </div>
              <div className="bg-green-100 dark:bg-green-700 p-4 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-green-800 dark:text-green-300">36:39</h4>
                <p className="text-gray-900 dark:text-white">Tiempo de Duración</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              <span className="font-bold">Nota:</span> Los tiempos están estimados en horas.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-8">
              Debemos hacer algo al respecto. Tepepixqui está ayudando a disminuir estos tiempos por medio de un sistema de detección temprana de incendios forestales, avisando a las autoridades más cercanas.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              Además, nuestra aplicación móvil facilita donaciones para los brigadistas, informa acerca de los incendios actuales y capacita a los miembros de la comunidad.
            </p>
          </div>
        </div>
      </section>
    );
  }
  