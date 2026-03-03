const myNums = [1,2,3,4,5,6,7,8,9,10]

myNums.filter( (num) => num > 4) // no output

const newNums = myNums.filter((num) => num > 4)
console.log(newNums);

  const newNums1 = myNums.filter((num) => {
    num > 4 // wrong , return required
});
  console.log(newNums1); // [5, 6, 7, 8, 9, 10]

  const newNums2 = myNums.filter((num) => {
    return num > 4 // correct
     });
  console.log(newNums2); // [5, 6, 7, 8, 9, 10]
