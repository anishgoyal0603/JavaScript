const obj = {
    name : "dhari",
    value : 100,
    abc(){
        console.log("inside abc")
    },
    function(){
     console.log("inside anonymous function")
    },
    // function abc(){ error 

    // }
    f1:() => {
      console.log("Inside arrow function");
    },
    f2: function(){
      console.log("Inside anonymous function");
    },
    f3:function f3(){
        console.log("Inside function f3");
        
    }
    
}

obj.name = "kk"
console.log(obj)
obj.id = 10
console.log(obj)
obj.function()
obj.f1()
obj.f2()
obj.f3()

