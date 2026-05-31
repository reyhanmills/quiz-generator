function QuizForm({
    topic,
    setTopic,
    difficulty,
    setDifficulty,
    questionCount,
    setQuestionCount,
    handleSubmit,
    loading
}) {
    return (
        <form className="quiz-form" onSubmit={handleSubmit}>
            <label>
                Konu
                <input
                    type="text"
                    placeholder="Örn: Fotosentez"
                    value={topic}
                    onChange={(event) => {
                        setTopic(event.target.value);
                    }}
                />
            </label>

            <label>
                Zorluk
                <select
                    value={difficulty}
                    onChange={(event) => {
                        setDifficulty(event.target.value);
                    }}
                >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </label>

            <label>
                Soru Sayısı
                <input
                    type="number"
                    min="1"
                    max="10"
                    value={questionCount}
                    onChange={(event) => {
                        setQuestionCount(Number(event.target.value));
                    }}
                />
            </label>

            <button type="submit" disabled={loading}>
                {loading ? "Quiz Oluşturuluyor..." : "Quiz Oluştur"}
            </button>
        </form>
    );
}
export default QuizForm;