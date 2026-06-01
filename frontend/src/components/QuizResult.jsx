function QuizResult({ quiz }) {
  if (!quiz) {
    return null;
  }

  return (
    <div className="quiz-result">
      <h2>Oluşturulan Quiz</h2>

      {quiz.questions.map((questionItem, index) => (
        <div className="question-card" key={index}>
          <p>{questionItem.question}</p>

          <div className="options-list">
            {questionItem.options.map((option, optionIndex) => (
              <p key={optionIndex} className="option-item">
                {option}
              </p>
            ))}
          </div>

          <p>
            <strong>Doğru Cevap:</strong> {questionItem.correctAnswer}
          </p>
        </div>
      ))}
    </div>
  );
}

export default QuizResult;