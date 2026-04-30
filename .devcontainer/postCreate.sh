#!/usr/bin/env zsh
set -e

# Derive the project root from the script's own location so nothing is hardcoded
SCRIPT_DIR="${0:A:h}"
PROJECT_DIR="${SCRIPT_DIR:h}"

# Named volumes are created by Docker as root — fix ownership before npm tries to write
sudo chown -R node:node "$PROJECT_DIR/frontend/node_modules" "$PROJECT_DIR/backend/node_modules"

echo "Installing frontend dependencies..."
npm install --prefix "$PROJECT_DIR/frontend"

echo "Installing backend dependencies..."
npm install --prefix "$PROJECT_DIR/backend"

echo ""
echo "✅ All dependencies installed. See README.md for next steps."
