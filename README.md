# alx-listing-app-00
ALX Listing App

Welcome to the ALX Listing App! This project is designed as a simple property listing interface similar to an Airbnb listing page. It will showcase reusable UI components and use modern web development tools like Next.js and Tailwind CSS.

📌 Project Description

The goal of this project is to create a clean and responsive property listing page where users can view different properties and interact with core UI elements such as cards and buttons.

This project also demonstrates best practices in structuring a scalable frontend application.

📁 Project Structure

Here‘s a breakdown of key folders and their purposes:

components/ → Contains reusable UI components.

components/common/ → Shared components used across pages, such as Card and Button.

interfaces/ → Contains TypeScript interfaces for type-checking props and data models.

constants/ → Stores reusable configuration values, static data, or UI text.

public/assets/ → Contains images and other static assets available to the entire application.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.



## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

