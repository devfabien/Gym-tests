//create a function named addLastName()
//pass in the rest parameter
//check the length
// get the third element in the array index of 2
// remove the third element
//add the removed element to the rest of the names
//the return value is Array
function addLastName(...names) {
    if (names.length < 4) return 'Not enough names'
    const thirdNames = names[2]
    return names.filter((el)=>el!==thirdNames).map(name=>`${name} ${thirdNames}`)
}

console.log(addLastName('fabi', 'ishimwe', 'olivier', 'agnes', 'hhh'))