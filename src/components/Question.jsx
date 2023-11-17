import React from "react";
import Answer from "./Answer";
import { ToastContainer } from "react-toastify";

const Question = ({ question, onAnswerSelect, handleNext }) => {
  const [showExplanation, setShowExplanation] = React.useState(false);

  return (
    <>
      <div className="rounded bg-white p-6 shadow-md md:mt-16">
        <h2 className="mb-4 text-2xl font-semibold text-stone-700">
          {question.text}
        </h2>
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
      </div>
      <div className="mt-4 md:mt-20 flex justify-between">
        <button
          className="bg-sky-500 hover:bg-sky-300 text-white font-semibold py-2 px-4 rounded"
          onMouseEnter={() => setShowExplanation(true)}
          onMouseLeave={() => {
            setShowExplanation(false);
          }}
        >
          Explanation
        </button>
        <button
          className="bg-sky-500 hover:bg-sky-300 text-white font-semibold py-2 px-4 rounded"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
      {showExplanation && (
        <div className="mt-3 md:mt-8 rounded bg-white p-3 shadow-md">
          <p key={question.text}>{question.explanation}</p>
        </div>
      )}
    </>
  );
};

export default Question;
