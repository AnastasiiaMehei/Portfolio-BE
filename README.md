# Portfolio Backend

REST API for saving contact messages from the portfolio. Built with **NestJS**, **PostgreSQL**, and **Prisma ORM**.

## 🛠️ Technologies

| Technology | Purpose |
|-----------|---------|
| **NestJS** | Progressive Node.js framework for building server-side applications |
| **TypeScript** | Type-safe JavaScript for more reliable code |
| **Prisma ORM** | Modern database toolkit and migration management |
| **PostgreSQL** | Relational database for storing messages |
| **class-validator** | Input data validation (DTO) |
| **Docker** | Containerization for deployment in any environment |
| **Render** | Production hosting platform |

## 📋 Features

✅ **POST /messages** - Create a new message  
✅ **GET /messages** - Retrieve all messages  
✅ **Data validation** - Verify required fields (`name`, `email`, `message`)  
✅ **CORS enabled** - Allow requests from frontend  
✅ **Error handling** - Detailed error messages  
✅ **Prisma migrations** - Database schema management

## 🚀 Quick Start

### Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run dev server with hot-reload
npm run start:dev

# 3. API will be available at http://localhost:3000
```

### With Docker Compose

```bash
# Deploy the entire system (PostgreSQL + NestJS)
docker compose up --build

# API will be available at http://localhost:3000
```

## 📝 Request Examples

### Create a Message

```bash
curl -X POST http://localhost:3000/messages \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "How can I hire your services?"
  }'
```

### Get All Messages

```bash
curl http://localhost:3000/messages
```

## 📊 Project Structure

```
src/
├── messages/
│   ├── dto/
│   │   └── create-message.dto.ts    # Input validation
│   ├── messages.controller.ts       # HTTP handlers
│   ├── messages.service.ts          # Business logic
│   └── messages.module.ts           # Module configuration
├── prisma/
│   ├── prisma.service.ts            # Database connection
│   └── prisma.module.ts             # Prisma configuration
├── app.module.ts                    # Root module
└── main.ts                          # Application entry point
```

## 🗄️ Database Schema

**Message Table:**
- `id` - Unique identifier (INT, autoincrement)
- `name` - Sender's name (STRING)
- `email` - Sender's email (STRING)
- `message` - Message content (STRING)
- `createdAt` - Creation timestamp (TIMESTAMP, defaults to current time)

## ⚙️ Environment Variables (.env)

```env
DATABASE_URL="postgresql://user:password@host:port/database?schema=public"
PORT=3000
```

## 🔧 Available Commands

```bash
npm run start:dev      # Development with hot-reload
npm run build          # TypeScript compilation
npm run start:prod     # Production start
npm run prisma:generate # Generate Prisma Client
npm run prisma:migrate # Create database migration
npm run lint          # Run ESLint code checks
```

## 🌐 Deployment on Render

1. Connect your GitHub repository to Render
2. Add `DATABASE_URL` environment variable in Render dashboard
3. Dockerfile will automatically build and deploy the service
4. API will be available at `https://portfolio-be-6hdi.onrender.com/messages`

## 📞 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/messages` | Create a new message |
| GET | `/messages` | Get all messages |

## 🛡️ Error Handling

- **400 Bad Request** - Invalid input data
- **500 Internal Server Error** - Server error

All errors are returned in the following format:
```json
{
  "statusCode": 400,
  "message": "Error description"
}
```

## 📄 License

MIT
