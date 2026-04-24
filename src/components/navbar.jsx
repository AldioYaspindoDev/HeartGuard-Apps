export default function Navbar() {
  return (
    <header
      id="main-header"
      className="fixed w-full top-0 bg-white/90 backdrop-blur-md flex items-center justify-between px-8 md:px-16 lg:px-24 py-4 shadow-sm border-b border-slate-100 transition-all duration-300 ease-in-out z-50"
    >
      <div className="flex items-center space-x-2">
        <h1 className="font-bold text-xl md:text-2xl text-slate-800 tracking-tight">HeartGuard</h1>
      </div>
      <nav className="hidden md:flex space-x-8 text-slate-600 font-medium bg-slate-50 border border-slate-100 px-6 py-2.5 rounded-full text-sm">
        <a href="/" className="hover:text-blue-600 transition-colors">
          Beranda
        </a>
        <a href="/diagnosis" className="hover:text-blue-600 transition-colors">
          Diagnosa
        </a>
        <a href="/about" className="hover:text-blue-600 transition-colors">
          About Us
        </a>
      </nav>
      <div className="flex space-x-3">
        <button className="text-sm font-medium border border-slate-200 text-slate-700 px-5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors">
          Log In
        </button>
        <button className="text-sm font-medium border border-transparent bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 shadow-sm transition-colors">
          Sign Up
        </button>
      </div>
    </header>
  );
}
