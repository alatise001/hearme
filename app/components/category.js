import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"
import Image from 'next/image'

function Category() {
    return (
        <div className="header-categories">
            <div className="header-category d-flex">
                <Image
                    src="/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg"
                    alt='xx99-mark-one-headphones'
                    width={500}
                    height={500}
                    className="cate-img"
                />
                <h3 className="cate-title">HEADPHONES</h3>
                <Link href={`/categories/${"headphones"}`}>
                    <motion.h4
                        className="cate-subtitle"
                        whileHover={{ scale: 1.1 }}
                    >SHOP {">"} </motion.h4>
                </Link>
            </div>

            <div className="header-category d-flex">
                <Image
                    src="/assets/product-zx9-speaker/desktop/image-product.jpg"
                    alt='zx9-speaker'
                    width={500}
                    height={500}
                    className="cate-img"
                />
                <h3 className="cate-title">SPEAKERS</h3>
                <Link href={`/categories/${"speakers"}`}>
                    <motion.h4 className="cate-subtitle"
                        whileHover={{ scale: 1.1 }}
                    >SHOP {">"} </motion.h4>
                </Link>
            </div>

            <div className="header-category d-flex">
                <Image
                    src="/assets/product-yx1-earphones/desktop/image-product.jpg"
                    alt='yx1-earphones'
                    width={500}
                    height={500}
                    className="cate-img"
                />
                <h3 className="cate-title">EARPHONES</h3>
                <motion.h4 className="cate-subtitle"
                    whileHover={{ scale: 1.1 }}
                >
                    <Link href={`/categories/${"earphones"}`}>
                        SHOP {">"}
                    </Link>
                </motion.h4>
            </div>
        </div >
    )
}

export default Category