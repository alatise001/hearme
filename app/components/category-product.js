import React from 'react'

function CategoryProduct() {
    return (
        <div className="category-product d-flex">
            <div className="category-product-image-bg d-flex">
                <img className="category-product-image" src="/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg" alt="" />
            </div>

            <h4 className="new-tag " style={{ color: "#D87D4A;" }}> NEW PRODUCT</h4>

            <span className="title">
                <h1>XX99 MARK II </h1>
                <h1>HEADPHONES</h1>
            </span>


            <p className="pgh category-product-pgh ">The new XX99 Mark II headphones is
                the pinnacle of pristine audio. It
                redefines your premium headphone experience by
                reproducing the balanced depth and precision of
                studio-quality sound.</p>

            <button className="product-btn header-btn" >
                SEE PROUCT
            </button>

        </div>
    )
}

export default CategoryProduct