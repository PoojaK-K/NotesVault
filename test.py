import urllib.request
import json
import urllib.error

data = json.dumps({'username': 'test5', 'email': 'test5@test.com', 'password': 'password123'}).encode('utf-8')
req = urllib.request.Request('http://localhost:8000/register', data=data, headers={'Content-Type': 'application/json'})
try:
    urllib.request.urlopen(req)
    print("Success")
except urllib.error.HTTPError as e:
    print(e.read().decode('utf-8'))
