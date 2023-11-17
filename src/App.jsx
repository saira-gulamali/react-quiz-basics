import React from "react";
import QuizApp from "./components/QuizApp";

function App() {
  const [isStartQuiz, setIsStartQuiz] = React.useState(false);

  return (
    <>
      {isStartQuiz && <QuizApp />}

      {!isStartQuiz && (
        <div className="container mx-auto p-4">
          <h1 className="font-sans m-4 text-5xl p-6 font-bold text-center">
            React Basics <br /> and
            <br /> Hooks Quiz App
          </h1>

          <br />
          <div className="flex justify-center ">
            <button
              className="mt-6 bg-sky-500 hover:bg-sky-300 text-white font-semibold py-2 px-4 rounded"
              onClick={() => setIsStartQuiz(true)}
            >
              Start the Quiz
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
