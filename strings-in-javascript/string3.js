const url = "https://hitesh.com/hitesh%20choudhary"; // browser spaces nah samajhta
console.log(url.replace('%20', '-')); // "https://hitesh.com/hitesh-choudhary"

console.log(url.includes('hitesh'));
const gameName = "hitesh-hc-com";
  console.log(gameName.split('-')); // Output: ['hitesh', 'hc', 'com']
