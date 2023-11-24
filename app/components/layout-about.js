import React from 'react'

function LayoutAbout() {
    return (
        <div className="layout-about d-flex">
            <img className="layout-about-img" src="./assets/shared/desktop/image-best-gear.jpg" alt="" />

            <span className="title layout-about-title">
                <h1>BRINGING YOU THE</h1>
                <h1> <span className="layout-about-colored-title">BEST</span> AUDIO GEAR</h1>
            </span>

            <p className="pgh layout-about-pgh">
                Located at the heart of New York City,
                Audiophile is the premier store for high end headphones,
                earphones, speakers, and audio accessories.
                We have a large showroom and luxury demonstration rooms available
                for you to browse and experience a wide range of our products.
                Stop by our store to meet some of the fantastic people who make
                Audiophile the best place to buy your portable audio equipment.
            </p>
        </div>
    )
}

export default LayoutAbout