import React from "react";
import { ToastContainer } from "react-toastify";

const ResultSummary = ({ userAnswers, questions, restartQuiz }) => {
  const calculateScore = () => {
    let score = 0;
    userAnswers.forEach((userAnswer, index) => {
      if (userAnswer === questions[index].correctAnswer) {
        score += 1;
      }
    });
    return score;
  };

  const getAnswerStatus = (index) => {
    return userAnswers[index] === questions[index].correctAnswer
      ? "correct bg-white rounded-md p-3 m-4"
      : "incorrect bg-white rounded-md p-3 m-4";
  };

  return (
    <div className="container mx-auto mt-4 md:mt-10 p-4">
      <h2 className="mb-2 md:mb-4 text-2xl font-bold text-stone-700 text-center">
        Quiz Results
      </h2>
      <p className="mb-3 text-xl font-bold text-stone-700 text-center">
        Your score: {calculateScore()} out of {questions.length}
      </p>
      <div>
        {questions.map((question, index) => (
          <div key={index} className={getAnswerStatus(index)}>
            <p className="  mt-2 md:mt-4 font-sans text-lg">
              <strong>
                Question {index + 1}: {question.text}
              </strong>
            </p>
            <p>Your Answer: {userAnswers[index]}</p>
            <p>Correct Answer: {question.correctAnswer}</p>
          </div>
        ))}
      </div>
      <button
        className="mt-6 bg-sky-500 hover:bg-sky-300 text-white font-semibold py-2 px-4 rounded"
        onClick={restartQuiz}
      >
        Restart Quiz
      </button>
      <ToastContainer />
    </div>
  );
};

export default ResultSummary;
