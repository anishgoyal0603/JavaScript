const promiseOne = new Promise((success,failure) => {
    // Do an async task
    // Db calls , cryptography , network
    setTimeout(function(){
        console.log("Async task is complete");
       // resolve("success") // ReferenceError: resolve is not defined
       success("success")
        
    },1000)
})

promiseOne.then(() => {
    console.log("promise consumed")
})