// components/FAQ.js

import FAQItem from "./FAQItem";

const faqs = [
  {
    question: '¿Qué es Tepepixqui y por qué es importante?',
    answer: 'Tepepixqui, "Guardián del Bosque" en náhuatl, es un proyecto que busca reducir los incendios forestales mediante un sistema de detección temprana con sensores y la movilización comunitaria a través de una aplicación móvil.'
  },
  {
    question: '¿Cómo funciona el sistema de detección temprana de Tepepixqui?',
    answer: 'El sistema de detección temprana utiliza estaciones con múltiples sensores que monitorean variables como temperatura, humedad, gases, humo y llamas. La información se visualiza en tiempo real en una página web y se envían alertas a las autoridades.'
  },
  {
    question: '¿Quiénes son el público objetivo de Tepepixqui?',
    answer: 'El público objetivo incluye comunidades rurales y urbanas cercanas a bosques, así como agencias de manejo de emergencias que carecen de recursos para una respuesta efectiva a incendios.'
  },
  {
    question: '¿Qué impacto social y ambiental tiene el proyecto?',
    answer: 'Tepepixqui mejora la seguridad y resiliencia de las comunidades, protege los ecosistemas y contribuye a la lucha contra el cambio climático. Además, fomenta una cultura de prevención y respuesta efectiva ante incendios forestales.'
  },
  {
    question: '¿Cómo puedo involucrarme con Tepepixqui?',
    answer: 'Puedes involucrarte tomando cursos de capacitación para actuar como brigadista voluntario a través de nuestra aplicación móvil, donando recursos necesarios para combatir incendios, o participando en actividades de concientización.'
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="min-h-screen p-8 bg-gray-200 dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-8 text-center text-green-600 dark:text-green-400">Preguntas Frecuentes</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}
