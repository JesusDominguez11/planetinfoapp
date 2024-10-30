// scripts/generateTrackList.js
const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '../src/soundtracks');
const outputFilePath = path.join(__dirname, '../src/soundtracks/trackList.json');

fs.readdir(directoryPath, (err, files) => {
  if (err) return console.log('Unable to scan directory:', err);

  const trackFiles = files.filter(file => file.endsWith('.mp3'));
  fs.writeFileSync(outputFilePath, JSON.stringify(trackFiles, null, 2));
  console.log('Archivo trackList.json creado con éxito');
});
