import React from "react";
import QuizApp from "./components/QuizApp";
import LandingPage from "./components/LandingPage";

function App() {
  const [isStartQuiz, setIsStartQuiz] = React.useState(false);
  const [topic, setTopic] = React.useState("react basics");
  return (
    <>
      {isStartQuiz && <QuizApp topic={topic} setIsStartQuiz={setIsStartQuiz} />}

      {!isStartQuiz && (
        <LandingPage
          topic={topic}
          setTopic={setTopic}
          isStartQuiz={isStartQuiz}
          setIsStartQuiz={setIsStartQuiz}
        />
      )}
    </>
  );
}

export default App;
