'use client' // Error components must be Client Components

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className='error-div'>
            <h2 className='title layout-about-title'>Something went wrong!</h2>
            <Link href="/" >
                <button
                    className='header-btn product-btn'
                // onClick={
                //     // Attempt to recover by trying to re-render the segment
                //     () => reset()
                // }
                >
                    Go Back Home
                </button>
            </Link>
        </div>
    )
}