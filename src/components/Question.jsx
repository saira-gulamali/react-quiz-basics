import React from "react";
import Answer from "./Answer";
import { ToastContainer, toast } from "react-toastify";

const Question = ({ question, onAnswerSelect }) => {
  return (
    <div className="rounded bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">{question.text}</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {question.options.map((option) => (
          <Answer
            key={option}
            option={option}
            isCorrect={option === question.correctAnswer}
            onAnswerSelect={() => onAnswerSelect(option)}
          />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Question;
