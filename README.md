# Akış Bilinci Uygulaması

Bu proje Next.js 13 tabanlıdır ve `app` dizinini kullanır. Kullanıcılar kategori ve metin girerek içerik ekler. Veriler `/api/entries` API'si üzerinden SQLite veritabanına Prisma aracılığıyla kaydedilir. Kayıtlar ana sayfada listelenir.

## Geliştirme

1. `npm install` komutuyla bağımlılıkları kurun.
2. `npx prisma migrate dev --name init` komutu ile SQLite veritabanını oluşturun.
3. `npm run dev` ile uygulamayı başlatın.
