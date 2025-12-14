import { IQuestion } from "./IQuestion";

export interface IQuizState {
  questions: IQuestion[];
  currentQuestionIndex: number;
  score: number;
  timer: number;
  timerActive: boolean;
}

export type QuizAction =
  | { type: "SET_QUESTIONS"; payload: IQuestion[] }
  | { type: "NEXT_QUESTION"; payload: { isCorrect: boolean } }
  | { type: "TIMER_TICK" }
  | { type: "STOP_TIMER" }
  | { type: "RESET_TIMER" };

export const initialQuizState: IQuizState = {
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  timer: 30,
  timerActive: true,
};