# Jaiza (Monthly Report Automation System)

## Overview

Jaiza (Monthly Report Automation System) is a web application designed to replace traditional paper-based monthly reports in educational institutions. This application streamlines the process of creating, submitting, and reviewing monthly reports by automating many of the repetitive tasks involved. Teachers can now manage their personal details and branch information with ease, while inspectors and supervisors can review reports efficiently, saving both time and effort.

## Key Features

- **User Account Management**: Teachers create an account once, entering their personal and branch details.
- **Simplified Report Submission**: Teachers only need to update their monthly reports by adding the number of pages taught and the last topic covered.
- **Automated Test Management**: The system automatically calculates and manages the progress and test data.
- **Inspector Review**: Inspectors can review and approve reports before forwarding them to supervisors.
- **Supervisor Overview**: Supervisors get an aggregated view of all reports, allowing for better decision-making.

## Tech Stack

### Frontend

- **Next.js**: A powerful React framework that supports both server-side rendering and static site generation.
  - **Routing**: Built-in routing system provided by Next.js.
  - **API Routes**: Serverless API endpoints directly within the Next.js app.
  
- **Shadcn**: A utility-first UI component library built on top of Tailwind CSS.
  - **Tailwind CSS**: For styling with a focus on utility classes.
  - **Radix UI**: Accessible and customizable component primitives used by Shadcn.
  
- **React Hook Form**: For managing form state and validation.
- **Zod**: For parsing and validating JSON schema.

### Backend

- **Supabase**: An open-source backend-as-a-service that provides a real-time database and authentication.
  - **Database**: PostgreSQL-based database with real-time capabilities.
  - **Authentication**: Handles user authentication and authorization.
  - **Storage**: For file management and storage.

### Deployment & Hosting

- **Vercel**: For hosting the Next.js application with serverless functions.
- **Supabase Hosting**: For database and backend services.

### DevOps & Tools

- **ESLint & Prettier**: For code linting and formatting.
- **Postman**: For testing API endpoints.

## Contact
- **Email**: ameenahmed.dev@gmail.com
- **Github**: [iameenahmed](https://github.com/iameenahmed)