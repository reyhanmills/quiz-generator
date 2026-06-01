import { useState } from "react";
import "./App.css";
import QuizForm from "./components/QuizForm";
import QuizResult from "./components/QuizResult";

function App() {
  const [subject, setSubject] = useState("Fen Bilimleri");
  const [topic, setTopic] = useState("Mevsimler ve İklim");
  const [difficulty, setDifficulty] = useState("Orta");
  const [questionCount, setQuestionCount] = useState(5);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [quiz, setQuiz] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      setError("");

      const response = await fetch("http://localhost:5001/api/quiz/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          subject,
          topic,
          difficulty,
          questionCount
        })
      });

      const data = await response.json();

      console.log(data);
      setQuiz(data.quiz);

    } catch (err) {
      setError("Quiz oluşturulurken bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="app">
      <section className="quiz-container">
        <h1>LGS Quiz Generator</h1>

        <p>
          Ders, konu, zorluk ve soru sayısı seçerek LGS odaklı quiz oluştur.
        </p>

        <p>
          Seçilenler: {subject} - {topic} - {difficulty} - {questionCount}
        </p>

        {loading && <p>Quiz oluşturuluyor...</p>}

        {error && <p>{error}</p>}

        <div className="quiz-box">
          <QuizForm
            subject={subject}
            setSubject={setSubject}
            topic={topic}
            setTopic={setTopic}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            questionCount={questionCount}
            setQuestionCount={setQuestionCount}
            handleSubmit={handleSubmit}
            loading={loading}
          />

          <QuizResult quiz={quiz} />
        </div>
      </section>
    </main>
  );
}

export default App;