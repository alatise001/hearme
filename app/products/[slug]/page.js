'use client'
import React from 'react';
import useProductsDataManager from '@/hooks/useProductsDataManager';
import Link from 'next/link';
import { CartContext } from '@/app/contexts/cartContext';
// import AddToCart from '@/app/components/addToCart';



export default function Product({ params }) {

    const { data, dispatch } = React.useContext(CartContext)
    console.log(data);

    const { isLoading, productLists, iserror, } = useProductsDataManager()

    const res = productLists.filter(obj => obj.slug === params.slug);
    console.log(res);
    console.log(isLoading);

    function handleClick(params) {
        dispatch({ type: "setChat", details: params })
    }

    if (isLoading) {
        return "...LOADING"
    }

    return (
        <div className='d-flex category-product-container'>
            <div style={{ width: "100%" }} className='category-product-image-bg d-flex'>
                <img className='category-product-image' src={res[0].categoryImage.mobile} alt="" />
            </div>

            <div className="product-info-div" >
                {res[0].newProduct ? (<h4 className='new-tag' style={{ color: "#D87D4A", textAlign: "start" }}>new product</h4>) : ""}


                <h1 className='title' style={{ textAlign: "start" }}>{res[0].name}</h1>
                <p style={{ textAlign: "start", maxWidth: "95%" }} className='pgh category-product-pgh'>
                    {res[0].description}
                </p>

                <h3 style={{ textAlign: "start" }}>$ {res[0].price}</h3>

                <div className=' add-to-cart-div'>
                    {/* <AddToCart /> */}
                    <div className=' add-to-cart-divs add-to-cart-span' >
                        <span onClick={() => dispatch({ type: "sub", id: res[0].id })}>−</span>
                        <span>{data?.map(map => ((map.id === res[0].id) ? map.quantity : ""))}</span>
                        <span onClick={() => dispatch({ type: "add", id: res[0].id })}>+</span>
                    </div>

                    <button className='product-btn header-btn add-to-cart-divs' onClick={() => dispatch({ type: "addToCart", id: res[0].id, price: res[0].price, name: res[0].name, slug: res[0].slug })}>add to cart</button>
                </div>

                <h2 style={{ textAlign: "start" }} className='sub-title'>features</h2>

                <p style={{ textAlign: "start", maxWidth: "95%" }} className='pgh category-product-pgh'>
                    {res[0].features}
                </p>


                <div className="product-info-div-box">

                    <h2 style={{ textAlign: "start" }} className='sub-title'>
                        in the box
                    </h2>

                    <div>

                        {res[0].includes.map((map, index) => (


                            <h4 key={index} className='qty'> <span className='qty-span'>x{map.quantity}</span>{map.item}</h4>
                        ))}
                    </div>
                </div>

            </div>

            <div className='galleryImg'>
                <img className='galleryImg-1' src={res[0].gallery.first.mobile} alt="" />
                <img className='galleryImg-1' src={res[0].gallery.second.mobile} alt="" />
                <img className='galleryImg-2' src={res[0].gallery.third.mobile} alt="" />
            </div>

            <div className='other-product-div'>

                <h2 className='sub-title'>
                    you may also like
                </h2>

                {res[0].others.map((map, index) => (
                    <div key={index} className='other-product-inner-div'>
                        <div className='d-flex other-product-img-bg'>
                            <img className='other-product-img' src={map.image.mobile} alt="" />
                        </div>

                        <h2 className='sub-title'>{map.name}</h2>


                        <Link href={`/products/${map.slug}`} >
                            <button style={{ alignSelf: "center" }} className='product-btn header-btn'>
                                see product
                            </button>
                        </Link>
                    </div>
                ))}


            </div >
        </div >

    )
}