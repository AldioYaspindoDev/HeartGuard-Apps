export default function HeroSection() {
  return (
    <div className="pt-24 bg-slate-50/50 overflow-hidden">
      <div
        className="relative flex flex-col items-center justify-start min-h-[90vh] px-8 pt-12"
        id="heart-container"
      >
        <h1
          className="logo text-7xl md:text-[8rem] lg:text-[10rem] font-black text-center text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-transparent z-0 leading-none select-none tracking-tight"
          id="heartguard-title"
        >
          HeartGuard
        </h1>

        <img
          id="heart-image"
          src="/assets/Jantung.png"
          alt="Ilustrasi Jantung"
          className="absolute top-[140px] md:top-[160px] left-1/2 -translate-x-1/2 w-[260px] md:w-[380px] z-10 follow-cursor transition-all duration-500 ease-out drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
        />

        <div className="mt-[22rem] md:mt-[28rem] w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-12 pb-16 z-20">
          <div className="w-full md:w-[28rem] text-center md:text-left">
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
              Website kami hadir sebagai langkah awal! Deteksi dini potensi
              masalah jantung dengan mudah dan cepat. Jaga kesehatan jantung
              Anda sekarang!
            </p>
          </div>

          <div className="w-full md:w-auto flex justify-center">
            <a
              href="/diagnosis"
              className="bg-blue-600 w-full md:w-[15rem] py-4 px-8 text-white rounded-2xl text-lg font-semibold inline-block text-center shadow-[0_8px_30px_rgb(37,99,235,0.25)] hover:bg-blue-700 hover:shadow-[0_8px_30px_rgb(37,99,235,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
