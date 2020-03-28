const fs = require('fs');
const readline = require('readline');
const { Transform } = require('stream');
const cipherProcess = require('./alphabeth');

const consoleToFile = (obj) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });

  const strTransformation = new Transform({
    transform: (chunk, encoding, done) => {
        const result = cipherProcess(chunk.toString(), obj['action'], obj['shift']);
        done(null, result);
    }
  });

rl.on('line', (line) => {
  if (fs.existsSync(obj['output'])) {
     fs.appendFile(obj['output'],' ' + cipherProcess(line.toString(), obj['action'], obj['shift']),'utf8',
     function(err) {
       if (err) throw err;
       console.log(`Data is appended from console to file ${obj['output']} successfully.`)
     });
 } else {
   pipe(strTransformation)
   .pipe(fs.createWriteStream(obj['output']));
 }
 rl.prompt()
}).on('close', function() {
  process.exit(0);
});
console.log('You are in console mode. Type smth to encode/decode');
rl.prompt();
};


const fileToFile = (obj) => {
  const strTransformation = new Transform({
    transform: (chunk, encoding, done) => {
        const result = cipherProcess(chunk.toString(), obj['action'], obj['shift']);
        done(null, result);
    }
  });

      if (fs.existsSync(obj['output'])) {
         const data = fs.readFile(obj['input'], 'utf8', function(err, data) {
          fs.appendFile(obj['output'],' ' + cipherProcess(data.toString(), obj['action'], obj['shift']),'utf8',
          function(err) {
            if (err) throw err;
            console.log(`Data is appended to file ${obj['output']} successfully.`)
          });
      });
      } else {
        fs.createReadStream(obj['input'])
        .pipe(strTransformation)
        .pipe(fs.createWriteStream(obj['output']));
      }
};

const consoleToConsole = (obj) => {
  const rl = readline.createInterface(process.stdin, process.stdout);
  rl.on('line', (line) => {
    console.log('----------------------------------');
    console.log('Input: ', line);
    console.log('Output: ', cipherProcess(line, obj['action'], obj['shift']));
    console.log('----------------------------------');
    rl.prompt();
  }).on('close', function() {
    process.exit(0);
  });
  console.log('You are in console mode. Type smth to encode/decode');
  rl.prompt();
};

const fileToConsole = (obj) => {
  const rl = readline.createInterface({
    input: fs.createReadStream(obj['input']),
    output: process.stdout,
});

rl.on('line', (line) => {
  console.log('----------------------------------');
  console.log('Input from file: ', line);
  console.log('Output to console: ', cipherProcess(line, obj['action'], obj['shift']));
  console.log('----------------------------------');
  rl.prompt();
});
};

module.exports = { fileToFile, fileToConsole, consoleToFile, consoleToConsole };
