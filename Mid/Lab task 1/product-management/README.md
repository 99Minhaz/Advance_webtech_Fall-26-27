# Product & Employee Management API (NestJS + TypeORM + PostgreSQL)

## Student Details
| SL | Name | ID | Section |
|----|------|----|---------|
| 1 | Minhazul hassan| 23-53049-3 | E |

## Database setup
1. Install PostgreSQL and make sure it is running.
2. Create a database:
   ```sql
   CREATE DATABASE shop_db;
   ```
3. Copy `.env.example` to `.env` and put your real DB username/password.
   Tables are created automatically on first run (`synchronize: true`).

## Installation & run
```bash
npm install
npm run start:dev
```
Server runs at `http://localhost:3000`.

## Endpoints
### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /products | Create a product |
| GET | /products | Get all products |
| GET | /products/:id | Get product by ID |
| PATCH | /products/:id | Update product |
| DELETE | /products/:id | Delete product |

Sample body: `{ "name": "Rice 5kg", "category": "Grocery", "price": 450.5, "quantity": 20 }`

### Employees
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /employees | Create an employee |
| GET | /employees | Get all employees |
| GET | /employees/:id | Get employee by ID |
| PATCH | /employees/:id | Update employee |
| DELETE | /employees/:id | Delete employee |

Sample body: `{ "name": "Karim Uddin", "email": "karim@mail.com", "phone": "01700000000", "password": "dummy123", "age": 30, "yearsOfWorking": 5 }`

## Screenshots
See the `screenshots/` folder (01-create.png … 07-confirm-delete.png).
