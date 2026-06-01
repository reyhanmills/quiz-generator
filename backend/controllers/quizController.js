const { createQuiz } = require("../services/quizService");

const testQuizRoute = (req, res) => {
  res.json({
    message: "Quiz route çalışıyor"
  });
};

const topicsBySubject = {
  Türkçe: [
    "Sözcükte ve Cümlede Anlam",
    "Paragraf",
    "Cümle Türleri",
    "Fiilimsiler",
    "Cümle Ögeleri",
    "Yazım Kuralları",
    "Noktalama İşaretleri",
    "Metin Türleri",
    "Sözel Mantık"
  ],
  Matematik: [
    "Çarpanlar ve Katlar",
    "Üslü İfadeler",
    "Kareköklü İfadeler",
    "Veri Analizi",
    "Basit Olayların Olma Olasılığı",
    "Cebirsel İfadeler ve Özdeşlikler",
    "Doğrusal Denklemler",
    "Eşitsizlikler",
    "Geometrik Cisimler",
    "Dönüşüm Geometrisi"
  ],
  "Fen Bilimleri": [
    "Mevsimler ve İklim",
    "DNA ve Genetik Kod",
    "Basınç",
    "Madde ve Endüstri",
    "Basit Makineler",
    "Enerji Dönüşümleri ve Çevre Bilimi",
    "Elektrik Yükleri ve Elektrik Enerjisi"
  ],
  "İnkılap Tarihi": [
    "Bir Kahraman Doğuyor",
    "Milli Uyanış: Bağımsızlık Yolunda Adımlar",
    "Milli Bir Destan: Ya İstiklal Ya Ölüm",
    "Çağdaş Türkiye Yolunda Adımlar",
    "Atatürkçülük",
    "Türk Dış Politikası"
  ],
  "Din Kültürü": [
    "Kader İnancı",
    "Zekât ve Sadaka",
    "Din ve Hayat",
    "Hz. Muhammed’in Örnekliği",
    "Kur'an-ı Kerim ve Özellikleri"
  ],
  İngilizce: [
    "Friendship",
    "Teen Life",
    "In the Kitchen",
    "On the Phone",
    "The Internet",
    "Adventures",
    "Tourism",
    "Chores",
    "Science",
    "Natural Forces"
  ]
};

const generateQuiz = async (req, res) => {
  try {
    const { subject, topic, difficulty, questionCount } = req.body;

    // Subject kontrolü
    if (!subject || typeof subject !== "string") {
      return res.status(400).json({
        error: "Subject is required"
      });
    }

    // Topic kontrolü
    if (!topic || typeof topic !== "string" || topic.trim() === "") {
      return res.status(400).json({
        error: "Topic is required and must be a non-empty text"
      });
    }

    // Topic gerçekten seçilen derse ait mi?
    const allowedTopics = topicsBySubject[subject];

    if (!allowedTopics) {
      return res.status(400).json({
        error: "Selected subject is not valid"
      });
    }

    if (!allowedTopics.includes(topic)) {
      return res.status(400).json({
        error: "Selected topic is not valid for this subject"
      });
    }

    // Zorluk kontrolü
    const allowedDifficulties = [
      "Kolay",
      "Orta",
      "Yeni Nesil"
    ];

    if (!difficulty || !allowedDifficulties.includes(difficulty)) {
      return res.status(400).json({
        error: "Difficulty must be one of: Kolay, Orta, Yeni Nesil"
      });
    }

    // Soru sayısı kontrolü
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

    const quiz = await createQuiz(
      subject,
      topic,
      difficulty,
      questionCount
    );

    res.json({
      message: "Quiz başarıyla oluşturuldu",
      quiz
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Something went wrong while generating quiz"
    });
  }
};

module.exports = {
  testQuizRoute,
  generateQuiz
};