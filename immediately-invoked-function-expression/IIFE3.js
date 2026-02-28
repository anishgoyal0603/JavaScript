(function chai(){ // named IIFE
    console.log("DB connected");
})()
;
(() => {
    console.log(`DB connected Two`);
         
})()                                           // will run as we inserted semicolon
;
(function(name){
    console.log(`DB connected two ${name}`);
})(`Anish`)
                            // no need to put semicolon between an IIFE and normal function , have to put semicolon between two consecutive IIFEs
function one(name)
{
    console.log(`${name} dhar dhar`);
}

one(`dhariwala`)