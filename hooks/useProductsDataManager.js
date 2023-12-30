'use client'
import axios from 'axios'
import React from 'react'
import getData from "@/hooks/productReducer";

export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure"
}

const restUrl = '/api/products'
// const restUrl = 'http://localhost:3000/api/products'

function useProductsDataManager() {

    const [{ isLoading, productLists }, dispatch] = React.useReducer(getData, {
        isLoading: true,
        productLists: []
    })
    const [requestStatus, setRequestStatus] = React.useState(REQUEST_STATUS.LOADING)
    const [iserror, setError] = React.useState("")


    React.useEffect(() => {
        // filter here
        // wrap in try catch
        // REQUEST_STATUS === SUCCESS else FAILURE
        // set error
        async function getFunc() {
            try {
                const result = await axios.get(restUrl)
                setRequestStatus(REQUEST_STATUS.SUCCESS)
                // console.log(result.data.products);
                dispatch({
                    type: "setGetData",
                    data: result.data.products
                })
            } catch (e) {
                setRequestStatus(REQUEST_STATUS.FAILURE)
                setError(e)
            }
        }

        getFunc()

        return () => {
            // console.log("cleanup")
        }

    }, [])


    return { isLoading, productLists, iserror, dispatch }
}

export default useProductsDataManager