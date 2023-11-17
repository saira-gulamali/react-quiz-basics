import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-2 bg-sky-700">
      <div
        className="h-full bg-green-500 transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
