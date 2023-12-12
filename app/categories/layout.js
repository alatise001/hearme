'use client'
import { Manrope } from 'next/font/google'
import Category from '../components/category'
import LayoutAbout from '../components/layout-about'
import { motion } from "framer-motion"

const inter = Manrope({ subsets: ['latin'] })


export default function CatergoriesLayout({ children }) {
    return (
        <>
            <section className={inter.className}

            >
                {/* <div className={inter.className}> */}
                <div>
                    {children}
                </div>

                <motion.div className='header-category-margin'
                    initial={{
                        opacity: 0,
                        x: 1 % 2 === 0 ? 50 : -50
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 1,
                        }
                    }}
                    viewport={{ once: true }}
                >

                    <Category />

                </motion.div>

                {/* </div> */}
            </section>

            <motion.div
                initial={{
                    opacity: 0,
                    x: 2 % 2 === 0 ? 50 : -50
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 1
                    }
                }}
                viewport={{ once: true }}
            >
                <LayoutAbout />
            </motion.div>
        </>
    )
}
