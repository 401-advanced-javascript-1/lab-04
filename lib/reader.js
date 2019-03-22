'use strict';
const fs = require('fs');

module.exports = exports = (files, callback) => {
  readFile('./files/pair-programming.txt', callback);
};

const readFile = (file, callback) => {
  fs.readFile(file, (err,data) => {
    if(err){ callback(err); }
    else { 
      console.log(data);
      callback(undefined, data); }
  });
};