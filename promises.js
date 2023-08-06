// let myPromise=new Promise((resolve,reject)=>{
//     let a=1+1;
//     if(a==5){
//         resolve(`${a} is resolved`)
//     }else{
//         reject(`${a} is rejected`)
//     }
// })
// myPromise.then((res)=>console.log(res)).catch((erro)=>console.log(erro)).finally(()=>console.log('finally'))

function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('Data fetched!'), 3000);
    });
  }
  
  async function getData() {
    console.log('Fetching data...');
    const result = await fetchData();
    console.log(result);
    console.log('Data fetched successfully!');
  }
  
  getData();