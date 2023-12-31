"use client"

import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Category from './category';
import Cart from './cart';
import { motion } from 'framer-motion';
import Image from 'next/image'


const containerVariants = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),

    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    },
}


export default function Header() {

    const pathname = usePathname()
    console.log(pathname);

    const [show, setShow] = useState(false)
    const [cart, setCart] = useState(false)

    const toggleMenu = () => { setShow(prevState => !prevState); console.log(show); };
    const toggleCart = () => { setCart(prevState => !prevState); console.log(cart); };

    function toggle(params) {
        if (show === true) {
        }
    }

    const ref = React.useRef();
    React.useEffect(() => {
        const handler = (event) => {
            if (
                (cart || show) &&
                ref.current &&
                !ref.current.contains(event.target)
            ) {
                toggleMenu()
                toggleCart()
            }
        };
        document.addEventListener('mousedown', handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener('mousedown', handler);
        };
    }, []);


    return (
        <>
            <header className='header d-flex'>
                <div className='option-hamburger' onClick={cart ? null : toggleMenu}
                    style={{ cursor: "pointer" }}
                >
                    <Image
                        src="/assets/Group.svg"
                        alt='Group'
                        width={16}
                        height={15}
                    />
                </div>


                <Link href="/">
                    <Image
                        src="/assets/audiophile 2.svg"
                        alt='Social'
                        width={143}
                        height={25}
                        className='headerIcon'
                    />
                </Link>

                <div className='footer-links-div option-hamburger-desktop'>

                    <Link href={"/"}>
                        <h3 className={`footerlinks ${(pathname == "/") && "active"}`}>HOME</h3>
                    </Link>

                    <Link href={`/categories/${"headphones"}`}>
                        <h3 className={`footerlinks ${(pathname == "/categories/headphones") && "active"}`}>HEADPHONES</h3>
                    </Link>

                    <Link href={`/categories/${"speakers"}`}>
                        <h3 className={`footerlinks ${(pathname == "/categories/speakers") && "active"}`}>SPEAKERS</h3>
                    </Link>

                    <Link href={`/categories/${"earphones"}`}>
                        <h3 className={`footerlinks ${(pathname == "/categories/earphones") && "active"}`}>EARPHONES</h3>
                    </Link>
                </div>

                <div onClick={show ? null : toggleCart}
                    style={{ cursor: "pointer" }}
                >
                    <Image
                        src="/assets/cart Icon.svg"
                        alt='Icon'
                        width={16}
                        height={15}
                    />
                </div>
            </header>

            <motion.div
                variants={containerVariants}
                initial={false}
                animate={show ? "open" : "closed"}
                ref={ref} className={`toggle toggleNav ${show ? "showNav" : " "} d-flex`} onClick={toggleMenu}>
                <Category />
            </motion.div>


            <motion.div
                variants={containerVariants}
                initial={false}
                animate={cart ? "open" : "closed"}
                ref={ref} className={`toggle toggleCart ${cart ? "showNav-1" : " "} d-flex`} onClick={toggleCart}>
                <Cart />
            </motion.div>

        </>
    )
}