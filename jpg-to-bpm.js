const Jimp = require("jimp");
const {intToRGBA, rgbaToInt, create} = require("jimp");
const {getHeight, getWidth} = require("jimp");
const { fs, readFile, readFileSync, writeFileSync } = require('fs');
const { kMaxLength } = require("buffer");
const jpeg = require('jpeg-js');
const {toString} = require('jpeg-js');
// const {map} = require('map');


function TurnWhiteintoBlack(frameData, width, height){
  const newFrameData = new Buffer(width * height * 4)
  var k=0;
  var w=0;
  for (let i=0; i < height; i++){
    for (let j=0; j < width; j++){
      while (k<4) {
        newFrameData[w++] = '0x' + frameData[i][j][k++].toString(16);
        newFrameData[w++] ='0x' + frameData[i][j][k++].toString(16);
        newFrameData[w++] = '0x' + frameData[i][j][k++].toString(16);
        newFrameData[w++] = '0x' + frameData[i][j][k++].toString(16);
        // if (r<b){
        //   const r=255;
        // }
        // const inte = rgbaToInt(r,g,b,a);
        // newFrameData[w++] = inte;
      }
    }
  }
  const rawImageData = {
    data: newFrameData,
    width: width,
    height: height,
  };
  const jpegImageData = jpeg.encode(rawImageData, 50);
  console.log(jpegImageData.data);
  writeFileSync('blackbutterfly.jpg', jpegImageData.data);
}



Jimp.read("butterfly.jpeg", function (err, image) {
  if (err) {
    console.log(err)
  } else {
    const width = image.getWidth();
    const height = image.getHeight();
    const frameData = [];
    for (let i= 0; i < height; i++) {
      frameData[i] = [];
      for (let j=0; j < width; j++) {
        const colorInt = image.getPixelColor( i, j);
        const colorRGBA = intToRGBA(colorInt);
        const r = colorRGBA.r;
        const g = colorRGBA.g;
        const b = colorRGBA.b;
        const a = colorRGBA.a;
        frameData[i][j]=[r, g, b, a];
      }
    }
    TurnWhiteintoBlack(frameData, width, height);
  }
})

