# SmartDeliver AI - Enterprise Delivery Communication & RTO Prevention SaaS

SmartDeliver AI is an industry-grade e-commerce smart delivery communication platform that eliminates Delivery Attempt Failures and dramatically reduces Return-To-Origin (RTO) costs for retail giants (similar to Amazon, Flipkart, and Blinkit).

---

## 🌟 Key Features

1. **Role-Based Dynamic Views**:
   - **Customer View**: Live parcel tracking, interactive OpenStreetMap route, OTP generator, safe-drop pin & photo proof viewer, multi-lingual AI chatbot, and emergency alternate contact dispatch.
   - **Delivery Executive Terminal**: Order queue with AI Availability Risk Scores, 1-click WhatsApp / Call / SMS / AI Voice triggers, Safe Drop photo upload, and OTP verification.
   - **Admin Command Center**: RTO Cost Reduction metrics, revenue loss saved (INR), live fleet map, executive leaderboards, and real-time AI audit logs.

2. **Automated AI Fallback Communication Engine**:
   - Multi-channel escalation pipeline: `Phone Call Failed` ➔ `Trigger WhatsApp Interactive Menu` ➔ `Trigger SMS` ➔ `Trigger Interactive AI Voice Bot Call` ➔ `Call Alternate Emergency Contact`.
   - Multi-language support for 4 major languages: **English**, **Hindi (हिंदी)**, **Telugu (తెలుగు)**, and **Tamil (தமிழ்)**.
   - Web Audio & Speech Synthesis integration for live voice bot testing.

3. **FastAPI & Python AI Backend**:
   - High-performance FastAPI REST API endpoints and WebSockets server for real-time map tracking & notifications.
   - LangChain & Ollama / Llama 3 interface for sentiment analysis, intent detection, and automated smart reply generation.
   - PostgreSQL schema with indexes for orders, executives, customers, notifications, safe drop locations, and AI responses.

---

## 🚀 Quick Start Guide

### 1. Frontend Setup (React + Vite + Tailwind CSS)

```bash
cd frontend
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Backend Setup (FastAPI + Python)

```bash
cd backend
python -m venv venv
# On Windows:
venv\Scripts\activate
# On Linux/macOS:
source venv/bin/activate

pip install -r requirements.txt
python app/main.py
```
API Documentation available at [http://localhost:8000/docs](http://localhost:8000/docs).

### 3. Docker Deployment

```bash
docker-compose up --build
```

---

## 📊 Database Schema Overview

Tables:
- `customers`: Customer profiles, preferred contact methods, alternate contacts, language.
- `delivery_executives`: Executive profiles, vehicle numbers, ratings, live GPS coordinates.
- `orders`: Active orders, delivery OTP, AI risk scores, ETA minutes, delivery status.
- `safe_drop_locations`: Pinned safe drop locations, instructions, photo URLs.
- `notifications`: Audit log of WhatsApp, SMS, AI Voice, and Push notifications.
- `ai_responses`: AI sentiment analysis logs, customer intent, and suggested actions.

---

## 🛡️ License & Architecture

Built with React 19, Vite, Tailwind CSS, Framer Motion, Leaflet, Recharts, FastAPI, SQLAlchemy, PostgreSQL, and LangChain.
