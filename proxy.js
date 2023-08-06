let obj={color:"white",fav:"coding"};
let handler={
    get(target,propName){
        console.log(propName);
        console.log(target[propName])
    }
}
let newProxy=new Proxy(obj,handler);
newProxy.fav