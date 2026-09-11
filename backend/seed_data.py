"""
Seed script for SmartDeliver AI Database
"""
import json

def generate_seed_data():
    seed_customers = [
        {
            "id": "CUST-901",
            "name": "Ananya Sharma",
            "phone": "+919123456789",
            "alt_phone": "+919888877777",
            "email": "ananya.sharma@example.com",
            "preferred_language": "en",
            "preferred_contact_method": "WhatsApp",
            "preferred_time_slot": "14:00 PM - 16:00 PM"
        }
    ]

    seed_executives = [
        {
            "id": "EXEC-701",
            "name": "Rajesh Kumar",
            "phone": "+919876543210",
            "vehicle_number": "KA-01-EQ-9821",
            "vehicle_type": "Electric Scooter (Ather 450X)",
            "rating": 4.9,
            "total_deliveries": 1420
        }
    ]

    print("Seed data generated successfully!")
    return {
        "customers": seed_customers,
        "executives": seed_executives
    }

if __name__ == "__main__":
    generate_seed_data()
