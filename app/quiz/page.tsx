"use client";
import axios from "axios";
import { useEffect, useState, useReducer } from "react";
import { useRouter } from "next/navigation";
import { IQuestion } from "../model/IQuestion";
import { getTimerStyle } from "../lib/gameStyles";
import DisplayQuestions from "../component/DisplayQuestions";
import { shuffleArray, shuffleQuestionOptions } from "../lib/shuffle";
import ConfirmModal from "../component/ConfirmModal";
import { quizReducer } from "../reducer/quizReducer";
import { initialQuizState } from "../model/IQuizState";

const Quiz = () => {
  const [state, dispatch] = useReducer(quizReducer, initialQuizState);
  const [showQuitModal, setShowQuitModal] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (!username) {
      router.push("/");
      return;
    }
  }, [router]);

  useEffect(() => {
    try {
      const fetchScore = async () => {
        const response = await axios.get<IQuestion[]>("/api/questions");
        const questionsWithShuffledOptions = response.data.map(
          shuffleQuestionOptions
        );
        const shuffledQuestions = shuffleArray(questionsWithShuffledOptions);
        dispatch({ type: "SET_QUESTIONS", payload: shuffledQuestions });
      };
      fetchScore();
    } catch (error) {
      console.error("Error fetch questions:", error);
    }
  }, []);

  useEffect(() => {
    if (state.timerActive && state.timer > 0) {
      const interval = setInterval(() => {
        dispatch({ type: "TIMER_TICK" });
      }, 1000);

      return () => clearInterval(interval);
    } else if (state.timer === 0 && state.timerActive) {
      dispatch({ type: "STOP_TIMER" });
      handleNextQuestion(false);
    }
  }, [state.timer, state.timerActive]);

  const handleAnswer = (answer: number) => {
    dispatch({ type: "STOP_TIMER" });
    const isCorrect = answer === state.questions[state.currentQuestionIndex].correctAnswer;
    handleNextQuestion(isCorrect);
  };

  const handleQuit = () => {
    setShowQuitModal(true);
  };

  const handleConfirmQuit = () => {
    setShowQuitModal(false);
    router.push("/");
  };

  const handleCancelQuit = () => {
    setShowQuitModal(false);
  };

  const handleNextQuestion = (isCorrect: boolean) => {
    const nextQuestionIndex = state.currentQuestionIndex + 1;
    if (nextQuestionIndex < state.questions.length) {
      dispatch({ type: "NEXT_QUESTION", payload: { isCorrect } });
    } else {
      const username = localStorage.getItem("username");
      const finalScore = isCorrect ? state.score + 1 : state.score;

      fetch("/api/score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, score: finalScore }),
      }).then(() => {
        router.push("/score");
      });
    }
  };

  if (!state.questions.length)
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="text-7xl mb-4 animate-trophy-bounce">⏳</div>
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            Loading Quiz...
          </div>
        </div>
      </div>
    );

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center py-6 overflow-y-auto">
        <DisplayQuestions
          question={state.questions[state.currentQuestionIndex]}
          onAnswer={handleAnswer}
          timer={state.timer}
          questionNumber={state.currentQuestionIndex + 1}
          totalQuestions={state.questions.length}
          handleQuit={handleQuit}
          getTimerStyle={() => getTimerStyle(state.timer)}
        />
      </div>

      <ConfirmModal
        isOpen={showQuitModal}
        title="Quit Quiz?"
        message="Are you sure you want to quit? Your progress will be lost."
        onConfirm={handleConfirmQuit}
        onCancel={handleCancelQuit}
        confirmText="Yes, Quit"
        cancelText="No, Continue"
      />
    </>
  );
};

export default Quiz;
