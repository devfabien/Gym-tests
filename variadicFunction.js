// function add(){
//     return Array.prototype.slice.call(arguments).reduce((a,b)=>a+b,0)
// }
// console.log(add(2,34))

function add(...rest){
    return rest.reduce((a,b)=>a+b,0)
}
console.log(add(1,2,3,4,6))
