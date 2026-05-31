function QuizResult({ quiz }) {
    if (!quiz) {
        return null;
    }

    return (
        <div className="quiz-result">
            <h2>Oluşturulan Quiz</h2>

            {quiz.questions.map((questionItem, index) => (
                <div className="question-card" key={index}>
                    <h3>{questionItem.question}</h3>

                    <ul>
                        {questionItem.options.map((option, optionIndex) => (
                            <li key={optionIndex}>{option}</li>
                        ))}
                    </ul>

                    <p>
                        <strong>Doğru Cevap:</strong> {questionItem.correctAnswer}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default QuizResult;