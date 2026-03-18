const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/patients", async (req, res) => {
  try {
    const response = await axios.get("http://127.0.0.1:8002/patients");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Python service unavailable" });
  }
});

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});