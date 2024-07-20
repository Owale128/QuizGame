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
    <div>
      
      <h2>{question.question}</h2>
      <ul>
        {question.options.map((option, index) => (
          <li key={index} onClick={() => onAnswer(option)}>{option}</li>
        ))}
      </ul>

      <button className="border-2 border-black rounded p-1" onClick={handleQuit}>Quit</button>
    </div>
  )
}

export default DisplayQuestions
