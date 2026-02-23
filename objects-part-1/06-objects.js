let obj = {
    name : "Anish",
    marks : 100,
}

obj.id = 7; // valid , we can add new key and value pair
obj["pillu"] = 1; // also valid , in this way also we can add new key value pair
//obj[dhar] = 10 // error ReferenceError: dhar is not defined , have to use quotes (single or double)
console.log(obj)

obj.greet = function abc(){ // valid
    console.log("greet")
}
console.log(obj)

obj.greet1 = function(){  //valid
    console.log("greet1")
}

obj.greet2 = () => {      //valid
    console.log('greet2')
}
console.log(obj)    
console.log(obj.greet1) // [Function (anonymous)]
console.log(obj.greet1())