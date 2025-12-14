import webbrowser
import os

# Get the absolute path to the HTML file
preview_file = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'comprehensive-preview.html')

# Open the HTML file in the default browser
webbrowser.open('file://' + preview_file)

print("Opening comprehensive preview of the LANDGOLD mobile app...")
print(f"Preview file: {preview_file}")
print("\nFeatures included in this preview:")
print("- Tab-based navigation between Home and Marketplace")
print("- Complete Dashboard with statistics and quick actions")
print("- Fully functional Marketplace with property listings")
print("- Professional UI with BTN branding colors")
print("- Light green theme throughout the application")
print("- Realistic notifications for user interactions")
print("- Responsive design that works on all screen sizes")