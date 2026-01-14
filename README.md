# GigFlow – A Mini Freelance Marketplace Platform

GigFlow is a full-stack mini freelance marketplace where **Clients can post jobs (Gigs)** and **Freelancers can apply to them by submitting Bids**. The platform demonstrates secure authentication, role-based interactions, complex database relationships, and real-world hiring logic.

---

## 📌 Project Overview

GigFlow allows users to seamlessly switch roles:

* A user can **post gigs as a Client**
* The same user can **apply for gigs as a Freelancer**

The core objective is to simulate a real freelance hiring workflow including bidding, reviewing applications, and hiring one freelancer per gig.

---

## 🛠️ Tech Stack

### Frontend

* **React.js** (Vite)
* **Tailwind CSS**
* **Redux Toolkit / Context API** (State Management)

### Backend

* **Node.js**
* **Express.js**

### Database

* **MongoDB** with **Mongoose**

### Authentication & Security

* **JWT (JSON Web Tokens)**
* **HttpOnly Cookies** for secure session handling

### (Optional / Bonus)

* **Socket.io** – Real-time notifications
* **MongoDB Transactions** – Atomic hiring logic

---

## ✨ Core Features

### A. User Authentication

* Secure **User Registration & Login**
* JWT-based authentication with HttpOnly cookies
* No fixed roles: users can act as both Client and Freelancer

---

### B. Gig Management (CRUD)

* **Browse Gigs**: View all open gigs
* **Search & Filter**: Search gigs by title
* **Post a Gig**: Logged-in users can create a gig with:

  * Title
  * Description
  * Budget

---

### C. Hiring Logic (Crucial Feature)

1. **Bidding**

   * Freelancers submit a bid with a message and proposed price

2. **Bid Review**

   * The client can view all bids on their posted gig

3. **Hiring Process**

   * Client selects one bid and clicks **Hire**

#### 🔒 Automatic System Logic

* Gig status changes from **Open → Assigned**
* Selected bid status changes to **Hired**
* All other bids for the same gig are automatically marked as **Rejected**

---

## 🔗 API Architecture

### Authentication

| Method | Endpoint           | Description                   |
| ------ | ------------------ | ----------------------------- |
| POST   | /api/auth/register | Register a new user           |
| POST   | /api/auth/login    | Login and set HttpOnly cookie |

### Gigs

| Method | Endpoint  | Description                       |
| ------ | --------- | --------------------------------- |
| GET    | /api/gigs | Fetch all open gigs (with search) |
| POST   | /api/gigs | Create a new gig                  |

### Bids

| Method | Endpoint         | Description                         |
| ------ | ---------------- | ----------------------------------- |
| POST   | /api/bids        | Submit a bid for a gig              |
| GET    | /api/bids/:gigId | Get all bids for a gig (Owner only) |

### Hiring

| Method | Endpoint              | Description                       |
| ------ | --------------------- | --------------------------------- |
| PATCH  | /api/bids/:bidId/hire | Hire a freelancer (Atomic update) |

---

## 🗄️ Database Schema

### User

* name
* email
* password

### Gig

* title
* description
* budget
* ownerId
* status (open / assigned)

### Bid

* gigId
* freelancerId
* message
* status (pending / hired / rejected)

---

## ⚙️ Environment Setup

Create a `.env` file using `.env.example` and add:

```
MONGO_URI=
JWT_SECRET=
CLIENT_URL=
```

---
## 📦 Installation & Run

```bash
# Clone the repository
git clone https://github.com/your-username/GigFlow.git

# Backend setup
cd backend
npm install
npm run dev

# Frontend setup
cd frontend
npm install
npm run dev
```
