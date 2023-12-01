import React from "react";
import Link from "next/link";
import Category from "./components/category"
import LayoutAbout from "./components/layout-about";

export default function Page() {

  return (
    <>
      <div className="main-container" >

        <div className='hero d-flex'>
          <div className='heroinnerdiv'>

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

            <Link href={`/products/${"xx99-mark-one-headphones"}`}>
              <button className='product-btn header-btn'>SEE PRODUCTS</button>
            </Link>
          </div>
        </div>

        <div >
          <Category />
        </div>

        <div className="homepage-speaker-detail-1 d-flex">

          {/* <picture>
          <source media="(max-width: 992px)" srcset="./assets/home/desktop/image-speaker-zx9.png" />
          <source media="(max-width: 768px)" srcset="./assets/home/tablet/image-speaker-zx9.png" />
        </picture> */}

          <img className="homepage-speaker-image-1" src="./assets/home/desktop/image-speaker-zx9.png" alt="" />

          {/* <img className="homepage-speaker-image-1" src="./assets/home/mobile/image-speaker-zx9.png" alt="" /> */}

          <div className="d-flex homepage-speaker-detail-1-div ">

            <span className="title homepage-speaker-header-1">
              <h1>ZX9</h1>
              <h1>SPEAKER</h1>
            </span>

            <p className=" pgh homepage-speaker-pgh-1">
              Upgrade to premium
              speakers that are phenomenally built to
              deliver truly remarkable sound.
            </p>


            <Link href={`/products/${"zx9-speaker"}`}>
              <button className="product-btn homepage-speaker-btn-1">
                SEE PRODUCT
              </button>
            </Link>
          </div>

        </div>


        <div className="homepage-speaker-detail-2 d-flex">
          <h1 className="homepage-speaker-header-2">
            ZX7 SPEAKER
          </h1>

          <Link href={`/products/${"zx7-speaker"}`}>
            <button className="product-btn homepage-speaker-btn-2">
              SEE PRODUCT
            </button>
          </Link>
        </div>

        <div className="homepage-speaker-detail-3 d-flex">

          <picture >
            <source className="homepage-speaker-image-3" media="(min-width: 992px)" srcset="./assets/home/desktop/image-earphones-yx1.jpg" />
            <source className="homepage-speaker-image-3" media="(min-width: 768px)" srcset="./assets/home/tablet/image-earphones-yx1.jpg" />
            <img className="homepage-speaker-image-3" src="./assets/home/desktop/image-earphones-yx1.jpg" alt="" />
          </picture>

          {/* <img className="homepage-speaker-image-3" src="./assets/home/mobile/image-earphones-yx1.jpg" alt="" /> */}

          <div className="homepage-speaker-div-3 d-flex">
            <h1 className="homepage-speaker-header-2">
              YX1 EARPHONES
            </h1>
            <Link href={`/products/${"yx1-earphones"}`}>
              <button className="product-btn homepage-speaker-btn-2">
                SEE PRODUCT
              </button>
            </Link>
          </div>
        </div>

      </div >

      <>
        <LayoutAbout />
      </>
    </>
  )
}
