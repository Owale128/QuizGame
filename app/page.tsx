'use client'
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
  const [username, setUserName] = useState('');
  const router = useRouter()

const handleSubmit = (e: FormEvent) => {
  e.preventDefault()
  
  if(username){
    router.push('/quiz')
  } else {
    alert('Please enter username')
  }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">

      <h1 className="font-bold text-3xl ">Home Page</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center mb-20">
            <input type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your username"
            className="text-center border-2 border-black rounded p-1 block my-5"
            />
        <button className="border-2 border-black rounded p-1 items-center">Start Quiz</button>
    </form>

    </main>
  );
}
