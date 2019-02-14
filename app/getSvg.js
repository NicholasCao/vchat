
var fs = require('fs');
var path = require('path');
const svgDir = path.resolve(__dirname, './static/svg');
 
// 读取单个文件
function readfile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(svgDir, filename), 'utf8', function(err, data) {
      console.log(data.replace(/<\?xml.*?\?>|<\!--.*?-->|<!DOCTYPE.*?>/g, ''));
      if (err) reject(err);
      resolve({
        [filename.slice(0, filename.lastIndexOf('.'))]: data,
      });
    });
  });
}
 
// 读取SVG文件夹下所有svg
function readSvgs() {
  return new Promise((resolve, reject) => {
   fs.readdir(svgDir, function(err, files) {
     if (err) reject(err);
     Promise.all(files.map(filename => readfile(filename)))
      .then(data => resolve(data))
      .catch(err => reject(err));
   });
  });
}
 
// 生成js文件
readSvgs().then(data => {
  let svgFile = `
  interface Svg {
    [index: string]: string;
  }
  var svgs: Svg = ${JSON.stringify(Object.assign.apply(this, data))}
  export default svgs`
  fs.writeFile(path.resolve(__dirname, './static/svgs.ts'), svgFile, function(err) {
    if(err) throw new Error(err);
  })
}).catch(err => {
    throw new Error(err);
  });