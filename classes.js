// function checkSet(arr){
//     return [...new Set(arr)]
// }
// let a=checkSet.name="me";
// console.log(checkSet([1,2,4,5,3,2,1]));


class Animal{
constructor(sound="Mooo"){
this.sound=sound;
}
    speak(){
console.log(this.sound)
    }
    eat(){
console.log('it eats')
    }

}
class Dog extends Animal{
    constructor(sound="Woof"){
        super(sound)
       }
}
class Cat extends Animal{
    constructor(sound='meow'){
        super(sound);
    }
}
let cow=new Animal();
let cat=new Cat();
let dog= new Dog();
cat.speak()
