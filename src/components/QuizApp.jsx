import React, { useReducer } from "react";
import Question from "./Question";
import ResultSummary from "./ResultSummary";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import data from "../assets/data.js";
import rightAnswer from "../assets/right-answer.wav";
import wrongAnswer from "../assets/wrong-answer.mp3";
import ProgressBar from "./ProgressBar.jsx";

// Action types
const actionTypes = {
  SET_CURRENT_QUESTION: "SET_CURRENT_QUESTION",
  SET_USER_ANSWERS: "SET_USER_ANSWERS",
  SET_SHOW_SUMMARY: "SET_SHOW_SUMMARY",
  SET_IS_NEXT_ENABLED: "SET_IS_NEXT_ENABLED",
};

// Reducer function
const quizReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_QUESTION:
      return { ...state, currentQuestion: action.payload };
    case actionTypes.SET_USER_ANSWERS:
      return { ...state, userAnswers: action.payload };
    case actionTypes.SET_SHOW_SUMMARY:
      return { ...state, showSummary: action.payload };
    case actionTypes.SET_IS_NEXT_ENABLED:
      return { ...state, isNextEnabled: action.payload };
    default:
      return state;
  }
};

const QuizApp = ({ topic, setIsStartQuiz }) => {
  const [state, dispatch] = useReducer(quizReducer, {
    currentQuestion: 0,
    userAnswers: [],
    showSummary: false,
    isNextEnabled: false,
  });

  const { currentQuestion, userAnswers, showSummary, isNextEnabled } = state;

  const questions = data.filter((question) => question.topic === topic);

  const rightSound = new Audio(rightAnswer);
  const wrongSound = new Audio(wrongAnswer);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswerSelect = (answer) => {
    const nextUserAnswers = [...userAnswers];
    nextUserAnswers[currentQuestion] = answer;
    dispatch({ type: actionTypes.SET_USER_ANSWERS, payload: nextUserAnswers });

    if (answer === questions[currentQuestion].correctAnswer) {
      toast.success("Correct Answer! 😊", { autoClose: 1000 });
      rightSound.play();
    } else {
      toast.error("Wrong answer! 😢", { autoClose: 1000 });
      wrongSound.play();
    }
  };

  const handleNext = () => {
    if (currentQuestion + 1 < questions.length) {
      dispatch({
        type: actionTypes.SET_CURRENT_QUESTION,
        payload: currentQuestion + 1,
      });
    } else {
      dispatch({ type: actionTypes.SET_SHOW_SUMMARY, payload: true });
    }
    dispatch({ type: actionTypes.SET_IS_NEXT_ENABLED, payload: false });
  };

  const restartQuiz = () => {
    setIsStartQuiz(false);

    dispatch({ type: actionTypes.SET_CURRENT_QUESTION, payload: 0 });
    dispatch({ type: actionTypes.SET_USER_ANSWERS, payload: [] });
    dispatch({ type: actionTypes.SET_SHOW_SUMMARY, payload: false });
  };

  return (
    <div className="container mx-auto p-4 md:mt-16">
      <ProgressBar progress={progress} />
      <h1 className="mb-2 md:mb-4 text-center text-3xl font-bold text-stone-700">
        React Basics and Hooks Quiz App
      </h1>
      <p className="text-right">
        {currentQuestion + 1}/{questions.length}
      </p>
      {showSummary ? (
        <ResultSummary
          userAnswers={userAnswers}
          questions={questions}
          restartQuiz={restartQuiz}
        />
      ) : (
        <>
          <Question
            question={questions[currentQuestion]}
            onAnswerSelect={handleAnswerSelect}
            handleNext={handleNext}
            isNextEnabled={isNextEnabled}
            setIsNextEnabled={(value) =>
              dispatch({
                type: actionTypes.SET_IS_NEXT_ENABLED,
                payload: value,
              })
            }
          />

          <ToastContainer />
        </>
      )}
    </div>
  );
};

export default QuizApp;
