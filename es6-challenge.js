//create a function that receives array
//check for even numbers and assign them to a variable do the same with odd numbers
//join them in one array 

function combineNames(arr){
    let even = arr.filter((value)=>value%2==0).sort().join('').toString();
    let odd = arr.filter((value)=>value%2!=0).sort().join('');
    return [`${even}, ${odd}`];
}
console.log(combineNames([1,4,3,2,5,6,7,8]))