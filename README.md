# MedCalc Mini

A clinical calculator app.
Stack: Next.js 16, Node/Express 5, PostgreSQL 16, TypeScript, Docker, Jest.

## Project structure

```
medcalc-mini/
├── .devcontainer/
│   ├── devcontainer.json   # VS Code dev container config
│   └── docker-compose.yml  # Defines app + postgres services
├── frontend/               # Next.js 16 app → localhost:3000
│   ├── package.json
│   └── .env.local.example
├── backend/                # Express 5 API → localhost:3001
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
└── README.md
```

## Prerequisites

| Tool                                                                                                               | Notes                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| [OrbStack](https://orbstack.dev)                                                                                   | Docker runtime for Mac. Make sure it's running before opening the container. |
| [VS Code](https://code.visualstudio.com/)                                                                          |                                                                              |
| [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) | Install in VS Code before continuing.                                        |

## Quickstart

### 1. Open in dev container

Open this folder in VS Code. You'll see a prompt in the bottom-right:
**"Reopen in Container"** — click it.

Or manually: `Cmd+Shift+P` → **Dev Containers: Reopen in Container**

First build takes 2–3 minutes (downloads images, installs deps).
Subsequent opens are near-instant.

### 2. Set up env files

Open a terminal inside VS Code (it's now running inside the container):

```bash
cp backend/.env.example backend/.env
cp frontend/.env.local.example frontend/.env.local
```

### 3. Run the database migration

```bash
cd backend && npm run migrate
```

### 4. Start both servers

Open two terminals in VS Code:

**Terminal 1 — Frontend:**

```bash
cd frontend && npm run dev
```

**Terminal 2 — Backend:**

```bash
cd backend && npm run dev
```

Frontend → http://localhost:3000  
API → http://localhost:3001

### 5. Connect to Postgres (optional)

The SQLTools extension is pre-configured — click the database icon in the
VS Code sidebar to browse tables and run queries directly.

Or use any external client (TablePlus, psql, etc.):

| Setting  | Value     |
| -------- | --------- |
| Host     | localhost |
| Port     | 5432      |
| Database | medcalc   |
| User     | postgres  |
| Password | postgres  |

## Running tests

```bash
# Frontend
cd frontend && npm test

# Backend
cd backend && npm test

# With coverage
npm run test:coverage
```

## Services at a glance

| Service    | Port | Description                           |
| ---------- | ---- | ------------------------------------- |
| Next.js    | 3000 | Frontend — App Router, React 19       |
| Express    | 3001 | REST API — TypeScript, Express 5      |
| PostgreSQL | 5432 | Database — persists via Docker volume |
