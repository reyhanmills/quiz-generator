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