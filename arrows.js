// let check=()=> ({user:"olivier"});

// console.log(check())
// const check=(arr)=> arr.map((a)=>a%2==0 ?a*2:a)

// console.log(check([1,2,3,4,5,6]))

// function combineNames(...rest) {
//     if (rest.length > 1) {
//         let b = rest.pop();
//         let c = b.toString().toUpperCase();
//         return `${rest.join(' ')} ${c}`;
//     }
//     else {
//         return rest.toString()
//     }
// }
// console.log(combineNames('dd', 'gg', 'rr'));
function hh(...rest) {
    if(rest.length ===1) return rest.join('')
    const [lst, ...ret]=rest.reverse()
  return  `${ret.reverse().join(" ")} ${lst.toUpperCase()} `

    // if (rest.length > 1) {

    //     const last = rest.slice(-1).toString().toUpperCase();
    //     rest.pop();
    //     return `${rest.join(' ')} ${last}`
    // } else {
    //     return rest.toString()
    // }
}
console.log(hh('dd', 'gg', 'rr'));