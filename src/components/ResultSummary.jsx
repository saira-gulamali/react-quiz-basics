import React from 'react';
import { ToastContainer } from 'react-toastify';

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
      ? 'correct'
      : 'incorrect';
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="mb-4 text-2xl font-bold">Quiz Results</h2>
      <p className="mb-3 text-xl font-bold">
        Your score: {calculateScore()} out of {questions.length}
      </p>
      <div>
        {questions.map((question, index) => (
          <div key={index} className={getAnswerStatus(index)}>
            <p className="font-sans text-base">
              <strong>
                Question {index + 1}: {question.text}
              </strong>
            </p>
            <p>Your Answer: {userAnswers[index]}</p>
            <p>Correct Answer: {question.correctAnswer}</p>
          </div>
        ))}
      </div>
      <button onClick={restartQuiz}>Restart Quiz</button>
      <ToastContainer />
    </div>
  );
};

export default ResultSummary;
