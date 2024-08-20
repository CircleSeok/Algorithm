const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const fn_result = (input) => {
  const _string = input;
  let char_array = [];
  let i = 0;
  let j = 0;
  let result = "";
  do {
    char_array.push(String.fromCharCode(i + 97)); 
    i++;
  } while (i < 26);
  do {
    [..._string].indexOf(char_array[j]) > -1 ? (result += [..._string].indexOf(char_array[j]) + " ") : (result += "-1 ");
    j++;
  } while (j < char_array.length);
  console.log(result);
};
fn_result(input);