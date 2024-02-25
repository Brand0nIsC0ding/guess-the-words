import React from 'react';
import '../styles/Game.css';

const Heart = ({ attempt, maxAttempt }) => {
  const attemptToHeart = (attempt, maxAttempt) => {
    let hearts = [];
    for (let i = 1; i <= maxAttempt; i++) {
      if (i <= attempt) {
        hearts.push(0);
      } else {
        hearts.push(1);
      }
    }
    return hearts;
  };

  return (
    <div id="life">
      {attemptToHeart(attempt, maxAttempt).map((value, key) => (
        <span
          key={"heart_" + key}
          className={"heart " + (value === 1 ? "full" : "empty")}
        ></span>
      ))}
    </div>
  );
};

export default Heart;
