// ++++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++

console.log(addone(5)); // valid

function addone(num)
{
    return num + 1
}


addTwo(5) // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num) {
      return num + 2;
  }
  