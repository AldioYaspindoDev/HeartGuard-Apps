'use client';
import { useState } from 'react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Bagaimana pola makan yang baik untuk menjaga kesehatan jantung?",
      answer: "Konsumsilah makanan rendah lemak jenuh, garam, dan gula. Perbanyak sayur, buah, kacang-kacangan, ikan, dan biji-bijian."
    },
    {
      question: "Seberapa penting tidur bagi kesehatan jantung?",
      answer: "Tidur yang cukup (7 - 8 jam per malam) membantu mengatur tekanan darah dan menurunkan risiko penyakit jantung."
    },
    {
      question: "Apakah olahraga berperan dalam menjaga kesehatan jantung?",
      answer: "Ya, olahraga teratur seperti jalan cepat, bersepeda, atau berenang membantu memperkuat jantung dan memperbaiki sirkulasi darah."
    }
  ];

  return (
    <div className="py-24 bg-slate-50/50">
      <div className="px-8 md:px-16 lg:px-24 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start max-w-7xl mx-auto">
        <div className="w-full lg:w-5/12 flex justify-center">
          <img src="/assets/2.jpg" alt="Gambar Jantung" className="w-full max-w-180 h-auto lg:h-140 rounded-4xl object-cover shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100" />
        </div>

        <div className="space-y-6 flex-1 w-full">
          <div className="bg-slate-800 w-full p-8 md:p-10 rounded-4xl shadow-xl">
            <h1 className="text-xl font-bold text-slate-50 leading-snug">
              Lalu Bagaimana Cara Menjaga Kesehatan Jantung Kita?
            </h1>
            <p className="text-slate-300 mt-2 text-sm">
              Berikut adalah beberapa pertanyaan tentang bagaimana cara kita untuk menjaga kesehatan jantung.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {faqs.map((faq, index) => (
              <div key={index} className="relative z-10">
                <div
                  onClick={() => toggleAnswer(index)}
                  className={`bg-white border w-full min-h-20aaaaaaa p-6 flex justify-between items-center cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md ${openIndex === index ? 'rounded-t-3xl border-blue-200 shadow-md z-20 relative' : 'rounded-3xl border-slate-200 hover:border-blue-200'}`}
                >
                  <p className="font-semibold text-slate-800 text-lg pr-4">{faq.question}</p>
                  <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'}`}>
                    <i
                      className={`fa fa-chevron-down transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
                {openIndex === index && (
                  <div className="faq-answer bg-slate-50/80 backdrop-blur-sm px-8 py-6 rounded-b-3xl border-x border-b border-blue-100 text-base text-slate-600 shadow-md relative z-10 -mt-2 pt-8">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}