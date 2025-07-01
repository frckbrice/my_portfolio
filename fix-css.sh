#!/bin/bash

# Fix CSS file by ensuring proper closing braces
CSS_FILE="src/app/globals.css"

# Check if the file ends with the correct closing brace
if ! grep -q "^}$" "$CSS_FILE"; then
    echo "Fixing CSS file..."
    # Add the missing closing brace
    echo "}" >> "$CSS_FILE"
    echo "CSS file fixed!"
else
    echo "CSS file is already correct."
fi 