````markdown
# 🧾 Full Stack Projects by Ganesh Mane

Welcome! This repository contains **two production-ready full-stack applications** developed by **Ganesh Mane** using **Spring Boot**,
**React (Vite)**, **PostgreSQL**, **JWT Authentication**, and **AWS S3**.

---

## 🔐 Common Admin Credentials

| Email                        | Password     |
|-----------------------------|--------------|
| `mane.ganesh.pc@gmail.com`  | `Ganesh@26`  |

---

# 📦 Project 1: Billing App

### 🔧 Features

- User & Admin Role Authentication
- JWT Token-based login
- Product & Category CRUD
- Bill generation and invoice history
- AWS S3 Image Uploads
- Responsive UI with Tailwind CSS

### 🧠 Tech Stack

- **Backend**: Spring Boot, PostgreSQL, JavaMailSender, Twilio, AWS SDK
- **Frontend**: React (Vite), Tailwind, Axios, React Router

---

### 🚀 How to Run — Billing App

#### ✅ Backend Setup

**1. Prerequisites**
- Java 17+
- Maven
- PostgreSQL

**2. Create DB**

```sql
CREATE DATABASE billing_db;
````

**3. Configure `application.properties`**

```properties
# DB
spring.datasource.url=jdbc:postgresql://localhost:5432/billing_db
spring.datasource.username=your_db_user
spring.datasource.password=your_db_password

# JWT
jwt.secret=your_jwt_secret

# AWS S3
aws.access_key=your_aws_key
aws.secret_key=your_aws_secret
aws.region=ap-south-1
aws.bucket_name=your_bucket_name
```

**4. Run Backend**

```bash
cd billing-app/backend
mvn clean install
mvn spring-boot:run
```

#### ✅ Frontend Setup

```bash
cd billing-app/frontend
npm install
echo "VITE_API_URL=http://localhost:8080/api" > .env
npm run dev
```

---

# 🏨 Project 2: Hotel Room Booking App

### 🔧 Features

* Admin & User Login using JWT
* Room Listings CRUD (Admin)
* User can browse rooms
* Book Room & View Bookings
* Upload Room Images to AWS S3
* PostgreSQL Database

### 🧠 Tech Stack

* **Backend**: Spring Boot, PostgreSQL, AWS S3
* **Frontend**: React (Vite), Tailwind CSS

---

### 🚀 How to Run — Hotel Booking App

#### ✅ Backend Setup

**1. Prerequisites**

* Java 17+
* Maven
* PostgreSQL

**2. Create DB**

```sql
CREATE DATABASE hotel_booking;
```

**3. Configure `application.properties`**

```properties
# DB
spring.datasource.url=jdbc:postgresql://localhost:5432/hotel_booking
spring.datasource.username=your_db_user
spring.datasource.password=your_db_password

# JWT
jwt.secret=your_jwt_secret

# AWS S3
aws.access_key=your_aws_key
aws.secret_key=your_aws_secret
aws.region=ap-south-1
aws.bucket_name=your_bucket_name
```

**4. Run Backend**

```bash
cd hotel-app/backend
mvn clean install
mvn spring-boot:run
```

#### ✅ Frontend Setup

```bash
cd hotel-app/frontend
npm install
echo "VITE_API_URL=http://localhost:8080/api" > .env
npm run dev
```

---

## 🔐 Environment Variables to Set

Create a `.env` file for both apps (or set via terminal/cloud):

| Variable              | Description                    |
| --------------------- | ------------------------------ |
| `spring.datasource.*` | PostgreSQL credentials         |
| `jwt.secret`          | JWT Token Secret               |
| `aws.*`               | AWS S3 credentials and region  |

---

## 🧪 Sample API Endpoints

| App     | Endpoint             | Description                 |
| ------- | -------------------- | --------------------------- |
| Billing | `/api/auth/login`    | Email/password login        |
| Billing | `/api/products`      | Product CRUD                |
| Hotel   | `/api/auth/login`    | JWT Login                   |
| Hotel   | `/api/rooms`         | Room List, Add (Admin only) |
| Hotel   | `/api/bookings`      | Book and View History       |

---

## 📬 Contact

**Ganesh Mane**
🎓 BTech at SGGS Nanded
📧 [mane.ganesh.pc@gmail.com](mailto:mane.ganesh.pc@gmail.com)

📱 +91-8459476752

🔗 [LinkedIn](https://linkedin.com/in/ganeshrmane)

🐙 [GitHub](https://github.com/Ganesh-PC018)


---

> Built with ❤️ by Ganesh Mane | Full Stack Developer (Java + React)

```
