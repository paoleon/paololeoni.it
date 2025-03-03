# Imposta lo script per interrompere in caso di errore
$ErrorActionPreference = "Stop"

# Percorso del progetto
$projectPath = "$PSScriptRoot"

# Verifica se `node_modules` esiste, altrimenti esegui `npm install`
if (-Not (Test-Path "$projectPath\node_modules")) {
    Write-Host "📦 node_modules non trovato. Installazione delle dipendenze..."
    npm install
}

# Aggiorna il database dei browser supportati
Write-Host "🌐 Aggiornamento database Browserslist..."
npx update-browserslist-db@latest

# Esegui la build del progetto
Write-Host "🚀 Avvio della build del progetto..."
try {
    npm run build
    Write-Host "✅ Build completata con successo!"
} catch {
    Write-Host "❌ Errore durante la build: $_"
    exit 1
}

# Directory di output
$buildPath = "$projectPath\build"

# Verifica se la cartella di build è stata creata
if (Test-Path $buildPath) {
    Write-Host "📁 Cartella di build trovata: $buildPath"
} else {
    Write-Host "❌ La build non è stata generata correttamente."
    exit 1
}

Write-Host "🎉 Build completata! I file sono pronti nella cartella 'build'."
