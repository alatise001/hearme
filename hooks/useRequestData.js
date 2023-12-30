'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'

export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure"
}

const restUrl = '/api/products'
// const restUrl = 'http://localhost:3000/api/products'

function UseRequestData() {
    const [data, setData] = useState([])
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING)
    const [error, setError] = useState('')

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

    useEffect(() => {
        async function getFunc() {
            try {
                fetch(restUrl)
                    .then((res) => res.json())
                    .then((data) => {
                        setData(data)
                        setLoading(false)
                    })

                // const result = await axios.get(restUrl)
                setRequestStatus(REQUEST_STATUS.SUCCESS)
                // console.log(result.data.products);
                // setData(result.data)
            } catch (e) {
                setRequestStatus(REQUEST_STATUS.FAILURE)
                setError(e)

            }
        }

        getFunc()
    }, [])


    function updateRecord(record, doneCallback) {
        const originRecords = [...data]
        const newRecords = data.map(function (rec) {
            return rec.id === record.id ? record : rec
        })

        async function getFunc() {
            try {
                setData(newRecords)
                await axios.put(`${restUrl}/${record.id}`, record)
                if (doneCallback) {
                    doneCallback()
                }
            } catch (e) {
                console.log("error thrown inside getFunc", e);
                if (doneCallback) {
                    doneCallback()
                }
                setData(originRecords)

            }
        }

        getFunc()
    }


    function deleteRecord(record, doneCallback) {
        const originRecords = [...data]
        const newRecords = data.filter(function (rec) {
            return rec.id != record.id
        })

        async function getFunc() {
            try {
                setData(newRecords)
                await axios.delete(`${restUrl}/${record.id}`, record)
                if (doneCallback) {
                    doneCallback()
                }
            } catch (e) {
                console.log("error thrown inside getFunc", e);
                if (doneCallback) {
                    doneCallback()
                }
                setData(originRecords)

            }
        }

        getFunc()
    }

    function insertRecord(record, doneCallback) {
        const originRecords = [...data]
        const newRecords = [record, ...data]

        async function getFunc() {
            try {
                setData(newRecords)
                await axios.post(`${restUrl}/99999`, record)
                if (doneCallback) {
                    doneCallback()
                }
            } catch (e) {
                console.log("error thrown inside getFunc", e);
                if (doneCallback) {
                    doneCallback()
                }
                setData(originRecords)
            }
        }

        getFunc()
    }

    return {
        data,
        requestStatus,
        error,
        updateRecord,
        insertRecord,
        deleteRecord,
    }

}

export default UseRequestData