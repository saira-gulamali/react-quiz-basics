import React from "react";
import classNames from "classnames";

const Answer = ({
  option,
  isCorrect,
  onAnswerSelect,
  setIsNextEnabled,
  isNextEnabled,
}) => {
  const [answered, setAnswered] = React.useState(false);

  const buttonClasses = classNames(
    "button",
    { "disabled:bg-stone-300": !answered && isNextEnabled },
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
      disabled={isNextEnabled}
      className={buttonClasses}
      onClick={() => {
        onAnswerSelect(option);
        setAnswered(true);
        setIsNextEnabled(true);
      }}
    >
      {option}
    </button>
  );
};

export default Answer;
