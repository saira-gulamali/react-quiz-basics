import React from "react";
import classNames from "classnames";

const Answer = ({ option, isCorrect, onAnswerSelect }) => {
  const [answered, setAnswered] = React.useState(false);
  console.log("123 ", answered);
  const buttonClasses = classNames(
    "button",
    { "hover:bg-sky-500": !answered },
    {
      "bg-green-500": answered && isCorrect,
      "bg-red-500": answered && !isCorrect,
      "bg-sky-700": !answered,
    },
    "text-white",
  );
  // const buttonClass = `button bg-${
  //   !answered ? "sky" : answered && isCorrect ? "green" : "red"
  // }-400 ${!answered ? "hover:bg-sky-500" : ""} text-white`;
  // console.log({ buttonClass });
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
