// components/FAQItem.js

import { useState } from 'react';

export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-2 p-4 rounded-lg mb-4 ${isOpen ? 'border-green-500' : 'border-green-300'}`}>
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{question}</h3>
        <button className="text-lg font-bold text-gray-900 dark:text-gray-100">{isOpen ? '✕' : '+'}</button>
      </div>
      {isOpen && <p className="mt-4 text-gray-800 dark:text-gray-300">{answer}</p>}
    </div>
  );
}
