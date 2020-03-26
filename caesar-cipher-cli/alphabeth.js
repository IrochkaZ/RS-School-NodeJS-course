
const alphabetLowCase = 'abcdefghijklmnopqrstuvwxyz';
const alphabetUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// зашифровать
const encodeChar = (str, shift) => {
  let result;
  let currPosition;
  if (str !== str.toUpperCase() && alphabetLowCase.includes(str)) {
    currPosition = alphabetLowCase.indexOf(str);
    result = alphabetLowCase[(currPosition+shift)%alphabetLowCase.length];
  } else if (str === str.toUpperCase() && alphabetUpperCase.includes(str)) {
    currPosition = alphabetUpperCase.indexOf(str);
    result = alphabetUpperCase[(currPosition+shift)%alphabetUpperCase.length];
  } else {
    result = str;
  }

  return result;
};

// расшифровать
const decodeChar = (str, unshift) => {
  let result;
  let currPosition;
  if (str !== str.toUpperCase() && alphabetLowCase.includes(str)) {
    currPosition = alphabetLowCase.indexOf(str);
    const index = (currPosition-unshift)%alphabetLowCase.length;
    result = (index < 0) ? alphabetLowCase[alphabetLowCase.length + index]: alphabetLowCase[index];
  } else if (str === str.toUpperCase() && alphabetUpperCase.includes(str)) {
    currPosition = alphabetUpperCase.indexOf(str);
    const index = (currPosition-unshift)%alphabetUpperCase.length;
    result = (index < 0) ? alphabetUpperCase[alphabetUpperCase.length + index]: alphabetUpperCase[index];
  } else {
    result = str;
  }

  return result;
};

const cipherProcess = (str, action, shift) => {
  return str.split('')
  .map((char) => (action === 'encode')? encodeChar(char, shift): decodeChar(char, shift))
  .join('');
};


module.exports = cipherProcess;
