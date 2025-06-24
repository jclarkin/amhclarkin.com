const sharp = require('sharp');
const path = require('path');

const input = path.resolve(__dirname, '../public/favicon.svg');
const output = path.resolve(__dirname, '../public/favicon.png');

sharp(input)
  .resize(32, 32)
  .png()
  .toFile(output)
  .then(() => {
    console.log('Favicon PNG generated successfully!');
  })
  .catch(err => {
    console.error('Error generating PNG:', err);
  }); 