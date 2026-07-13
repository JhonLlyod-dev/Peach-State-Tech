"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

type Faq = {
  _key: string;
  question: string;
  answer: string;
};

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!faqs?.length) return null;

  return (
    <div
      id="faqs"
      className="motion-preset-focus motion-delay-250 bg-white dark:bg-zinc-800 rounded-2xl shadow-lg dark:shadow-black/30 p-6 sm:p-8 border border-gray-100 dark:border-zinc-700 scroll-mt-8"
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-zinc-50 mb-4 flex items-center gap-2">
        <HelpCircle className="w-5 h-5 text-peach" />
        Frequently asked questions
      </h3>
      <div className="flex flex-col divide-y divide-gray-100 dark:divide-zinc-700">
        {faqs.map((faq, i) => {
          const isOpen = openFaq === i;
          return (
            <div key={faq._key}>
              <button
                onClick={() => setOpenFaq(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 py-4 text-left"
              >
                <span className="font-medium text-gray-900 dark:text-zinc-100">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 text-peach transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-200 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100 pb-4" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-gray-600 dark:text-zinc-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}