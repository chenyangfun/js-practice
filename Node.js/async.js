//readFileSync是真正的同步，他是阻塞的
fs = require("fs");
// var file
// fs.readFile('./README.md', 'utf8', (err, data) => {
//   file = data;
// });

var file = fs.readFileSync('/test.txt', {"encoding": "utf-8"});

setTimeout(() => {
  console.log(file);  
}, 1000);
console.log(111,file);