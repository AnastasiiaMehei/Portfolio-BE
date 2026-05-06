# Portfolio-BE

NestJS backend for saving user messages via Prisma and PostgreSQL.

## Features

- `POST /messages` endpoint
- User payload: `name`, `email`, `message`
- Validation with `class-validator`
- Prisma ORM for PostgreSQL
- Docker Compose ready

## Run locally

1. Copy `.env.example` to `.env` and adjust if needed.
2. Start the database and backend:

```bash
docker compose up --build
```

3. The API will be available at `https://portfolio-be-6hdi.onrender.com/messages`.

## Sample request body

```json
{
  "name": "Anna",
  "email": "anna@example.com",
  "message": "Hello, I would like to ask about your services."
}
```
