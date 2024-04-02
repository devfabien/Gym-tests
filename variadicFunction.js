// function add(){
//     return Array.prototype.slice.call(arguments).reduce((a,b)=>a+b,0)
// }
// console.log(add(2,34))

// function add(...rest){
//     return rest.reduce((a,b)=>a+b,0)
// }
// console.log(add(1,2,3,4,6))

// const check=(arr)=> arr.filter(a=>a%2==0).sort();
// pipettes="in my top right desk drawer",gloves= "in my top left desk drawer",smallScale= "on the windowsill",bigScale= "on the experiment table",centrifuge= "under the experiment table",thermometer= "hanged up on the wall"
// console.log(check([8,1,4,5,9,6]))
const labDevice= new Map()
labDevice.set('pipettes',"in my top right desk drawer").set('gloves', "in my top left desk drawer")
.set('smallScale', "on the windowsill").set('bigScale', "on the experiment table")
.set( 'centrifuge', "under the experiment table").set('thermometer', "hanged up on the wall")
;
let device='gloves';
labDevice.delete(device);

    ;

console.log(labDevice)





