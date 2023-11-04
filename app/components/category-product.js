import React from 'react'
import Category from './category'
import Link from 'next/link'

function CategoryProduct({ name, description, newProduct, categoryImage, slug }) {
    // {name, CategoryImage new description}  
    return (
        <>
            <div className="category-product d-flex">
                <div className="category-product-image-bg d-flex">
                    <img className="category-product-image" src={categoryImage.mobile} alt="" />
                    {/* <img className="category-product-image" src="/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg" alt="" /> */}
                </div>

                {newProduct ? (<h4 className="new-tag " style={{ color: '#D87D4A' }}> NEW PRODUCT</h4>) : ""}


                <span className="title">
                    <h1>{name}</h1>
                </span>


                <p className="pgh category-product-pgh ">{description}</p>

                <Link href={`/products/${slug}`}>
                    <button className="product-btn header-btn" >
                        SEE PROUCT
                    </button>
                </Link>

            </div>
        </>
    )
}

export default CategoryProduct