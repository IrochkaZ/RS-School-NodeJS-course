const fs = require('fs');
const { fileToFile, fileToConsole, consoleToFile, consoleToConsole } = require('./encDecProcess');
const checkParams = require('./inputParams');

const state =  {
    input: '',
    output: '',
    shift: '',
    action: ''
};

const paramCase = checkParams(state);

switch(paramCase) {
    case 1:
        fileToFile(state);
        break;
    case 2:
        fileToConsole(state);
        break;
    case 3:
        consoleToFile(state);
        break;
    case 4:
        consoleToConsole(state);
        break;
}
