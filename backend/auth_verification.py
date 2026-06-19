import os
import time
import requests

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'johjay_foods_backend.settings')

base = 'http://127.0.0.1:8000'
email = f'cortest{int(time.time())}@example.com'
payload = {
    'email': email,
    'full_name': 'CORS Test',
    'phone': '1234567890',
    'password': 'TestPass123!',
    'role': 'admin',
}

r = requests.post(f'{base}/api/users/register/', json=payload)
print('register', r.status_code, r.text)

if r.status_code == 201:
    token_resp = requests.post(f'{base}/api/users/login/', json={'email': email, 'password': 'TestPass123!'})
    print('login', token_resp.status_code, token_resp.text)
    if token_resp.status_code == 200:
        data = token_resp.json()
        headers = {'Authorization': f"Bearer {data['access']}"}
        profile = requests.get(f'{base}/api/users/profile/', headers=headers)
        print('profile', profile.status_code, profile.text)
        refresh = requests.post(f'{base}/api/users/token/refresh/', json={'refresh': data['refresh']})
        print('refresh', refresh.status_code, refresh.text)
