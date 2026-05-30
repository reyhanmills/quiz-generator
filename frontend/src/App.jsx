import "./App.css";
import { useState } from "react";

function App() {
  const [topic, setTopic] = useState("");
  return (
    <main className="app">
      <section className="quiz-container">
        <h1>Quiz Generator</h1>
        <p>Girilen konu: {topic}</p>
        <p>
          Konu, zorluk ve soru sayısı seçerek quiz oluşturabileceğin eğitim aracı.
        </p>

        <div className="quiz-box">
          <form className="quiz-form">
            <label>
              Konu
              <input
                type="text"
                placeholder="Örn: Fotosentez"
                value={topic}
                onChange={(event) => {
                  setTopic(event.target.value);

                }} />
            </label>

            <label>
              Zorluk
              <select>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </label>

            <label>
              Soru Sayısı
              <input type="number" min="1" max="10" placeholder="5" />
            </label>

            <button type="submit">Quiz Oluştur</button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default App;