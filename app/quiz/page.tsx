import React from 'react'
import Link from 'next/link'

const Questions = () => {

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <h1 className="font-bold text-3xl">Questions Page</h1>
        <Link href='/result'>
            <button className="border-2 border-black rounded p-1">Show Result</button>
        </Link>
    </div>
  )
}

export default Questions
