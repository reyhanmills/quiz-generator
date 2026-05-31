# Quiz Generator

Quiz Generator, kullanıcıların belirledikleri konu, zorluk seviyesi ve soru sayısına göre quiz oluşturmasını sağlayan full-stack bir web uygulamasıdır.

Proje, frontend ve backend arasındaki API iletişimini, form yönetimini ve dinamik quiz oluşturma süreçlerini öğrenmek amacıyla geliştirilmektedir.

---

## Özellikler

* Konu seçerek quiz oluşturma
* Zorluk seviyesi belirleme (Easy / Medium / Hard)
* Soru sayısı seçimi
* React tabanlı kullanıcı arayüzü
* Express.js tabanlı REST API
* Frontend - Backend API entegrasyonu
* Dinamik quiz oluşturma akışı
* Loading ve hata yönetimi

---

## Kullanılan Teknolojiler

### Frontend

* React
* Vite
* JavaScript
* CSS

### Backend

* Node.js
* Express.js

### Geliştirme Araçları

* Git
* GitHub
* Postman / Curl

---

## Proje Yapısı

```text
quiz-generator
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── QuizForm.jsx
│   │   │   └── QuizResult.jsx
│   │   ├── App.jsx
│   │   └── App.css
│
├── backend
│   ├── controllers
│   ├── services
│   ├── routes
│   └── server.js
│
└── README.md
```

---

## Mevcut Durum

Tamamlanan geliştirmeler:

* Express server kurulumu
* Route yapısı
* GET ve POST endpointleri
* Input validation
* Controller - Service mimarisi
* Error handling
* React form yapısı
* State yönetimi
* Controlled components
* Submit event yönetimi
* API çağrıları (fetch)
* Quiz verisinin ekranda gösterilmesi
* Component ayrımı
* Loading ve error state yönetimi

---

## Planlanan Özellikler

* PDF olarak quiz indirme
* Cevap anahtarlı / cevapsız çıktı alma
* Yapay zeka destekli soru üretimi
* Farklı soru tipleri
* Kullanıcı hesap sistemi
* Quiz geçmişi ve sonuç takibi
* Gelişmiş kullanıcı arayüzü
* Öğretmen odaklı quiz yönetim araçları

---

## Kurulum

### Backend

```bash
cd backend
npm install
npm run dev
```

Backend varsayılan olarak:

```text
http://localhost:5001
```

adresinde çalışır.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend varsayılan olarak:

```text
http://localhost:5173
```

adresinde çalışır.

---

## Öğrenme Hedefleri

Bu proje geliştirilirken aşağıdaki konular üzerine odaklanılmaktadır:

* REST API geliştirme
* React State Management
* Component Architecture
* Frontend - Backend iletişimi
* Form yönetimi
* Hata yönetimi
* Full-Stack uygulama geliştirme

```
```

