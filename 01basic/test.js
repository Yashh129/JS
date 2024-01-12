function sum(...num1){
    let tsum=0;
  for(let i of num1){
    tsum+=i;
  }
  return tsum;
}
// console.log(sum(200,300,400));

const user ={
    username:"Rahul",
    price:199
}

function handleobject({username:a,price}){
    return `usernmae is ${a} and price is ${price}`
}
// console.log(handleobject(user));

// function fun1(){
   
//     function fun2(){
//         console.log(a);
//         console.log(b);
//     }
//     let b=20;
//     fun2()
// }

// fun1()
// const fun1=  function() {
//     console.log(this);
// }
// fun1()
// const fun=  () => {
//     console.log(this);
// }
// fun()

(() =>{
      console.log("Hello");
})();

((name) =>{
    console.log("Hello " +name );
})("Rahul")





