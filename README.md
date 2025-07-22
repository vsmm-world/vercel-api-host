# 🌐 NestJS + Prisma API on Vercel (Free Hosting Attempt)

A small experiment to deploy a **NestJS** backend with **Prisma** ORM (written in **TypeScript**) to **Vercel** using its free serverless hosting.  
This repository documents the setup, challenges, and solutions for running a full-featured backend API in a serverless environment like Vercel.

> ⚠️ Note: This project is an experiment. NestJS was not originally designed for serverless-first platforms like Vercel, but it's possible with a few smart configurations.

---

## 🔧 Tech Stack

- [NestJS](https://nestjs.com/) — Progressive Node.js framework
- [Prisma ORM](https://www.prisma.io/) — Type-safe database access
- [TypeScript](https://www.typescriptlang.org/) — Static typing
- [Vercel](https://vercel.com/) — Serverless deployment platform

---

## 🚀 Project Setup

### 1. Clone the repo

```bash
git clone https://github.com/your-username/nestjs-prisma-vercel.git
cd nestjs-prisma-vercel
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Environment setup

Create a `.env` file:

```env
DATABASE_URL="your-database-connection-string"
```

### 4. Database setup

```bash
npx prisma generate
npx prisma db push
```

### 5. Local development

```bash
yarn start:dev
```

---

## 📦 Deployment

### Vercel Configuration

Create `vercel.json`:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "src/main.ts",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "src/main.ts",
      "methods": ["GET", "POST", "PUT", "DELETE"]
    }
  ]
}
```

### Deploy to Vercel

```bash
vercel --prod
```

---

## ⚠️ Known Limitations

- Cold starts may cause initial delays
- Database connection pooling limitations
- Stateless nature requires careful session handling

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.
