const fs = require('fs');
const path = require('path');
const exporter = require(path.join(__dirname, 'elastic_export.js'));

const entries = JSON.parse(fs.readFileSync(path.join(__dirname, 'update_files/2018_press_releases.json'), 'utf8'));
const transform = x => x;     // trivial transformation

exporter.reload_index(entries, transform, 'pr', 'pr');