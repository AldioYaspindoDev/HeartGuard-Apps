"use client";
import { motion} from "motion/react";

export default function Featured(){
    return (
        <div className="py-24">
            <motion.div
            initial={{ opacity: 0, x: -30}}
            whileInView={{ opacity: 1, x:0 }}
            transition={{ duration: 2}}

            >
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 px-8 md:px-16 lg:px-24">
                <div className="w-full lg:w-1/2">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 tracking-tight leading-tight">Apa itu HeartGuard?</h1>
                </div>
                <div className="bg-slate-800 text-slate-50 w-full lg:w-1/2 p-8 md:p-10 rounded-3xl text-lg leading-relaxed shadow-2xl">
                    <p>HeartGuard adalah platform digital berbasis teknologi yang dirancang untuk membantu Anda mendeteksi secara dini potensi penyakit jantung melalui analisis gejala secara cepat, aman, dan akurat. Dengan antarmuka yang ramah pengguna dan didukung oleh algoritma cerdas, HeartGuard hadir sebagai solusi skrining awal yang dapat diakses kapan saja dan di mana saja.</p>
                </div>
            </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 30}}
                whileInView={{ opacity: 1, x:0 }}
                transition={{ duration: 2}}
            >

            <div className="px-8 md:px-16 lg:px-24 flex flex-col lg:flex-row gap-12 lg:gap-20 mt-32 items-center">
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                    <img src="/assets/1.jpg" alt="Health Care" className="w-full max-w-125 rounded-4xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] object-cover aspect-4/3"/>
                </div>

                <div className="w-full lg:w-1/2 space-y-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">Mengapa kita perlu menjaga jantung kita?</h1>
                    <p className="text-lg text-slate-600 leading-relaxed text-justify md:text-left">
                        Jantung adalah organ vital yang bekerja tanpa henti untuk memompa darah ke seluruh tubuh, mengantarkan oksigen dan nutrisi ke setiap sel. Jika fungsi jantung terganggu, maka seluruh sistem tubuh akan terdampak. Penyakit jantung adalah salah satu penyebab kematian tertinggi di dunia — sering kali datang tanpa gejala yang jelas di awal.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed text-justify md:text-left">
                        Menjaga kesehatan jantung berarti menjaga hidup Anda tetap berjalan dengan baik. Dengan pola makan sehat, aktivitas fisik teratur, manajemen stres, dan deteksi dini risiko penyakit, kita bisa mencegah banyak masalah serius sebelum terjadi.
                    </p>
                </div>
            </div>
            </motion.div>
        </div>
    )
}