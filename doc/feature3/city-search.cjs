const fs = require('fs');
const csv = require('csv-parser');

const results = [];
fs.createReadStream('./doc/feature3/cities_20000.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    fs.writeFileSync('./doc/feature3/cities_20000.json', JSON.stringify(results, null, 2));
    console.log('Done!');
  });
