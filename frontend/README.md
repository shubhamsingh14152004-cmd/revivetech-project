# Revora — Sell Old Phone & Doorstep Mobile Repair Platform

Production Website: [https://www.sellrepairphone.org/](https://www.sellrepairphone.org/)

Revora is a modern re-commerce and mobile repair platform serving Mumbai and across India.

## Key Features

- **Instant Phone Valuation & Dead Phone Buyback**: Instant price estimates for used, damaged, broken, or non-working phones with free doorstep pickup.
- **Precision Cleanroom Mobile Repair**: 45-minute turnaround for screen replacement, battery swap, charging port repair, and water damage recovery with a 90-day warranty.
- **Multi-Brand Support**: iPhone, Samsung, OnePlus, Xiaomi, Vivo, Oppo, Realme, Motorola, Google Pixel, and Android devices.

## Project Architecture

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS v4, TanStack Start & Router.
- **Backend API**: Node.js, Express, MongoDB (Mongoose), JWT Authentication.

## Local Development Setup

### 1. Backend Server
```sh
cd backend
npm install
npm run dev
```
Runs on `http://localhost:5000` (`http://localhost:5000/health`).

### 2. Frontend Application
```sh
cd frontend
npm install
npm run dev
```
Runs on `http://localhost:8080/`.

## Production Build

```sh
cd frontend
npm run build
```
Creates production assets ready for deployment on Vercel or Node.js SSR environments.
