async function getAllUsers()
{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    // console.log(response);
    const data = await response.json() // have to use await keyword here also , other wise it will return another promise on which output will be promise<pending>  
    console.log(data);
}

getAllUsers()