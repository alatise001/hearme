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

      <head>

        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <title>Hear Me</title>
      </head>


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
