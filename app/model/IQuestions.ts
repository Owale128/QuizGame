import { IQuestion } from "./IQuestion";

export interface IQuestions {
  question: IQuestion;
  onAnswer: (answer: number) => void;
  timer: number;
  questionNumber: number;
  totalQuestions: number;
  handleQuit: () => void;
  getTimerStyle: () => string;
}
