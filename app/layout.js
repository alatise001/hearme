import './globals.css'
import React from 'react'
import { Manrope } from 'next/font/google'
import Link from 'next/link'
import LayoutAbout from './components/layout-about'
import Header from './components/header'
import CartContextProvider from './contexts/cartContext'

import Footer from './components/footer'
const inter = Manrope({ subsets: ['latin'] })

export const metadata = {
  title: 'Hear Me',
  description: 'Audiophilie E-Store',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      {/* className={inter.className} */}
      <CartContextProvider>
        <body className={inter.className} >

          <>
            <Header />
          </>

          <main>
            {children}
          </main>

          {/* <>
            <LayoutAbout />
          </> */}

          <>
            <Footer />
          </>

        </body>
      </CartContextProvider>

    </html>
  )
}
