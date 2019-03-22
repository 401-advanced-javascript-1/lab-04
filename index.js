'use strict';
const fs = require('fs');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

let html = [Buffer.from('<html>'), Buffer.from('</html>')];
let article = [Buffer.from('<article>'), Buffer.from('</article>')];
let h1 = [Buffer.from('<h1>'), Buffer.from('</h1>')];
let h2 = [Buffer.from('<h2>'), Buffer.from('</h2>')];


const dataNames = new Buffer([39,117,115,101,32,115,116,114,105,99,116,39,59,10,10,99,111,110,115,116,32,110,97,109,101,115,32,61,32,91,39,67,111,114,121,39,44,32,39,82,111,110,97,108,100,39,44,32,39,65,109,105,103,111,39,93,59,10,10,110,97,109,101,115,46,102,111,114,69,97,99,104,40,98,117,102,102,101,114,32,61,62,32,123,10,32,32,99,111,110,115,111,108,101,46,108,111,103,40,98,117,102,102,101,114,46,116,111,83,116,114,105,110,103,40,41,41,59,10,125,41,59]);

fs.writeFile('./files/loop.js', dataNames, (err) => {
  if(err) throw err;
  console.log('data was appended');
});

fs.readFile('./files/pair-programming.txt', (err,data) => {
  if(err) throw err;
  const tempArray = [];
  let finalBuffer = Buffer.concat([html[0], article[0], data, article[1], html[1]]);
  for(let i=0; i<data.length; i++){
    console.log(data.charCodeAt(i));
    if(data[i] === 109){
      console.log('FOUND BREAK', data.slice[0,i]);
    }
  }
});


