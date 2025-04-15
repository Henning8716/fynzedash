import { useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-zinc-800 rounded-lg overflow-hidden">
      <button 
        onClick={toggleAccordion}
        className="flex justify-between items-center w-full px-6 py-4 text-left bg-zinc-900 hover:bg-zinc-800 transition-colors"
      >
        <span className="font-medium">{question}</span>
        <i className={`fas fa-chevron-down text-primary transition-transform ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 bg-zinc-800
                    ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="px-6 py-4">
          <p className="text-zinc-400">{answer}</p>
        </div>
      </div>
    </div>
  );
}
