// must read ->  https://stackoverflow.com/questions/34960886/are-there-still-reasons-to-use-promise-libraries-like-q-or-bluebird-now-that-we

const promiseOne = new Promise((resolve,reject) => {
    // Do an async task
    // Db calls , cryptography , network
    setTimeout(function(){
        console.log("Async task is complete");
        
    },1000)
})

promiseOne.then(() => {
    console.log("Promise consumed");
    
})
