# Schedule Tracker 📅

A containerized 3-tier schedule management application built with React, Node.js, Express and PostgreSQL.

## Technology Stack

| Tier | Technology |
|---|---|
| Frontend | React, Vite, Nginx |
| Backend | Node.js, Express |
| Database | PostgreSQL |
| Containerization | Docker, Docker Compose |
| Orchestration | Kubernetes (planned) |
| CI/CD | GitHub Actions, ArgoCD (planned) |

## Architecture

Browser
   |
   v
Frontend (React + Nginx)
   |
   v
Backend (Node.js + Express)
   |
   v
Database (PostgreSQL)

Each tier runs in a separate Docker container.

## Features

- Create schedules
- View schedules
- Update schedules
- Delete schedules
- Set task priorities and categories
- Track task completion

## Project Structure

schedule-tracker/
├── frontend/
├── backend/
├── database/
├── docker-compose.yml
├── .gitignore
└── README.md

## Running with Docker

Requirements:
- Docker
- Docker Compose

Build and start:

```bash
docker compose up -d --build
```

Open the application:

http://localhost:8080

View running containers:

```bash
docker compose ps
```

View logs:

```bash
docker compose logs -f
```

Stop containers:

```bash
docker compose down
```

Stop containers and delete database volumes:

```bash
docker compose down -v
```

Warning: The last command permanently deletes the database's stored data.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/schedules | Get all schedules |
| GET | /api/schedules/:id | Get a schedule |
| POST | /api/schedules | Create a schedule |
| PUT | /api/schedules/:id | Update a schedule |
| DELETE | /api/schedules/:id | Delete a schedule |

## Deployment Roadmap

- [x] Frontend structure
- [x] Backend structure
- [x] Database schema
- [x] Dockerfiles
- [x] Docker Compose configuration
- [ ] Integrate frontend with backend
- [ ] Test application
- [ ] Kubernetes deployment
- [ ] Helm charts
- [ ] CI/CD pipeline
- [ ] ArgoCD deployment