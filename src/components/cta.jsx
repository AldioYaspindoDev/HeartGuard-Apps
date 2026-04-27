"use client";
import { motion } from "motion/react";

export default function CTA() {
  return (
    <>
    <motion.div
        initial={{ opacity: 0, y: 30}}
        whileInView={{ opacity: 1, y: 0}}
        transition={{ duration: 1.8}}
    >
      <div className="tawaran flex justify-center items-center py-24 px-8 md:px-16 lg:px-24">
        <div className="bg-slate-800 w-full max-w-6xl text-center text-slate-50 p-12 md:p-16 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-tr from-blue-500/10 to-transparent pointer-events-none"></div>
          <h1 className="font-bold text-3xl md:text-5xl leading-tight relative z-10">
            Tunggu Apa Lagi?
          </h1>
          <h1 className="font-bold text-3xl md:text-5xl leading-tight mt-2 relative z-10">
            Ayo Gunakan Layanan Kami
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mt-6 mb-10 relative z-10">
            Diagnosa penyakit jantung dan dapatkan rekomendasi pengobatan
            sekarang.
          </p>
          <a
            href="/diagnosis"
            target="_blank"
            className="relative z-10 bg-blue-600 text-white px-10 py-4 rounded-2xl font-semibold hover:bg-blue-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 inline-flex items-center text-lg"
          >
            Coba Sekarang
          </a>
        </div>
      </div>
      </motion.div>
    </>
  );
}
