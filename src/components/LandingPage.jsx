import React from "react";

const LandingPage = ({ topic, setTopic, setIsStartQuiz }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="font-sans m-4 text-5xl p-6 font-bold text-center">
        React Basics <br /> and
        <br /> Hooks Quiz App
      </h1>

      <br />

      <div className="flex flex-col justify-center items-center">
        <div>
          <label className="px-4 py-2" htmlFor="topics">
            Select a topic
          </label>{" "}
          <select
            className="px-4 py-2"
            name="topics"
            id="topics"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          >
            <option value="react basics">React Basics</option>
            <option value="basic hooks">Basic Hooks</option>
            <option value="advanced hooks">Advanced Hooks</option>
          </select>
        </div>
        <div>
          <button
            className="mt-6 bg-sky-500 hover:bg-sky-300 text-white font-semibold py-2 px-4 rounded"
            onClick={() => setIsStartQuiz(true)}
          >
            Start the Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
