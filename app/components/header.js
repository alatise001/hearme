"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Category from './category';
import Cart from './cart';
import { motion } from 'framer-motion';

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

// const containerVariants = {
//     hidden: {
//         opacity: 0,
//         x: "-100%"
//     },
//     visible: {
//         opacity: 1,
//         x: 0,
//         transition: {
//             type: 'spring',
//             stiffness: 37,
//             mass: 1,
//             damping: 5,
//         },

//         exit: {
//             x: "-100vh",
//             transition: { ease: "easeInOut" }
//         }
//     },
// }

export default function Header() {

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
                {/* <img src="/assets/Group.svg" alt="" /> */}
                <div className='option-hamburger' onClick={cart ? null : toggleMenu}
                    style={{ cursor: "pointer" }}
                >
                    <img src="/assets/Group.svg" alt="" />
                </div>


                <Link href="/">
                    <img className='headerIcon' src="/assets/audiophile 2.svg" alt="" />
                </Link>

                <div className='footer-links-div option-hamburger-desktop'>

                    <Link href={"/"}>
                        <h3 className='footerlinks'>HOME</h3>
                    </Link>

                    <Link href={`/categories/${"headphones"}`}>
                        <h3 className='footerlinks'>HEADPHONES</h3>
                    </Link>

                    <Link href={`/categories/${"speakers"}`}>
                        <h3 className='footerlinks'>SPEAKERS</h3>
                    </Link>

                    <Link href={`/categories/${"earphones"}`}>
                        <h3 className='footerlinks'>EARPHONES</h3>
                    </Link>
                </div>

                <div onClick={show ? null : toggleCart}
                    style={{ cursor: "pointer" }}
                >
                    <img src="/assets/cart Icon.svg" alt="" />
                </div>
            </header>

            <motion.div
                variants={containerVariants}
                initial={false}
                animate={show ? "open" : "closed"}
                // custom={height}
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