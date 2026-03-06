new Promise(function(resolve,reject) {
    setTimeout(function() {
      console.log("Async Task 2")
      // we have not called resolve so console.log() written in .then will not execute
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})