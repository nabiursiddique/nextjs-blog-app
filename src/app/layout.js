import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Nabil's Blog",
  description: 'Nabil nextjs website',
}

export default function RootLayout({ children }) {
  return (
    <html data-theme='dark' lang="en">
      <body className={inter.className}>
        <div className='max-w-[1440px] mx-auto'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html >
  )
}
