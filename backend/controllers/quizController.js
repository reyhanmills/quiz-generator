const { createQuiz } = require("../services/quizService");

const testQuizRoute = (req, res) => {
  res.json({
    message: "Quiz route çalışıyor"
  });
};

const generateQuiz = (req, res) => {
  try {
    const { topic, difficulty, questionCount } = req.body;

    if (!topic) {
      return res.status(400).json({
        error: "Topic is required"
      });
    }

    if (!difficulty) {
      return res.status(400).json({
        error: "Difficulty is required"
      });
    }

    if (!questionCount) {
      return res.status(400).json({
        error: "Question count is required"
      });
    }

    const quiz = createQuiz(topic, difficulty, questionCount);

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