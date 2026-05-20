const createQuiz = (topic, difficulty, questionCount) => {
  return {
    topic,
    difficulty,
    questionCount,
    questions: [
      {
        question: `${topic} konusu ile ilgili örnek soru 1`,
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        correctAnswer: "A seçeneği"
      },
      {
        question: `${topic} konusu ile ilgili örnek soru 2`,
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        correctAnswer: "B seçeneği"
      }
    ]
  };
};

module.exports = {
  createQuiz
};