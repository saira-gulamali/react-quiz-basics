import React from "react";
import Question from "./Question";
import ResultSummary from "./ResultSummary";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import questions from "../assets/dataDraft.js";
import rightAnswer from "../assets/right-answer.wav";
import wrongAnswer from "../assets/wrong-answer.mp3";

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [userAnswers, setUserAnswers] = React.useState([]);
  const [showSummary, setShowSummary] = React.useState(false);
  const [isSummaryButton, setIsSummaryButton] = React.useState(false);

  const rightSound = new Audio(rightAnswer);
  const wrongSound = new Audio(wrongAnswer);

  const handleAnswerSelect = (answer) => {
    const nextUserAnswers = [...userAnswers];
    nextUserAnswers[currentQuestion] = answer;
    setUserAnswers(nextUserAnswers);
    if (answer === questions[currentQuestion].correctAnswer) {
      toast.success("Correct Answer! 😊", { autoClose: 1000 });
      rightSound.play();
    } else {
      toast.error("Wrong answer! 😢", { autoClose: 1000 });
      wrongSound.play();
    }
    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      } else {
        setShowSummary(true);
      }
    }, 1000);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowSummary(false);
    setIsSummaryButton(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-center text-3xl font-bold">
        React Basics and Hooks Quiz App
      </h1>
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
          />
          <ToastContainer />
        </>
      )}
      {isSummaryButton && (
        <button
          onClick={() => {
            setShowSummary(true);
            setIsSummaryButton(false);
          }}
        >
          Show Results Summary
        </button>
      )}
      <button className="mt-20">Next</button>
    </div>
  );
};

export default QuizApp;
