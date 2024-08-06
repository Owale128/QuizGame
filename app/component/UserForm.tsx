import React, { FormEvent } from 'react'

interface IUserForm {
    username: string;
    setUserName: (name: string) => void;
    handleSubmit: (e: FormEvent) => void;
}

const UserForm = ({username, setUserName, handleSubmit}: IUserForm) => {

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center my-auto border-2 border-black rounded-2xl p-8 bg-gradient-to-br from-black via-[#aa3939] to-black animate-flyIn">
    <input type="text"
    value={username}
    onChange={(e) => setUserName(e.target.value)}
    placeholder="Enter your username"
    className="text-center text-lg border-2 border-black rounded block my-5 p-1 placeholder:text-black"
    />
<button className="border-2 border-black rounded p-1 items-center bg-black text-white active:bg-white active:text-black md:hover:bg-white md:hover:text-black cursor-pointer transition ease-in duration-300 text-lg">Start Quiz</button>
</form>

  )
}

export default UserForm
