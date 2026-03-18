import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [patients, setPatients] = useState([]);

  const fetchPatients = async () => {
  const res = await fetch("http://localhost:5001/api/patients");
  const data = await res.json();

  const priorityOrder = {
    HIGH: 3,
    MEDIUM: 2,
    LOW: 1
  };

  const sorted = data.sort(
    (a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]
  );

  setPatients(sorted);
};
  useEffect(() => {
    fetchPatients();
    const interval = setInterval(fetchPatients, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1>Clinical Alert Prioritization System</h1>

      <table>
        <thead>
          <tr>
            <th>Patient</th>
            <th>Heart Rate</th>
            <th>SpO2</th>
            <th>Temp</th>
            <th>Risk Score</th>
            <th>Priority</th>
          </tr>
        </thead>

        <tbody>
          {patients.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.heart_rate}</td>
              <td>{p.spo2}</td>
              <td>{p.temperature}</td>
              <td>{p.risk_score}</td>
              <td className={p.priority.toLowerCase()}>
                {p.priority}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;