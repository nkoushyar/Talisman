# Talisman

A modern, high-performance full-stack web application built with React, Vite, Express, and Tailwind CSS. Designed as a monorepo, this project emphasizes clean separation of concerns, shared type safety, and optimized developer workflows.

---

## Architecture & Project Structure

This project is organized as a unified monorepo to streamline development and ensure seamless integration between the frontend and backend.

```text
talisman/
├── client/             # Frontend React application (Vite, Tailwind CSS, Shadcn)
├── server/             # Backend API / Server application (Express, Node.js)
├── shared/             # Shared types, utilities, and validation schemas
├── netlify/            # Serverless deployment configuration and functions
├── public/             # Static public assets
└── package.json        # Workspace configuration and dependencies
