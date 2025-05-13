const fs = require('fs');
const https = require('https');
const path = require('path');

const icons = [
  '01d', '01n', '02d', '02n', '03d', '03n', '04d', '04n',
  '09d', '09n', '10d', '10n', '11d', '11n', '13d', '13n', '50d', '50n'
];

const outDir = path.join(__dirname, 'src/assets/weather-icons');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function downloadIcon(icon) {
  const url = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  const dest = path.join(outDir, `${icon}@2x.png`);
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
        return;
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', reject);
  });
}

(async () => {
  for (const icon of icons) {
    try {
      console.log(`Downloading ${icon}@2x.png ...`);
      await downloadIcon(icon);
    } catch (err) {
      console.error(`Error downloading ${icon}:`, err.message);
    }
  }
  console.log('All icons downloaded!');
})(); 