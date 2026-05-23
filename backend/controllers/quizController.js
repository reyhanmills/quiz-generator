const { createQuiz } = require("../services/quizService");

const testQuizRoute = (req, res) => {
  res.json({
    message: "Quiz route çalışıyor"
  });
};

const generateQuiz = async (req, res) => {
  try {
    const { topic, difficulty, questionCount } = req.body;

    if (!topic || typeof topic !== "string" || topic.trim() === "") {
      return res.status(400).json({
        error: "Topic is required and must be a non-empty text"
      });
    }

    const allowedDifficulties = ["easy", "medium", "hard"];

    if (!difficulty || !allowedDifficulties.includes(difficulty)) {
      return res.status(400).json({
        error: "Difficulty must be one of: easy, medium, hard"
      });
    }

    if (
      !questionCount ||
      typeof questionCount !== "number" ||
      questionCount < 1 ||
      questionCount > 10
    ) {
      return res.status(400).json({
        error: "Question count must be a number between 1 and 10"
      });
    }

    const quiz = await createQuiz(topic, difficulty, questionCount);

    res.json({
      message: "Quiz başarıyla oluşturuldu",
      quiz
    });
  } catch (error) {
    res.status(500).json({
      error: "Something went wrong while generating quiz"
    });
  }
};

module.exports = {
  testQuizRoute,
  generateQuiz
};