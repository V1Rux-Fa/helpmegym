# Gym Tracker – Next.js

A fitness tracking app built with **Next.js**, **Prisma**, and **PostgreSQL**.  
Users can browse exercises and save their reps and other workout data.

The database runs locally using **Docker**.

---

## Prerequisites

- Node.js 20+
- npm
- Docker

---

## Setup & Run

### 1. Install dependencies

```bash
npm install
```

### 2. Install dependencies

Create a .env file in the project root (same level as package.json) and add:

POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=localhost
POSTGRES_PORT=5432

PORT=8000

DATABASE_URL=postgresql://postgres:postgres@localhost:5433/localhost

### 3. Start the database with Docker

Run the following command to start the PostgreSQL container:

```bash
docker-compose up
```

### 4. Run database setup

Generate the Prisma client and apply migrations:

```bash
npm run generate
npm run migrate
```

### 5. Populate the database

Insert data into your local database

```bash
npm run populate
```

### 6. Start the Next.js app

```bash
npm run dev
```

Open http://localhost:3000 to see your app.
