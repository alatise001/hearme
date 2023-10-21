import React from 'react'
import Link from 'next/link'

function Category() {
    return (
        <div className="header-categories">
            <div className="header-category d-flex">
                {/* <div> */}
                <img className="cate-img" src="./assets/cart/image-xx99-mark-one-headphones.jpg" alt="" />
                <h3 className="cate-title">HEADPHONES</h3>
                <Link href={`/categories/${"headphones"}`}>
                    <h4 className="cate-subtitle">SHOP {">"} </h4>
                </Link>
                {/* </div> */}
            </div>

            <div className="header-category d-flex">
                {/* <div> */}
                <img className="cate-img" src="./assets/cart/image-zx9-speaker.jpg" alt="" />
                <h3 className="cate-title">SPEAKERS</h3>
                <Link href={`/categories/${"speakers"}`}>
                    <h4 className="cate-subtitle">SHOP {">"} </h4>
                </Link>
                {/* </div> */}
            </div>

            <div className="header-category d-flex">
                {/* <div> */}
                <img className="cate-img" src="./assets/product-yx1-earphones/mobile/image-product.jpg" alt="" />
                <h3 className="cate-title">EARPHONES</h3>
                <Link href={`/categories/${"earphones"}`}>
                    <h4 className="cate-subtitle">SHOP {">"} </h4>
                </Link>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Category