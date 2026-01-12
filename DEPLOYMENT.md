# Інструкція з деплою Trexim на trexim.ai

## Рекомендовані платформи для статичного хостингу

### 1. Vercel (Рекомендовано) ⭐
Найкраща платформа для Next.js

**Переваги:**
- Автоматична інтеграція з Next.js
- Безкоштовний SSL
- Автоматичний деплой при push до GitHub
- CDN по всьому світу
- Підтримка динамічних маршрутів

**Кроки:**
1. Зареєструйтесь на [vercel.com](https://vercel.com)
2. Підключіть GitHub репозиторій
3. Vercel автоматично визначить Next.js проект
4. Додайте custom domain `trexim.ai` в налаштуваннях
5. Налаштуйте DNS:
   ```
   A record:  @ → 76.76.21.21
   CNAME:     www → cname.vercel-dns.com
   ```

### 2. Netlify
Альтернатива Vercel

**Кроки:**
1. Зареєструйтесь на [netlify.com](https://netlify.com)
2. New site from Git → GitHub
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Додайте custom domain `trexim.ai`

### 3. Cloudflare Pages
Швидкий CDN

**Кроки:**
1. Зареєструйтесь на [pages.cloudflare.com](https://pages.cloudflare.com)
2. Create a project → Connect to Git
3. Build settings:
   - Framework preset: Next.js
   - Build command: `npm run build`
4. Додайте domain через Cloudflare DNS

## Налаштування проекту

### Підготовка до деплою

1. **Переконайтесь, що все працює локально:**
   ```bash
   npm run build
   npm start
   ```

2. **Commit всі зміни:**
   ```bash
   git add .
   git commit -m "Prepare for production deployment"
   git push origin main
   ```

3. **Перевірте environment variables:**
   - Якщо в майбутньому додасте API ключі, додайте їх в налаштуваннях платформи

## Зміни для production

### Що вже налаштовано:
✅ `images.unoptimized: true` - для статичних зображень
✅ `trailingSlash: true` - для правильних URL
✅ Адмін-панель відключена (потребує серверних API routes)
✅ Блог використовує статичні дані з локалізації

### Що потрібно знати:

**Адмін-панель:**
- `/admin` зараз недоступна в статичній версії
- Для роботи адмін-панелі потрібен окремий серверний інстанс Next.js
- Варіанти:
  1. Розгорнути окрему версію з адмін-панеллю на subdomain (admin.trexim.ai)
  2. Використовувати headless CMS (Strapi, Contentful)
  3. Редагувати JSON файли локалізації напряму в GitHub

**API Routes:**
- Всі файли в `/api` не працюють в статичному експорті
- Функції завантаження зображень, збереження блогу потребують backend
- Рішення: використовувати serverless functions або окремий backend

## DNS налаштування для trexim.ai

Після вибору платформи, налаштуйте DNS записи:

### Для Vercel:
```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

### Для Netlify:
```
Type    Name    Value
A       @       75.2.60.5
CNAME   www     [your-site].netlify.app
```

### Для Cloudflare Pages:
```
Type    Name    Value
CNAME   @       [your-project].pages.dev
CNAME   www     [your-project].pages.dev
```

## Рекомендації

1. **Використовуйте Vercel** - найкращий вибір для Next.js
2. **Налаштуйте automatic deployments** - кожен push в main автоматично деплоїться
3. **Додайте preview deployments** - кожен PR отримує тестове посилання
4. **Налаштуйте analytics** - Vercel має вбудовану аналітику
5. **Додайте мета-теги** для SEO (Open Graph, Twitter Cards)

## Production checklist

- [ ] Протестувати білд локально (`npm run build && npm start`)
- [ ] Commit і push всіх змін
- [ ] Створити репозиторій на GitHub (якщо ще не створено)
- [ ] Зареєструватись на Vercel/Netlify
- [ ] Підключити GitHub репозиторій
- [ ] Налаштувати custom domain trexim.ai
- [ ] Перевірити SSL сертифікат
- [ ] Додати favicon та мета-теги
- [ ] Налаштувати Google Analytics (опціонально)
- [ ] Протестувати всі сторінки на production

## Подальші покращення

### Для повнофункціональної адмін-панелі:

1. **Варіант 1: Окремий серверний інстанс**
   - Розгорнути на Vercel з serverless functions
   - Використовувати Supabase/PostgreSQL для даних
   - Subdomain: admin.trexim.ai

2. **Варіант 2: Headless CMS**
   - Strapi, Contentful, Sanity
   - API для управління контентом
   - Webhook для автоматичного rebuild

3. **Варіант 3: GitHub як CMS**
   - Редагувати JSON файли через GitHub UI
   - GitHub Actions для автоматичного деплою
   - Найпростіший варіант для невеликих змін

## Контакти для допомоги

Якщо виникнуть питання:
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Vercel Support: support@vercel.com
