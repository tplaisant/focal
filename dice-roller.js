let result = [];
let max = 6;

for (let j = 0; j < process.argv[2]; j++) {
  result.push(Math.floor(Math.random() * max) + 1);  
}

return `Rolled ${process.argv[2]} dice: ${result}`;
// return final + result;
