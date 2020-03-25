const arg = require('minimist')(process.argv.slice(2));
// const { program } = require('commander');
const fs = require("fs");
const readline = require('readline');

const ABC = 'abcdefghijklmnopqrstuvwxyzABCDEFJKLMNOPRSTUVWXYZ';

// program
//   .option('-a, --action <action>', 'an action encode/decode')
//   .option('-s, --shift <number>', 'a shift')
//   .option('-i, --input <file>', 'an input file')
//   .option('-o, --output <file>', 'an output file');
// program.parse(process.arg);


let readableStream = fs.createReadStream("input.txt", "utf8");
console.log('begin', readableStream,'end' )
let writeableStream = fs.createWriteStream("output.txt");
readableStream.pipe(writeableStream); 