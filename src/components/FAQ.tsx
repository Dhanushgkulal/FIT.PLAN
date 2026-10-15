/**
 * FAQ Section Component
 * 
 * Displays frequently asked questions with accordion
 * Requirements: 23.1-23.4
 */

import { useState } from 'react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How accurate are the calorie calculations?',
      answer: 'We use the scientifically validated Mifflin-St Jeor equation for BMR calculation, which is considered one of the most accurate formulas. However, individual metabolism can vary, so treat these as starting points and adjust based on your results.',
    },
    {
      question: 'Can I use FitPlan if I work out at home?',
      answer: 'Absolutely! FitPlan generates workout plans for both home and gym settings. Home workouts focus on bodyweight exercises and minimal equipment, making them perfect for home training.',
    },
    {
      question: 'Do I need to pay for premium features?',
      answer: 'No! The core features including diet calculations and workout plans are completely free. Premium features are optional enhancements for users who want additional functionality.',
    },
    {
      question: 'How often should I recalculate my plan?',
      answer: 'We recommend recalculating your plan every 4-6 weeks or whenever you experience significant changes in weight, activity level, or fitness goals.',
    },
    {
      question: 'Is my data saved online?',
      answer: 'No, all your data is saved locally in your browser using localStorage. We do not store any personal information on our servers, ensuring complete privacy.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-750 transition-colors"
              >
                <span className="text-white font-semibold">{faq.question}</span>
                <span className="text-cyan-400 text-2xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-900 border-t border-gray-700">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
