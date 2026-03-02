// Maps

const map = new Map();
map.set("IN","India")
map.set('USA',"United States Of America")
map.set('Fr',"France")
map.set("IN","India")

console.log(map);

for (const [key,value] of map){
    console.log(key , ':-' , value);
    
}

for (const key in map) {
    console.log(key);          // no output
}
