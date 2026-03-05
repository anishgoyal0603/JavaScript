setTimeout(function abc(){
        console.log("dhari");
        
    },2000)

    setTimeout(function (){
        console.log("wala");
        
    },3000)

    setTimeout( () => {
        console.log("pillu");
        
    },4000)

    const changeText = function(){
        console.log("Pillu");
        
    }
    const changeMe = setTimeout(changeText,2000)
    console.log(changeMe);
    
        
    

