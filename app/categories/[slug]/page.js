'use client'
import axios from 'axios'

import useProductsDataManager from "@/hooks/useProductsDataManager";
import UseRequestData from '@/hooks/useRequestData';

async function fetchCategoryInfo(params) {
    // const restUrl = "api/products/index"

    const { productLists } = useProductsDataManager()
    // const { isLoading, productLists, dispatch } = useProductsDataManager()
    console.log(params);
    console.log("hello");
    console.log(productLists);

    // const result = await axios.get(restUrl)
    // console.log(result);

    const response = await fetch('/api/products/')
    const dat = await response.json();
    // return data
    console.log(dat);



    const {
        data,
        requestStatus,
        error,
        updateRecord,
        insertRecord,
        deleteRecord,
    } = UseRequestData()

    console.log(data);

    const filteredObjects = productLists.filter(obj => obj.category === params);
    return filteredObjects;

}


export default function ProductsCategories({ params }) {
    const categoryInfo = fetchCategoryInfo(params)

    // const { id, name, image, category, categoryImage, price, description, } = categoryInfo

    categoryInfo.map(map => (

        <div className="category-product d-flex">
            <div className="category-product-image-bg d-flex">
                <img className="category-product-image" src="/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg" alt="" />
            </div>

            <h4 className="new-tag " style={{ color: "#D87D4A;" }}> NEW PRODUCT</h4>

            <span className="title">
                <h1>{map.name} </h1>
                {/* <h1>XX99 MARK II </h1> */}
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
    ))


}