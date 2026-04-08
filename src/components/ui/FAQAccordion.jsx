// src/components/ui/FAQAccordion.jsx

import { useState } from "react";

export function FAQAccordion({
  items,
  containerClassName = "",
  itemClassName = "",
  questionClassName = "",
  answerClassName = "",
  iconClassName = "",
  defaultOpenId = null,
}) {
  const [openId, setOpenId] = useState(defaultOpenId);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <div
      className={`flex flex-col gap-3 max-w-4xl mx-auto ${containerClassName}`}
    >
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`border border-border rounded-xl overflow-hidden ${itemClassName}`}
          >
            {/* Question row */}
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between px-5 py-4 text-left gap-4 hover:bg-section-alt transition-colors"
            >
              <span
                className={`lg:p-2 text-md lg:text-lg font-medium text-navy font-sans ${questionClassName}`}
              >
                {item.question}
              </span>
              {/* Chevron */}
              <svg
                className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                } ${iconClassName}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p
                className={`px-5 pb-5 text-md lg:text-lg text-muted-foreground leading-relaxed font-sans ${answerClassName}`}
              >
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
