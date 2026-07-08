# Yazan Adanouf — Portfolio

Next.js (App Router) + Tailwind CSS v4.

## التشغيل محلياً

```bash
npm install
npm run dev
```

الموقع بيفتح على http://localhost:3000

## وين تعدّل

| الشي | الملف |
|---|---|
| كل النصوص والروابط | `data/content.js` |
| الصفحة والأقسام | `app/page.jsx` |
| محاكاة الـ KYC | `components/KycPipeline.jsx` |
| بطاقة الـ case study | `components/CaseStudy.jsx` |
| الخطوط والألوان العامة | `app/layout.jsx` + `app/globals.css` |

**قبل النشر:**
1. بـ `data/content.js` بدّل `USERNAME` بروابط GitHub وLinkedIn الحقيقية
2. حط ملف `Yazan_Adanouf_CV.pdf` بمجلد `public/`

## النشر على Cloudflare Workers

نفس الـ setup اللي بتعرفه:

```bash
npm install @opennextjs/cloudflare wrangler --save-dev
npx opennextjs-cloudflare build
npx opennextjs-cloudflare deploy
```

(بدك تضيف `wrangler.jsonc` حسب إعداداتك المعتادة)
