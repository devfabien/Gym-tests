// let check=()=> ({user:"olivier"});

// console.log(check())
const check=(arr)=> arr.map((a)=>a%2==0 ?a*2:a)

console.log(check([1,2,3,4,5,6]))