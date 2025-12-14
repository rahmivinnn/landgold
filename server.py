import http.server
import socketserver
import os
import socket

PORT = 8000

# Get local IP address
def get_local_ip():
    try:
        # Connect to a remote server to determine local IP
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return "localhost"

Handler = http.server.SimpleHTTPRequestHandler

# Change to the directory containing this script
os.chdir(os.path.dirname(os.path.abspath(__file__)))

print("=" * 50)
print("LANDGOLD Mobile App Server")
print("=" * 50)
print(f"Server directory: {os.getcwd()}")
print(f"Local access: http://localhost:{PORT}")
local_ip = get_local_ip()
if local_ip != "localhost":
    print(f"Network access: http://{local_ip}:{PORT}")
    print("\nTo access from your phone:")
    print("1. Make sure your phone is on the same Wi-Fi network")
    print("2. Open your phone's browser")
    print(f"3. Go to: http://{local_ip}:{PORT}")
    print(f"4. For enhanced app: http://{local_ip}:{PORT}/enhanced-landgold-app.html")
else:
    print("\nCould not determine local IP. Check your network connection.")
print("=" * 50)

try:
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"\nServer started at port {PORT}")
        print("Press Ctrl+C to stop the server")
        httpd.serve_forever()
except KeyboardInterrupt:
    print("\nServer stopped.")
except OSError as e:
    if "Address already in use" in str(e):
        print(f"\nPort {PORT} is already in use. Try changing the port number in the script.")
    else:
        print(f"\nError starting server: {e}")