import { useState } from "react";


function QuizResult({ quiz }) {
  const [showAnswers, setShowAnswers] = useState(false);
  if (!quiz) {
    return null;
  }

  return (
    <div className="quiz-result">
      <h2>Oluşturulan Quiz</h2>
      <button
        onClick={() => setShowAnswers(!showAnswers)}>
        {showAnswers
          ? "Cevapları Gizle"
          : "Cevapları Göster"}
      </button>

      {quiz.questions.map((questionItem, index) => (
        <div className="question-card" key={index}>
          <h3>Soru {index + 1}</h3>
          <p>{questionItem.question}</p>
          <div className="options-list">
            {questionItem.options.map((option, optionIndex) => (
              <p key={optionIndex} className="option-item">
                {String.fromCharCode(65 + optionIndex)}) {option}
              </p>
            ))}
          </div>

          {showAnswers && (
            <p>
              <strong>Doğru Cevap:</strong> {questionItem.correctAnswer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default QuizResult;