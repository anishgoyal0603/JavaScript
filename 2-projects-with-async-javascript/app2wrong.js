let start = document.querySelector('#start')
let stop = document.querySelector('#stop')

let id = null

function generateRandom()
{
  let color = '#'
  let hex = '0123456789abcdef'
  for(let i=1;i<=6;i++)
  {
     color += hex[Math.floor(Math.random()*16)]
  }
  return color;
}

start.addEventListener('click',function(){
  id = setInterval(function(){
    let body = document.querySelector('body')
    let color = generateRandom()
    body.style.backgroundColor = color
  },1000)
})

stop.addEventListener('click',function(){
  clearInterval(id)
})