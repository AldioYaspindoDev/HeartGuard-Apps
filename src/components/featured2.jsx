"use client";
import { motion } from "motion/react";

export default function Featured2(){
    return(

        <div className="px-8 md:px-16 lg:px-24 py-24 bg-white">
            <div className="text-center mb-16">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 tracking-tight">Kenapa Harus HeartGuard?</h1>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, X: 30}}
                    whileInView={{ opacity: 1, x:0 }}
                    transition={{ duration: 1.3}}
                >
                <div className="bg-white rounded-4xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] flex flex-col">
                    <h1 className="text-2xl font-bold text-slate-800 mb-6 text-center md:text-left">Tanpa Perlu ke Rumah Sakit</h1>
                    <div className="flex flex-col-reverse lg:flex-row items-center gap-8 mt-auto">
                        <p className="text-slate-600 leading-relaxed text-center lg:text-left flex-1">Pengguna tidak perlu repot datang ke fasilitas kesehatan, karena proses analisis dan konsultasi awal dapat dilakukan sepenuhnya secara digital melalui website.</p>
                        <img src="/assets/1.1.png" alt="" className="w-32 lg:w-40 object-contain drop-shadow-sm"/>
                    </div>
                </div>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, X: -30}}
                    whileInView={{ opacity: 1, x:0 }}
                    transition={{ duration: 1.3}}
                >
                <div className="bg-white rounded-4xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] flex flex-col">
                    <h1 className="text-2xl font-bold text-slate-800 mb-6 text-center md:text-left">Teknologi Kecerdasan Buatan</h1>
                    <div className="flex flex-col-reverse lg:flex-row items-center gap-8 mt-auto">
                        <p className="text-slate-600 leading-relaxed text-center lg:text-left flex-1">Website ini menggunakan teknologi kecerdasan buatan (AI) untuk membantu pengguna mendiagnosis potensi penyakit jantung secara mandiri dan akurat.</p>
                        <img src="/assets/1.2.png" alt="" className="w-32 lg:w-40 object-contain drop-shadow-sm"/>
                    </div>
                </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, X: 30}}
                    whileInView={{ opacity: 1, x:0 }}
                    transition={{ duration: 1.3}}
                >
                <div className="bg-white rounded-4xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] flex flex-col">
                    <h1 className="text-2xl font-bold text-slate-800 mb-6 text-center md:text-left">Akses Terjangkau</h1>
                    <div className="flex flex-col-reverse lg:flex-row items-center gap-8 mt-auto">
                        <p className="text-slate-600 leading-relaxed text-center lg:text-left flex-1">Layanan ini dirancang agar terjangkau oleh semua kalangan, dengan akses gratis atau biaya minimal yang efisien.</p>
                        <img src="/assets/1.3.png" alt="" className="w-32 lg:w-40 object-contain drop-shadow-sm"/>
                    </div>
                </div>
                </motion.div>
                
               <motion.div
                    initial={{ opacity: 0, X: -30}}
                    whileInView={{ opacity: 1, x:0 }}
                    transition={{ duration: 1.3}}
                >
                <div className="bg-white rounded-4xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] flex flex-col">
                    <h1 className="text-2xl font-bold text-slate-800 mb-6 text-center md:text-left">Edukasi & Pencegahan</h1>
                    <div className="flex flex-col-reverse lg:flex-row items-center gap-8 mt-auto">
                        <p className="text-slate-600 leading-relaxed text-center lg:text-left flex-1">Website menyediakan konten edukatif yang informatif dan mudah dipahami tentang pencegahan, gejala, dan pengelolaan penyakit jantung.</p>
                        <img src="/assets/1.4.png" alt="" className="w-32 lg:w-40 object-contain drop-shadow-sm"/>
                    </div>
                </div>
                </motion.div>
            </div>
        </div>
    )
}