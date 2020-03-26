const fs = require('fs');
const { Transform } = require('stream');
const cipherProcess = require('./alphabeth');

const dataFileProcess = () => {
  const strTransformation = new Transform({
    transform: (chunk, encoding, done) => {
        const result = cipherProcess(chunk.toString(), 'encode', 2);
        done(null, result);
    }
  });

  fs.createReadStream('input.txt')
      .pipe(strTransformation)
      .pipe(fs.createWriteStream('output.txt'))
}

dataFileProcess();






// console.log(cipherProcess('byffi', 'decode', 20));

/* 
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function(line){
    console.log ('-----Conversion Begin-------');
    console.log('Input Data: ', line)
    console.log('Output Data: ', cipherProcess(line, 'encode', 2));
    console.log ('-----Conversion End---------');
}); */


//пункт 9
// var readline = require('readline'),
//   rl = readline.createInterface(process.stdin, process.stdout),
//   prefix = 'OHAI> ';
// rl.on('line', function(line) {
//   switch(line.trim()) {
//     case 'hello':
//       console.log('world!');
//   break;
//     default:
//       console.log('Say what? I might have heard `' + line.trim() + '`');
//       break;
//   }
//   rl.setPrompt(prefix, prefix.length);
//   rl.prompt();
// }).on('close', function() {
//   console.log('Have a great day!');
//   process.exit(0);
// });
// console.log(prefix + 'Good to see you. Try typing stuff.');
// rl.setPrompt(prefix, prefix.length);
// rl.prompt();