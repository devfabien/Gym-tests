// function add(){
//     return Array.prototype.slice.call(arguments).reduce((a,b)=>a+b,0)
// }
// console.log(add(2,34))

// function add(...rest){
//     return rest.reduce((a,b)=>a+b,0)
// }
// console.log(add(1,2,3,4,6))

const check=(arr)=> arr.filter(a=>a%2==0).sort();

console.log(check([8,1,4,5,9,6]))