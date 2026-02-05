import { useState } from "react";

function Quiz() {
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const checkAnswer = (isCorrect) => {
    if (!answered && isCorrect) {
      setScore(score + 1);
    }
    setAnswered(true);
  };

  return (
    <div>
      <h2>Quiz Page</h2>
      <p>mon' gi ngon nhat' nha trang?</p>

      <button onClick={() => checkAnswer(true)}>Bun ca'</button>
      <button onClick={() => checkAnswer(false)}>pho?</button>

      <p>Score: {score}</p>
    </div>
  );
}

export default Quiz;
