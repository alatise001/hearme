'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

function BackBtn() {

    const router = useRouter()

    return (
        <div onClick={() => router.back()} className='back-btn-div'>
            <button className='back-btn'>Go Back</button>
        </div>
    )
}

export default BackBtn