const promiseFour = new Promise(function(resolve,reject){
        setTimeout(function(){
            let error = false
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
console.log(userName)
// .catch(() => {
//     console.log("err")
// })