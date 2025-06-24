const fs = require('fs');
const toIco = require('to-ico');
const path = require('path');

const input = path.resolve(__dirname, '../public/favicon.png');
const output = path.resolve(__dirname, '../public/favicon.ico');

fs.readFile(input, (err, data) => {
  if (err) throw err;
  toIco([data]).then(buf => {
    fs.writeFile(output, buf, err => {
      if (err) throw err;
      console.log('Favicon ICO generated successfully!');
    });
  }).catch(err => {
    console.error('Error generating ICO:', err);
  });
}); 