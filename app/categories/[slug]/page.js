'use client'
// import axios from 'axios'
import CategoryProduct from '@/app/components/category-product';
import useProductsDataManager from '@/hooks/useProductsDataManager';


// async function fetchCategoryInfo(params) {

//     const result = await axios.get('http://localhost:3000/api/products')

//     const filteredObjects = result.data.products.filter(obj => obj.category === params.slug);
//     return filteredObjects;
// }


export default function ProductsCategories({ params }) {
    // const categoryInfo = await fetchCategoryInfo(params)
    // console.log(categoryInfo);
    const { isLoading, productLists, iserror, dispatch } = useProductsDataManager()
    // console.log(productLists, 'ran');

    const filteredObjects = productLists.filter(obj => obj.category === params.slug);


    // const { id, name, image, category, categoryImage, price, description, } = categoryInfo
    return (
        <>
            <header className='category-header'>
                {params.slug}
            </header>

            <div className='d-flex category-product-container' >
                {
                    filteredObjects.map((map, index) => (
                        <CategoryProduct index={index + 1} key={map.id} slugs={params.slug} {...map} />
                    ))
                }
            </div>
        </>
    )
}