const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({username : "chai",email:"chai@example.com"})
    },1000)
})

promiseThree.then(function (user) {
   console.log(user)
})