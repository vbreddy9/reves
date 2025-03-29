import React, { useState } from "react";

const faqs = [
  {
    question: "What services do you offer for studying abroad?",
    answer: "We offer university shortlisting, application guidance, visa support, scholarships, and more.",
  },
  {
    question: "Which countries can I study in?",
    answer: "You can study in the USA, UK, Canada, Australia, Germany, and many more countries.",
  },
  {
    question: "How do I start the process of studying abroad?",
    answer: "Start by selecting your course, researching universities, and contacting our consultants for personalized guidance.",
  },
  {
    question: "What are the basic requirements to study abroad?",
    answer: "Requirements vary but generally include academic transcripts, English proficiency tests, SOPs, and financial proof.",
  },
  {
    question: "Can I study abroad without IELTS or TOEFL?",
    answer: "Yes, some universities accept alternative tests or offer exemptions for students from English-speaking backgrounds.",
  },
  {
    question: "What are the intakes for studying abroad?",
    answer: "Most universities have Fall (September) and Spring (January) intakes, with some also offering Summer intakes.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-3xl font-bold text-center text-gray-900">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-600 text-center mt-2">
        Find answers to common questions about studying abroad
      </p>

      <div className="mt-6 space-y-2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-lg shadow-md"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left text-gray-900 font-medium"
            >
              {faq.question}
              <span className="text-gray-500">
                {openIndex === index ? "▲" : "▼"}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 border-t text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
