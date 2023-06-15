function solution(numbers) {
  const str = ["zero", "one", "two", "three", "four", "five",
                 'six', "seven", "eight", "nine"]
    
  str.forEach((nums, index) => {
    numbers = numbers.split(nums).join(index)}) 
  
  return Number(numbers)
}