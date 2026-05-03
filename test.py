import urllib.request, json

req = urllib.request.Request(
    "https://api.deepseek.com/chat/completions",
    data=json.dumps({
        "model": "deepseek-v4-flash",
        "messages": [{"role": "user", "content": "hi"}],
        "max_tokens": 10
    }).encode(),
    headers={
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_NEW_KEY_HERE"
    }
)
res = urllib.request.urlopen(req)
print(res.read().decode())