function add(){
    return Array.prototype.slice.call(arguments).reduce((a,b)=>a+b,0)
}
console.log(add(2,34))