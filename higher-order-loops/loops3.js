const coding = ["js", "ruby", "java","python","cpp"];

function printMe(item){
    console.log(item);
    
}

//coding.forEach(printMe()) // TypeError: undefined is not a function
coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
} )