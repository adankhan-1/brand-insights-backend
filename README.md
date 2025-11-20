# Brand Insights Backend

This is the backend service for Brand Insights built on Node.js with Express and PostgreSQL. Sequelize ORM is used for database interactions including migrations.

---

## Prerequisites

- Node.js (v16+ recommended)
- npm (comes with Node.js)
- PostgreSQL server installed and running
- Properly configured database user with permissions for migrations

---

## Getting Started Locally

1. **Clone the repository**

git clone <repo-url>

2. **Install dependencies**

npm install

3. **Set up environment variables**

Create a `.env` file in the project root with the following variables:

PORT
DATABASE_URL
DB_USERNAME
DB_PASSWORD
DB_NAME
DB_HOST

4. **Create the database**

Use psql or any tool to create the database.

5. **Run database migrations**

Apply the Sequelize migrations to create tables and schema:

npx sequelize-cli db:migrate

6. **Start the backend server**

npm start

