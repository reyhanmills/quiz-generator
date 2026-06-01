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


function QuizForm({
    subject,
    setSubject,
    topic,
    setTopic,
    difficulty,
    setDifficulty,
    questionCount,
    setQuestionCount,
    handleSubmit,
    loading
}) {


    const topicOptions = topicsBySubject[subject] || [];
    return (
        <form className="quiz-form" onSubmit={handleSubmit}>
            <label>
                Ders
                <select
                    value={subject}
                    onChange={(event) => {
                        const selectedSubject = event.target.value;
                        setSubject(selectedSubject);
                        setTopic(topicsBySubject[selectedSubject][0]);
                    }}
                >
                    <option value="Türkçe">Türkçe</option>
                    <option value="Matematik">Matematik</option>
                    <option value="Fen Bilimleri">Fen Bilimleri</option>
                    <option value="İnkılap Tarihi">İnkılap Tarihi</option>
                    <option value="Din Kültürü">Din Kültürü</option>
                    <option value="İngilizce">İngilizce</option>
                </select>
            </label>

            <label>
                Konu
                <select
                    value={topic}
                    onChange={(event) => {
                        setTopic(event.target.value);
                    }}
                >
                    {topicOptions.map((topicOption) => (
                        <option key={topicOption} value={topicOption}>
                            {topicOption}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                Zorluk
                <select
                    value={difficulty}
                    onChange={(event) => {
                        setDifficulty(event.target.value);
                    }}
                >
                    <option value="kolay">Kolay</option>
                    <option value="orta">Orta</option>
                    <option value="Yeni Nesil">Yeni Nesil</option>
                </select>
            </label>

            <label>
                Soru Sayısı
                <input
                    type="number"
                    min="1"
                    max="10"
                    value={questionCount}
                    onChange={(event) => {
                        setQuestionCount(Number(event.target.value));
                    }}
                />
            </label>

            <button type="submit" disabled={loading}>
                {loading ? "Quiz Oluşturuluyor..." : "Quiz Oluştur"}
            </button>
        </form>
    );
}

export default QuizForm;