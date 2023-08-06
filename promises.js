let myPromise=new Promise((resolve,reject)=>{
    let a=1+1;
    if(a==5){
        resolve(`${a} is resolved`)
    }else{
        reject(`${a} is rejected`)
    }
})
myPromise.then((res)=>console.log(res)).catch((erro)=>console.log(erro)).finally(()=>console.log('finally'))