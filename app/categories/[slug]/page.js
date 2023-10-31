// 'use client'
import axios from 'axios'
import CategoryProduct from '@/app/components/category-product';

async function fetchCategoryInfo(params) {

    const result = await axios.get('http://localhost:3000/api/products')

    const filteredObjects = result.data.products.filter(obj => obj.category === params.slug);
    return filteredObjects;
}


export default async function ProductsCategories({ params }) {
    const categoryInfo = await fetchCategoryInfo(params)
    // console.log(categoryInfo);

    // const { id, name, image, category, categoryImage, price, description, } = categoryInfo
    return (
        <>
            <header className='category-header'>
                {params.slug}
            </header>

            <div className='d-flex category-product-container' >
                {
                    categoryInfo.map(map => (
                        <CategoryProduct key={map.id} slugs={params.slug} {...map} />
                    ))
                }
            </div>
        </>
    )
}