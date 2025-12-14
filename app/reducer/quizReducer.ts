import { IQuizState, QuizAction } from "../model/IQuizState";

export function quizReducer(state: IQuizState, action: QuizAction): IQuizState {
  switch (action.type) {
    case "SET_QUESTIONS":
      return {
        ...state,
        questions: action.payload,
      };

    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        score: action.payload.isCorrect ? state.score + 1 : state.score,
        timer: 30,
        timerActive: true,
      };

    case "TIMER_TICK":
      return {
        ...state,
        timer: state.timer > 0 ? state.timer - 1 : 0,
      };

    case "STOP_TIMER":
      return {
        ...state,
        timerActive: false,
      };

    case "RESET_TIMER":
      return {
        ...state,
        timer: 30,
        timerActive: true,
      };

    default:
      return state;
  }
}
