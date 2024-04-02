//create a function named addLastName()
//pass in the rest parameter
//check the length
// get the third element in the array index of 2
// remove the third element
//add the removed element to the rest of the names
//the return value is Array
// function addLastName(...names) {
//     if (names.length < 4) return 'Not enough names'
//     const thirdNames = names.splice(2, 1)
//     return names.map(name => `${name} ${thirdNames}`)
// }

// console.log(addLastName('fabi', 'ishimwe', 'olivier', 'agnes', 'hhh'))
// function combineNames(...rest){

//     let result=[];
//     for(let i=0; i<rest.length;i++){
//         rest.forEach((item)=>{
//             result.push(item[i])
//         })
        
//     }
//     return result

// }
// console.log(combineNames([1,2,3],["a","b","c"],[1,2,3]))

const arr=[1,2,3,[4,5],7];
const[a,b,c,[d,,e]]=arr;
console.log(e)
