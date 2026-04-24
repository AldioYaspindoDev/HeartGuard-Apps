import { Poppins } from 'next/font/google'
import '../global.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={poppins.variable}>
      <head>
        <title>HeartGuard | Deteksi Penyakit Jantung</title>
        <meta name="description" content="AI-Driven Deteksi Penyakit Jantung" />
      </head>
      <body className="antialiased font-poppins">{children}</body>
    </html>
  )
}
