import webbrowser
import os

# Get the absolute path to the preview file
preview_path = os.path.abspath("app-preview.html")
preview_url = "file://" + preview_path.replace("\\", "/")

print(f"Opening app preview: {preview_url}")

# Open in default browser
webbrowser.open(preview_url)

print("The Metro server is running on http://localhost:8081")
print("To run the actual app:")
print("1. Connect an Android device or start an emulator")
print("2. Run: npx react-native run-android")