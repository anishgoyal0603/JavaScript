const coding = ["js", "ruby", "java","python","cpp"];

function printMe(item,index,arr){
    console.log(item);
    console.log(index)
    console.log(arr)
    
}

//coding.forEach(printMe()) // TypeError: undefined is not a function
coding.forEach(printMe)

