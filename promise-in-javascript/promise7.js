const promiseFour = new Promise(function(resolve,reject){
        setTimeout(function(){
            let error = true
            if (!error)
            {
                resolve({username : "hitesh" , password : "123"})
            }
            else{
                reject('ERROR: Something went wrong')
            }
        },1000)
})

const userName = promiseFour
.then((user) => {
    console.log(user)
    return user.username
})
.then((userName) => {
    console.log(userName)
})

.catch(() => {                 // if we not give here .catch then it will show error
    console.log("err")
})

.finally(() => {
    console.log("The Promise is either resolved or rejected")
})