# Next-Commerce

**Next-Commerce** is a full-stack e-commerce application built with **Next.js, Express, MongoDB, Redis, and JWT authentication**.  
Currently, the **backend is fully implemented**, and the frontend will be integrated later using Next.js.

---

## 🚀 Features

### User Authentication
- Signup & login with **hashed passwords** using `bcryptjs`.
- JWT-based authentication (`jsonwebtoken`) for secure API access.
- Admin middleware to protect admin-only routes.
- Admin cannot be created via request (security measure).

### Product Management
- CRUD operations for products:
  - Create, Read, Update, Delete
- Admin-only restrictions for creating, updating, and deleting products.
- Supports multiple images per product.
- Inventory management and `createdAt` timestamp.

### Security
- Passwords are hashed with bcrypt before saving.
- JWT tokens for session management.
- Admin routes protected to prevent unauthorized access.

### Development Tools
- **Express.js** – API server
- **MongoDB** – Database
- **Next.js** – Frontend framework (to be integrated)
- **Redis** –  caching or session storage
- **Nodemon** – Auto-restart server during development
- **Dotenv** – Environment variable management

---
> ⚠️ Note: Docker integration will be implemented later.  
> Currently, backend runs locally using Node.js and MongoDB.


