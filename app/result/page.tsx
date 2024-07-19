import React from 'react'
import Link from 'next/link'

const Result = () => {

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
     
     <h1 className="font-bold text-3xl">Result Page</h1>
        <Link href='/'>
          <button className="border-2 border-black rounded p-1">Home</button>
        </Link>
    </div>
  )
}

export default Result
