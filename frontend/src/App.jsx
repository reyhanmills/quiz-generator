import "./App.css";
import { useState } from "react";
import QuizForm from "./components/QuizForm";
import QuizResult from "./components/QuizResult";

function App() {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [questionCount, setQuestionCount] = useState(5);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [quiz, setQuiz] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      setError("");


      const response = await fetch(
        "http://localhost:5001/api/quiz/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            topic,
            difficulty,
            questionCount
          })
        }
      );

      const data = await response.json();


    } catch (err) {
      setError("Quiz oluşturulurken bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="app">
      <section className="quiz-container">
        <h1>Quiz Generator</h1>
        <p>Girilen konu: {topic}</p>
        <p>
          Seçilenler: {topic} - {difficulty} - {questionCount}
        </p>
        {loading && <p>Quiz oluşturuluyor...</p>}

        {error && <p>{error}</p>}

        <div className="quiz-box">
          <QuizForm
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