import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"

function Category() {
    return (
        <div className="header-categories">
            <div className="header-category d-flex">
                {/* <div> */}
                <img className="cate-img" src="/assets/cart/image-xx99-mark-one-headphones.jpg" alt="" />
                <h3 className="cate-title">HEADPHONES</h3>
                <Link href={`/categories/${"headphones"}`}>
                    <motion.h4
                        className="cate-subtitle"
                        whileHover={{ scale: 1.1 }}
                    >SHOP {">"} </motion.h4>
                </Link>
                {/* </div> */}
            </div>

            <div className="header-category d-flex">
                {/* <div> */}
                <img className="cate-img" src="/assets/cart/image-zx9-speaker.jpg" alt="" />
                <h3 className="cate-title">SPEAKERS</h3>
                <Link href={`/categories/${"speakers"}`}>
                    <motion.h4 className="cate-subtitle"
                        whileHover={{ scale: 1.1 }}
                    >SHOP {">"} </motion.h4>
                </Link>
                {/* </div> */}
            </div>

            <div className="header-category d-flex">
                {/* <div> */}
                <img className="cate-img" src="/assets/product-yx1-earphones/mobile/image-product.jpg" alt="" />
                <h3 className="cate-title">EARPHONES</h3>
                <motion.h4 className="cate-subtitle"
                    whileHover={{ scale: 1.1 }}
                >
                    <Link href={`/categories/${"earphones"}`}>
                        SHOP {">"}
                    </Link>
                </motion.h4>
                {/* </div> */}
            </div>
        </div >
    )
}

export default Category