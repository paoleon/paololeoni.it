# Controlla se Node.js è installato
if (!(Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Node.js non è installato! Scaricalo da https://nodejs.org" -ForegroundColor Red
    exit
}

# Mostra la versione di Node.js e npm
Write-Host "✅ Node.js versione: $(node -v)" -ForegroundColor Green
Write-Host "✅ npm versione: $(npm -v)" -ForegroundColor Green

# Controlla se `node_modules` esiste, altrimenti installa le dipendenze
if (!(Test-Path "$projectPath\node_modules")) {
    Write-Host "⚡ Installazione delle dipendenze in corso..." -ForegroundColor Cyan
    npm install
} else {
    Write-Host "✅ Le dipendenze sono già installate." -ForegroundColor Green
}

# Avvia il server di sviluppo
Write-Host "🚀 Avvio del server di sviluppo..." -ForegroundColor Yellow
Start-Process "http://localhost:3000"  # Apre il browser automaticamente
npm start
