import { useState } from "react";

const questions = [
  {
    question: "Món gì ngon nhất Nha Trang?",
    answers: [
      { text: "Bún cá", correct: true },
      { text: "Phở", correct: false },
      { text: "Bún bò", correct: false },
    ],
  },
  {
    question: "Nha Trang thuộc tỉnh nào?",
    answers: [
      { text: "Khánh Hòa", correct: true },
      { text: "Phú Yên", correct: false },
      { text: "Đà Nẵng", correct: false },
    ],
  },
];

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer, index) => {
    if (selected !== null) return; // đã chọn rồi thì không cho chọn lại

    setSelected(index);
    if (answer.correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz">
      <h2>Quiz Page</h2>

      {showResult ? (
        <h3>
          🎉 Bạn đúng {score} / {questions.length} câu
        </h3>
      ) : (
        <>
          <h4>{questions[current].question}</h4>

          {questions[current].answers.map((ans, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(ans, index)}
              style={{
                display: "block",
                margin: "10px 0",
                background:
                  selected === index
                    ? ans.correct
                      ? "#4caf50"
                      : "#f44336"
                    : "#5c6bc0",
              }}
            >
              {ans.text}
            </button>
          ))}

          <button onClick={nextQuestion} disabled={selected === null}>
            Next
          </button>
        </>
      )}
    </div>
  );
}

export default Quiz;
