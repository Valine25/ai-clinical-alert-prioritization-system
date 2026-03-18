const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const db = require("./config/db.js")

app.get("/api/patients", async (req, res) => {
  try {
    const response = await axios.get("http://127.0.0.1:8002/patients");
    const patients = response.data;

    patients.forEach((p) => {
      const query = `
        INSERT INTO patients (name, heart_rate, spo2, temperature, risk_score, priority)
        VALUES (?, ?, ?, ?, ?, ?)
      `;

      db.query(query, [
        p.name,
        p.heart_rate,
        p.spo2,
        p.temperature,
        p.risk_score,
        p.priority
      ]);
    });

    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: "Error fetching patients" });
  }
});

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});