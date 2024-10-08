import React from 'react'
import { IQuestion } from '../model/Question'
import { useRouter } from 'next/navigation';

interface IQuestions {
  question: IQuestion;
  onAnswer: (answer: number) => void;
  timer: number;
}

const DisplayQuestions = ({question, onAnswer, timer}: IQuestions) => {

  const router = useRouter();

  const handleQuit = () => {
   const isConfirmed = confirm('Are you sure?');

    if(isConfirmed) {
      router.push('/')
    } else {
      router.push('/quiz')
    }
  }

  return (
    <div className="border-2 border-black rounded-2xl w-screen-90 p-3 bg-gradient-to-br from-[#72a4cd] to-[#514899] my-auto mr-2.5 md:w-4/5 md:my-auto lg:w-2/6 animate-fadeIn">
        <div className="text-xl md:text-lg">Timer: {timer}s</div>
      
      <h2 className="font-bold mt-4 text-lg">{question.question}</h2>
      <ul className="mt-7">
        {question.options.map((option, index) => (
          <li className="border-2 border-black p-2 rounded-2xl cursor-pointer bg-black text-white w-8/12 mx-auto my-2  active:bg-white active:text-black md:hover:bg-white md:hover:text-black transition ease-in duration-150" key={index} onClick={() => onAnswer(index)}>{option}</li>
        ))}
      </ul>

      <button className="border-2 border-black rounded p-1 mt-6 bg-black text-white active:bg-white active:text-black md:hover:bg-white md:hover:text-black transiton: ease-in duration-150" onClick={handleQuit}>Quit</button>
    </div>
  )
}

export default DisplayQuestions
