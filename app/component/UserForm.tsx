import React, { FormEvent } from 'react'

interface IUserForm {
    username: string;
    setUserName: (name: string) => void;
    handleSubmit: (e: FormEvent) => void;
}

const UserForm = ({username, setUserName, handleSubmit}: IUserForm) => {

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center mb-20 border-2 border-black rounded-2xl p-5 bg-gradient-to-br from-black via-[#aa3939] to-black">
    <input type="text"
    value={username}
    onChange={(e) => setUserName(e.target.value)}
    placeholder="Enter your username"
    className="text-center border-2 border-black rounded p-1 block my-5"
    />
<button className="border-2 border-black rounded p-1 items-center bg-black text-white hover:bg-white hover:text-black cursor-pointer transition ease-in duration-300">Start Quiz</button>
</form>

  )
}

export default UserForm
