// Gemini SDK'sını projeye dahil ediyoruz
const { GoogleGenAI } = require("@google/genai");

// Gemini istemcisini oluşturuyoruz
// API key .env dosyasından geliyor
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

// Quiz oluşturma fonksiyonu
const createQuiz = async (
  subject,
  topic,
  difficulty,
  questionCount
) => {

  // Yapay zekaya göndereceğimiz komut (prompt)
  const prompt = `
Sen bir LGS soru hazırlama uzmanısın.

Aşağıdaki bilgilere göre quiz oluştur:

Ders: ${subject}
Konu: ${topic}
Zorluk: ${difficulty}
Soru Sayısı: ${questionCount}

Kurallar:
- Sorular 5-8. sınıf / LGS düzeyinde olsun.
- Sorular 4 şıklı çoktan seçmeli olsun.
- Her sorunun yalnızca 1 doğru cevabı olsun.
- Sadece JSON döndür.
- Açıklama yazma.
- Markdown kullanma.
-Sorularda görsel, tablo, grafik, sayı doğrusu veya “aşağıdaki şekle göre” gibi ifadeler kullanma.
-Her soru yalnızca metin üzerinden tamamen anlaşılabilir olmalı.
-Eğer tablo/grafik/sayı doğrusu gerekiyorsa bunu metinle açıkça tarif et.

JSON formatı:

{
  "questions": [
    {
      "question": "Soru metni",
      "options": [
        "A seçeneği",
        "B seçeneği",
        "C seçeneği",
        "D seçeneği"
      ],
      "correctAnswer": "Doğru seçenek"
    }
  ]
}
`;

  // Gemini API'ye istek gönderiyoruz
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash", // Kullanılacak model
    contents: prompt // Gönderilecek prompt
  });

  // Gemini'nin döndürdüğü metni alıyoruz
  const text = response.text;

  // Bazen Gemini cevabı ```json ... ``` şeklinde döndürebiliyor
  // Bu yüzden kod bloklarını temizliyoruz
  const cleanedText = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  // JSON string'i gerçek JavaScript objesine çeviriyoruz
  const parsedQuiz = JSON.parse(cleanedText);

  // AI'dan gelen questions alanını alıyoruz
  const questions = parsedQuiz.questions;

  // Questions gerçekten bir dizi mi kontrol ediyoruz
  // Çünkü bazen AI yanlış format döndürebilir
  if (!Array.isArray(questions)) {
    throw new Error(
      "AI response does not contain a valid questions array"
    );
  }

  // Kullanıcının istediği soru sayısı ile
  // AI'ın döndürdüğü soru sayısı aynı mı kontrol ediyoruz
  // Örneğin kullanıcı 5 isterken AI 4 döndürürse hata veriyoruz
  if (questions.length !== questionCount) {
    throw new Error(
      "AI response question count does not match requested count"
    );
  }

  // Her soruyu tek tek kontrol ediyoruz
  questions.forEach((item, index) => {

    // Soru metni var mı kontrol ediyoruz
    // Boş soru gelmesini engelliyoruz
    if (!item.question || typeof item.question !== "string") {
      throw new Error(
        `Question ${index + 1} is missing question text`
      );
    }

    // Options alanı gerçekten bir array mi?
    // Ve tam olarak 4 seçenek var mı?
    if (
      !Array.isArray(item.options) ||
      item.options.length !== 4
    ) {
      throw new Error(
        `Question ${index + 1} must have exactly 4 options`
      );
    }

    // Doğru cevap alanı var mı?
    if (
      !item.correctAnswer ||
      typeof item.correctAnswer !== "string"
    ) {
      throw new Error(
        `Question ${index + 1} is missing correct answer`
      );
    }

    // Doğru cevap gerçekten seçeneklerin içinde mi?
    // Çünkü AI bazen seçeneklerde olmayan cevap verebilir
    if (!item.options.includes(item.correctAnswer)) {
      throw new Error(
        `Question ${index + 1} correct answer must be one of the options`
      );
    }
  });

  // Frontend'in beklediği formatta geri dönüyoruz
  return {
    subject,
    topic,
    difficulty,
    questionCount,
    questions: parsedQuiz.questions
  };
};

// Dışarıya açıyoruz
module.exports = {
  createQuiz
};