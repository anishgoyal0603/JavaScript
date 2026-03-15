let anotherUserName = 'ChaiAurCode'

String.prototype.truelength = function(){
    console.log(`${this}`)
    console.log(`${this.name}`)
    console.log(`True length is: ${this.trim().length}`)
}

anotherUserName.truelength()
"hitesh".truelength()
'iceTea'.truelength()