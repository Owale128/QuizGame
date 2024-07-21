import React from 'react'
import { IQuestion } from '../model/Question'
import { useRouter } from 'next/router';

interface IQuestions {
  question: IQuestion;
  onAnswer: (answer: string) => void;
  handleQuit: () => void
}

const DisplayQuestions = ({question, onAnswer, handleQuit}: IQuestions) => {

  return (
    <div className="border-2 border-black rounded-2xl w-5/12 p-3 bg-gradient-to-br from-[#72a4cd] to-[#514899]">
      
      <h2 className="font-bold mt-4 text-lg">{question.question}</h2>
      <ul className="mt-7">
        {question.options.map((option, index) => (
          <li className="border-2 border-black p-2 rounded-2xl cursor-pointer bg-black text-white w-8/12 mx-auto my-2 hover:bg-white hover:text-black transition ease-in duration-150" key={index} onClick={() => onAnswer(option)}>{option}</li>
        ))}
      </ul>

      <button className="border-2 border-black rounded p-1 mt-6 bg-black text-white hover:bg-white hover:text-black transiton: ease-in duration-150" onClick={handleQuit}>Quit</button>
    </div>
  )
}

export default DisplayQuestions
