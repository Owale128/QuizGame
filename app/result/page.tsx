'use client'
import React from 'react'
import { useRouter } from 'next/navigation'


const Result = () => {

  const router = useRouter()

  const handleHomeBtn = () => {
    router.push('/')
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
     
     <h1 className="font-bold text-3xl">Result Page</h1>
          <button className="border-2 border-black rounded p-1" onClick={handleHomeBtn}>Home</button>
        
    </div>
  )
}

export default Result
