import React from 'react';
import QuizApp from './components/QuizApp';

function App() {
  const [isStartQuiz, setIsStartQuiz] = React.useState(false);
  const [answerTime, setAnswerTime] = React.useState(1);
  return (
    <>
      {isStartQuiz && <QuizApp />}

      {!isStartQuiz && (
        <div className="container mx-auto p-4">
          <h1 className="mb-4 text-3xl font-bold">
            React Basics and Hooks Quiz App
          </h1>

          <br />
          <button
            className="button w-60 bg-sky-700 text-stone-200"
            onClick={() => setIsStartQuiz(true)}
          >
            Start the Quiz
          </button>
        </div>
      )}
    </>
  );
}

export default App;
