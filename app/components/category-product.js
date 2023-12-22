import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'


function CategoryProduct({ index, name, description, newProduct, categoryImage, slug }) {
    return (
        <div className='d-flex box' >
            <div className="category-product d-flex">
                <div className={`category-product-image-bg d-flex ${(index % 2 != 0) ? "order" : ""}`}>
                    <Image
                        src={categoryImage.desktop}
                        alt='categoryImage'
                        width={500}
                        height={500}
                        className={`category-product-image`}
                    />
                </div>

                <div className='product-category-detail d-flex'>
                    {newProduct ? (<h4 className="new-tag " style={{ color: '#D87D4A' }}> NEW PRODUCT</h4>) : ""}


                    <span className="title">
                        <h1>{name}</h1>
                    </span>


                    <p className="pgh category-product-pgh ">{description}</p>

                    <Link href={`/products/${slug}`}>
                        <motion.button
                            className="product-btn header-btn"
                            initial={{
                                y: 0,
                            }}
                            animate={{
                                y: 7,
                            }}

                            transition={{
                                type: 'tween',
                                ease: 'easeInOut',
                                repeat: Infinity,
                                repeatType: 'reverse',
                                duration: 1,
                            }}
                        >
                            SEE PROUCT
                        </motion.button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default CategoryProduct