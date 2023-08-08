// function add(){
//     return Array.prototype.slice.call(arguments).reduce((a,b)=>a+b,0)
// }
// console.log(add(2,34))

// function add(...rest){
//     return rest.reduce((a,b)=>a+b,0)
// }
// console.log(add(1,2,3,4,6))

let check=(arr)=>{
    
    return arr.map(a=>a+1).sort((a,b)=>a-b)
}
console.log(check([8,1,7,3,4,5,6]))