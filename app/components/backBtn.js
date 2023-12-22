'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

function BackBtn() {

    const router = useRouter()

    return (
        <div className='back-btn-div'>
            <button onClick={() => router.back()} className='back-btn'>Go Back</button>
        </div>
    )
}

export default BackBtn