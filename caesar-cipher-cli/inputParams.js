const fs = require('fs');

const readParams = (st) => {
  const args = process.argv.slice(2);
  args.forEach((item, index, arr) => {
      if((item === '-s' || item === '--shift') && arr[index + 1] !=='') {
          st['shift'] = arr[index+1];
      }
      if((item === '-i' || item === '--input') && arr[index + 1] !=='') {
          st['input'] = arr[index+1];
      }
      if((item === '-o' || item === '--output') && arr[index + 1] !=='') {
          st['output'] = arr[index+1];
      }
      if((item === '-a' || item === '--action') && arr[index + 1] !=='') {
          st['action'] = arr[index+1];
      }
  });
  return st;
}

const defineCase = (obj) =>{
  let caseValue;
  if(obj['input'] === true && obj['output'] === true){
    caseValue = 1;
  } else if(obj['input'] === true && obj['output'] === false) {
    caseValue = 2;
  } else if(obj['input'] === false && obj['output'] === true) {
    caseValue = 3;
  } else if(obj['input'] === false && obj['output'] === false) {
    caseValue = 4;
  }
  return caseValue;
}

const checkParams = (state) => {
  const cfg = readParams(state);
  const checkData = {};

  if((cfg['action'] === 'encode' || cfg['action'] === 'decode') && parseInt(cfg['shift']) < 26) {
    if(!cfg['input']) {
      checkData['input'] = false;
      console.log(`Attention: The input file was not defined${(cfg['input']) ? ` (${cfg['input']})` : ``}, so input thread will be switched to console input!!!`);
    } else if(!fs.existsSync(`${cfg['input']}`)) {
        process.stderr.write('Error: The input file is not exists', () => process.exit(1))
    } else {
      checkData['input'] = true;
    }

    if(!cfg['output'] || cfg['output'].split('.').length <= 1) {
      checkData['output'] = false;
      console.log(`Attention: The output file was not defined${(cfg['output']) ? ` (${cfg['output']})` : ``}, so output thread will be switched to console output!!!`);
    } else {
      checkData['output'] = true;
    }

    result =  defineCase(checkData);

  } else {
    process.stderr.write('Error: The Action and Shift values are required!');
    console.log('Action: encode/decode values only');
    console.log('Shift: Integer value between 0 and 25');
    result = false;
  }

  return result;
};

module.exports = checkParams;
