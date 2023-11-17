import React from "react";
import classNames from "classnames";

const Answer = ({ option, isCorrect, onAnswerSelect }) => {
  const [answered, setAnswered] = React.useState(false);

  const buttonClasses = classNames(
    "button",
    { "hover:bg-sky-500": !answered },
    {
      "bg-green-500": answered && isCorrect,
      "bg-red-500": answered && !isCorrect,
      "bg-sky-700": !answered,
    },
    "text-white",
    "font-semibold",
    "text-lg",
    "rounded-md",
    "p-1",
    "md:m-1",
  );

  return (
    <button
      className={buttonClasses}
      onClick={() => {
        onAnswerSelect(option);
        setAnswered(true);
      }}
    >
      {option}
    </button>
  );
};

export default Answer;
