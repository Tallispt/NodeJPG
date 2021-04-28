const cv = require('opencv4nodejs');
// const Jimp = require('jimp');

// var Img = await Jimp.read('./blackbutterfly.jpg');
let img = cv.imread("./blackbutterfly.jpg")
cv.imshow("Output",img)


console.log("foi")