'use client'
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import UserForm from "./component/UserForm";


const Home = () => {
  const [username, setUserName] = useState('');
  const router = useRouter()

const handleSubmit = (e: FormEvent) => {
  e.preventDefault()
  
  if(username){
    localStorage.setItem('username', username)
    router.push('/quiz')
  } else {
    alert('Please enter username')
  }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="font-bold text-3xl mb-2 ">Home Page</h1>
    <UserForm username={username} setUserName={setUserName} handleSubmit={handleSubmit} />
    </main>
  );
}

export default Home