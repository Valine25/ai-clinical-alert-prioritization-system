# AI Clinical Alert Prioritization System

A full-stack system that analyzes patient vitals and prioritizes clinical alerts based on severity.  
The platform simulates real-world hospital triage systems by identifying high-risk patients and displaying them in a prioritized dashboard.

---

## Overview

This system processes multiple patient vitals such as heart rate, oxygen saturation (SpO₂), and temperature.  
It calculates a risk score using AI-inspired logic and classifies patients into priority levels (HIGH, MEDIUM, LOW).

The dashboard displays patients in real-time, sorted by severity to assist in quick decision-making.

---

## Architecture

Python (Risk Scoring) → Node.js API → React Dashboard

---

## Features

- Multi-patient monitoring system
- AI-based risk scoring logic
- Priority classification (HIGH / MEDIUM / LOW)
- Real-time data updates
- Priority-based sorting (critical patients first)
- Color-coded severity indicators
- Responsive dashboard UI

---

## Tech Stack

Frontend
- React
- CSS

Backend
- Node.js
- Express.js

AI / Data Processing
- Python
- FastAPI

---

## Project Structure

ai-clinical-alert-system
│
├── frontend
│ └── React dashboard
│
├── node-server
│ └── API server
│
├── python-service
│ └── Risk scoring logic


---

## Installation

```bash
### 1. Clone the repository
git clone https://github.com/your-username/ai-clinical-alert-prioritization-system.git
cd ai-clinical-alert-prioritization-system

2. Start Python Service
cd python
pip install fastapi uvicorn
uvicorn app:app --reload --port 8002

3. Start Node.js Backend
cd backend
npm install
npm start

4. Start React Frontend
cd frontend
npm install
npm start
```

---

## Future Improvements

- Store patient data in a database
- Add filtering for critical patients
- Support real-time notifications
- Integrate real medical device data
- Deploy using cloud services
