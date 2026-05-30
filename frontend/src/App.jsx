import "./App.css";
import { useState } from "react";

function App() {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [questionCount, setQuestionCount] = useState(5);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:5001/api/quiz/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        topic,
        difficulty,
        questionCount
      })
    });

    const data = await response.json();

    console.log(data);
  };

  return (
    <main className="app">
      <section className="quiz-container">
        <h1>Quiz Generator</h1>
        <p>Girilen konu: {topic}</p>
        <p>
          Seçilenler: {topic} - {difficulty} - {questionCount}
        </p>

        <div className="quiz-box">
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
                placeholder="5"
                value={questionCount}
                onChange={(event) => {
                  setQuestionCount(Number(event.target.value));
                }}
              />
            </label>

            <button type="submit">Quiz Oluştur</button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default App;