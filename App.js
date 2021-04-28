const { fs, readFile, readFileSync, writeFileSync } = require('fs');
const jpeg = require('jpeg-js');
const { path } = require('path');

const jpegData = readFileSync('butterfly.jpeg');
const rawImageData = jpeg.decode(jpegData);
writeFileSync('butterfly.txt', rawImageData.exitBuffer)
// console.log(rawImageData);
