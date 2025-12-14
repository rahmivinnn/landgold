import webbrowser
import os

# Get the absolute path to the HTML file
preview_file = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'preview.html')

# Open the HTML file in the default browser
webbrowser.open('file://' + preview_file)

print("Opening LANDGOLD Mobile App preview in your default browser...")
print(f"Preview file: {preview_file}")