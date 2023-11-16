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
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      {/* className={inter.className} */}
      <body className={inter.className} >

        <>
          <Header />
        </>

        <main>
          <CartContextProvider>
            {children}
          </CartContextProvider>
        </main>

        <>
          <LayoutAbout />
        </>

        <>
          <Footer />
        </>

      </body>

    </html>
  )
}
