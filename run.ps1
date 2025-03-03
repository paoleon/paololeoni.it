
# Controlla se `node_modules` esiste, altrimenti installa le dipendenze
if (!(Test-Path "node_modules")) {
    Write-Host "⚡ Installing dependencies..." -ForegroundColor Cyan
    npm install
} else {
    Write-Host "✅ Dependencies already installed." -ForegroundColor Green
}

# Avvia il server di sviluppo
Write-Host "🚀 Starting the development server..." -ForegroundColor Yellow
npm start
