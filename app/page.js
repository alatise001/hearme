// 'use client'

import React from "react";
import Category from "./components/category"
import Header from "./components/header";
// import useProductsDataManager from "@/hooks/useProductsDataManager";

export default function Page() {

  // const { isLoading, productLists, dispatch } = useProductsDataManager()

  // console.log(data.products);

  return (
    <div >

      <div className='hero d-flex'>
        <div className='heroinnerdiv d-flex'>

          <h4 className='new-tag'>NEW PRODUCT</h4>

          <span className=' title header-title'>
            <h1>
              XX99 MARK II
            </h1>
            <h1>
              HEADPHONES
            </h1>
          </span>

          <p className='pgh header-pgh'>
            Experience natural, lifelike
            audio and exceptional build
            quality made for the passionate
            music enthusiast.
          </p>

          <button className='product-btn header-btn'>SEE PRODUCTS</button>
        </div>
      </div>

      <div >
        <Category />
      </div>

      <div className="homepage-speaker-detail-1 d-flex">
        <img className="homepage-speaker-image-1" src="./assets/home/mobile/image-speaker-zx9.png" alt="" />

        <span className="title homepage-speaker-header-1">
          <h1>ZX9</h1>
          <h1>SPEAKER</h1>
        </span>

        <p className=" pgh homepage-speaker-pgh-1">
          Upgrade to premium
          speakers that are phenomenally built to
          deliver truly remarkable sound.
        </p>

        <button className="product-btn homepage-speaker-btn-1">
          SEE PRODUCT
        </button>

      </div>

      <div className="homepage-speaker-detail-2 d-flex">
        <h1 className="homepage-speaker-header-2">
          ZX7 SPEAKER
        </h1>

        <button className="product-btn homepage-speaker-btn-2">
          SEE PRODUCT
        </button>
      </div>

      <div className="homepage-speaker-detail-3 d-flex">
        <img className="homepage-speaker-image-3" src="./assets/home/mobile/image-earphones-yx1.jpg" alt="" />
        <div className="homepage-speaker-div-3 d-flex">
          <h1 className="homepage-speaker-header-2">
            YX1 EARPHONES
          </h1>

          <button className="product-btn homepage-speaker-btn-2">
            SEE PRODUCT
          </button>
        </div>
      </div>

    </div>

  )
}
