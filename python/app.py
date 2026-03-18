from fastapi import FastAPI
import random

app = FastAPI()

def calculate_risk(heart_rate, spo2, temperature):
    score = 0

    # Heart rate risk
    if heart_rate > 110:
        score += 30
    elif heart_rate > 90:
        score += 15

    # Oxygen risk
    if spo2 < 90:
        score += 40
    elif spo2 < 95:
        score += 20

    # Temperature risk
    if temperature > 38:
        score += 30
    elif temperature > 37:
        score += 10

    # Priority classification
    if score > 70:
        priority = "HIGH"
    elif score > 40:
        priority = "MEDIUM"
    else:
        priority = "LOW"

    return score, priority


@app.get("/patients")
def get_patients():

    patients = []

    for i in range(5):
        heart_rate = random.randint(60, 130)
        spo2 = random.randint(85, 100)
        temperature = round(random.uniform(36.0, 39.0), 1)

        score, priority = calculate_risk(heart_rate, spo2, temperature)

        patients.append({
            "id": i + 1,
            "name": f"Patient {i+1}",
            "heart_rate": heart_rate,
            "spo2": spo2,
            "temperature": temperature,
            "risk_score": score,
            "priority": priority
        })

    return patients