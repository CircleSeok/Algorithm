function solution(my_string, index_list) {
  let result = "";
  for (let i = 0; i < index_list.length; i++) {
    let index = index_list[i];
    if (index >= 0 && index < my_string.length) {
      result += my_string[index];
    } else {
      result += "_"; 
    }
  }

  return result;
}