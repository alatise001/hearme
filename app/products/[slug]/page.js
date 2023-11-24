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

    if (isLoading) {
        return "...LOADING"
    }

    function disable(id) {
        const resp = data.filter(obj => obj.id === res[0].id);
        console.log(res);

        return resp
    }

    // console.log(disable()[0].quantity);

    return (
        <div className='d-flex category-product-container'>

            <div className="product-info-div" >
                <div className='product-img-title-div'>
                    <div className='category-product-image-bg d-flex'>
                        <img className='category-product-image' src={res[0].categoryImage.tablet} alt="" />
                    </div>

                    <div className='product-cart-info-div'>
                        {res[0].newProduct ? (<h4 className='new-tag' style={{ color: "#D87D4A", textAlign: "start" }}>new product</h4>) : ""}


                        <h1 className='title' style={{ textAlign: "start" }}>{res[0].name}</h1>
                        <p style={{ textAlign: "start", maxWidth: "95%" }} className='pgh category-product-pgh'>
                            {res[0].description}
                        </p>

                        <h3 style={{ textAlign: "start" }}>$ {res[0].price}</h3>

                        <div className=' add-to-cart-div'>
                            {/* <AddToCart /> */}
                            <div className=' add-to-cart-divs add-to-cart-span' >
                                <button disabled={(disable()[0]?.quantity <= 1) ? true : false} onClick={() => dispatch({ type: "sub", id: res[0].id })}>−</button>
                                <span>{data?.map(map => ((map.id === res[0].id) ? map.quantity : ""))}</span>
                                <button onClick={() => dispatch({ type: "add", id: res[0].id })}>+</button>
                            </div>

                            <button className='product-btn header-btn add-to-cart-divs' onClick={() => dispatch({ type: "addToCart", id: res[0].id, price: res[0].price, name: res[0].name, slug: res[0].slug })}>add to cart</button>
                        </div>
                    </div>
                </div>

                <h2 style={{ textAlign: "start" }} className='sub-title'>features</h2>

                <p style={{ textAlign: "start", maxWidth: "95%" }} className='pgh category-product-pgh'>
                    {res[0].features}
                </p>


                <div className="product-info-div-box">

                    <h2 style={{ textAlign: "start" }} className='sub-title sub-title-product'>
                        in the box
                    </h2>

                    <div className='inthebox' >

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


                <div className='other-product-container'>


                    {res[0].others.map((map, index) => (
                        <div key={index} className='other-product-inner-div'>
                            <div className='d-flex other-product-img-bg'>
                                <img className='other-product-img' src={map.image.tablet} alt="" />
                            </div>

                            <h2 className='sub-title'>{map.name}</h2>


                            <Link href={`/products/${map.slug}`} >
                                <button style={{ alignSelf: "center" }} className='product-btn header-btn'>
                                    see product
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>


            </div >
        </div >

    )
}