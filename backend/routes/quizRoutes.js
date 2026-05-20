const express = require("express");
const router = express.Router();

const {
  testQuizRoute,
  generateQuiz
} = require("../controllers/quizController");

router.get("/test", testQuizRoute);
router.post("/generate", generateQuiz);

module.exports = router;