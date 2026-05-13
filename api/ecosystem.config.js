// Fichier de config PM2
module.exports = [{
    name: 'api',
    script: 'src/index.js',    // ← c'est ici que tu définis ton point d'entrée
    instances: 'max',           // exploite tous les cœurs CPU
    exec_mode: 'cluster'
  }]
