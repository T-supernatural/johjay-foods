import requests
import json

# Test creating a new lead
lead_data = {
    'name': 'Test Customer',
    'email': 'test@example.com',
    'phone': '555-1234',
    'event_type': 'wedding',
    'event_date': '2024-12-25',
    'guest_count': 50,
    'budget': '5000',
    'message': 'This is a test quote request for testing email notifications.'
}

response = requests.post(
    'http://localhost:8000/api/leads/',
    json=lead_data
)

print(f"Status Code: {response.status_code}")
print(f"Response: {json.dumps(response.json(), indent=2)}")
