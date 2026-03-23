# DevOps for Developers Project #74

### Status:
[![Actions Status](https://github.com/Mirazen/devops-for-developers-project-74/workflows/push/badge.svg)](https://github.com/Mirazen/devops-for-developers-project-74/actions)

## Description
This is a full-stack Fastify blog application packaged with Docker. It includes a reverse proxy (Caddy) and a PostgreSQL database.

## Requirements
- Docker and Docker Compose
- Node.js 20+ (for local development)

## Commands
- `make setup` — Initial project setup (install dependencies, run migrations)
- `make dev` — Start the project in development mode (with Caddy and hot reload)
- `make test` — Run tests using Docker Compose

## Docker Image
[mirazen/devops-for-developers-project-74](https://hub.docker.com/r/mirazen/devops-for-developers-project-74)