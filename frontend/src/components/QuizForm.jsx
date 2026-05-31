function QuizForm({
    subject,
    setSubject,
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
                Ders
                <select
                    value={subject}
                    onChange={(event) => {
                        setSubject(event.target.value);
                    }}
                >
                    <option value="Türkçe">Türkçe</option>
                    <option value="Matematik">Matematik</option>
                    <option value="Fen Bilimleri">Fen Bilimleri</option>
                    <option value="İnkılap Tarihi">İnkılap Tarihi</option>
                    <option value="Din Kültürü">Din Kültürü</option>
                    <option value="İngilizce">İngilizce</option>
                </select>
            </label>

            <label>
                Konu
                <input
                    type="text"
                    placeholder="Örn: Fotosentez, Paragraf, Denklem..."
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
                    <option value="kolay">Kolay</option>
                    <option value="orta">Orta</option>
                    <option value="Yeni Nesil">Yeni Nesil</option>
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