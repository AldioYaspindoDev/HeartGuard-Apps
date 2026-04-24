export default function Footer(){
    return(
        <>
<div className="tawaran flex justify-center items-center py-24 px-8 md:px-16 lg:px-24">
  <div className="bg-slate-800 w-full max-w-6xl text-center text-slate-50 p-12 md:p-16 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent pointer-events-none"></div>
    <h1 className="font-bold text-3xl md:text-5xl leading-tight relative z-10">Tunggu Apa Lagi?</h1>
    <h1 className="font-bold text-3xl md:text-5xl leading-tight mt-2 relative z-10">Ayo Gunakan Layanan Kami</h1>
    <p className="text-lg md:text-xl text-slate-300 mt-6 mb-10 relative z-10">
       Diagnosa penyakit jantung dan dapatkan rekomendasi pengobatan sekarang.
    </p>
    <a href="/diagnosis"
      target="_blank"
      className="relative z-10 bg-blue-600 text-white px-10 py-4 rounded-2xl font-semibold hover:bg-blue-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 inline-flex items-center text-lg">
      Coba Sekarang
    </a>
  </div>
</div>


<footer className="bg-slate-900 w-full py-16 text-white px-8 md:px-16 lg:px-24">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
    
    <div className="lg:col-span-2">
      <h1 className="logo font-bold text-3xl md:text-4xl mb-4 text-slate-50 tracking-tight">HeartGuard</h1>
      <p className="text-slate-400 text-sm md:text-base pr-4 leading-relaxed max-w-sm">
        Platform deteksi dini penyakit jantung menggunakan teknologi AI terpercaya untuk masa depan kesehatan yang lebih baik.
      </p>
    </div>

    <div>
      <h1 className="font-bold text-lg mb-6 text-slate-100">Informasi</h1>
      <ul className="space-y-3 text-sm md:text-base">
        <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Tentang Kami</a></li>
        <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Hubungi Kami</a></li>
        <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Kebijakan Privasi</a></li>
        <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Ketentuan Pengguna</a></li>
        <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Pusat Bantuan</a></li>
      </ul>
    </div>

    <div>
      <h1 className="font-bold text-lg mb-6 text-slate-100">Contact Us</h1>
        <ul className="space-y-3 text-sm md:text-base">
          <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">WhatsApp</a></li>
          <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Instagram</a></li>
          <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Facebook</a></li>
          <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">TikTok</a></li>
          <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">YouTube</a></li>
        </ul>
      </div>

      <div>
        <h1 className="font-bold text-lg mb-6 text-slate-100">Lainnya</h1>
        <ul className="space-y-3 text-sm md:text-base">
          <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Syarat & Ketentuan</a></li>
        </ul>
      </div>
    </div>


    <div className="container mx-auto border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-sm md:text-base text-slate-500">&copy; 2025 Muhamad Aldio Yaspindo. Semua hak cipta dilindungi.</p>

      <div className="flex gap-6 text-2xl">
        <a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors"><i className="fa fa-whatsapp" aria-hidden="true"></i></a>
        <a href="#" className="text-slate-500 hover:text-pink-500 transition-colors"><i className="fa fa-instagram" aria-hidden="true"></i></a>
        <a href="#" className="text-slate-500 hover:text-blue-500 transition-colors"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
        <a href="#" className="text-slate-500 hover:text-sky-400 transition-colors"><i className="fa fa-twitter" aria-hidden="true"></i></a>
      </div>
    </div>
  </footer>

        </>
    )
}