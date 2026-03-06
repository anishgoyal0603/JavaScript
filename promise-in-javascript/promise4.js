new Promise(function(resolve,reject) {
    setTimeout(function() {
      console.log("Async Task 2")
      resolve() // // Here we have called resolve so console.log() written in .then will be executed
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})