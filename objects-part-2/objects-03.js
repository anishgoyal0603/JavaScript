const obj1 = {1:'a',2:'b' }
const obj2 = {3:'a', 4:'b'}

const obj3 = {obj1 , obj2}
console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign(obj1,obj2) // in this target is obj1
console.log(obj4);

const obj5 = Object.assign({},obj1,obj2) // {} optional to give , {} is target and rest all are source
console.log(obj4);

obj4 ={5:"a",6:"b"}

const obj7 = Object.assign({},obj1,obj2) // {} optional to give , {} is target and rest all are source
console.log(obj4);





