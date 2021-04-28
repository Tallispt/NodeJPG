
const { fs, readFile, readFileSync, writeFileSync, toString } = require('fs');

var jpeg = require('jpeg-js');
var width = 100,
  height = 100;
var frameData = new Buffer(width * height * 4);
var i = 0;
while (i < frameData.length) {
  frameData[i++] = 0xff; // red
  frameData[i++] = 0x00; // green
  frameData[i++] = 0x00; // blue
  frameData[i++] = 0xff; // alpha - ignored in JPEGs
}
var rawImageData = {
  data: frameData,
  width: width,
  height: height,
};
var jpegImageData = jpeg.encode(rawImageData, 50);
console.log(jpegImageData);

writeFileSync('image.jpg', jpegImageData.data);