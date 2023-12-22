'use client'
import './globals.css'
import React from 'react'
import { Manrope } from 'next/font/google'
import Header from './components/header'
import CartContextProvider from './contexts/cartContext'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'


import Footer from './components/footer'
const inter = Manrope({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Hear Me',
//   description: 'Audiophilie E-Store',
// }

export default function RootLayout({ children }) {

  const pathname = usePathname()

  return (
    <html lang="en">
      <CartContextProvider>
        <body
          className={inter.className} >
          <motion.div
            initial={{
              opacity: 0,
              y: -200
            }}

            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5
              }
            }}
          >
            <Header />
          </motion.div>

          <main>
            {children}
          </main>

          <motion.div
            initial={{
              opacity: 0,
              y: 200
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1
              }
            }}
            viewport={{ once: true }}

          >
            <Footer />
          </motion.div>

        </body>
      </CartContextProvider>


    </html>
  )
}
