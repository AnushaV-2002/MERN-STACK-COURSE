//ES6 Concepts

function addname(name){
    console.log(name);
}
addname("Anusha");//it prints Anusha

//other case 
function addname(name){
    console.log(name);
}
addname();//undefined

//other way to overcome this is 
function addname(name){
    if(name==undefined){
        console.log(name="World");
    }
    else{
    console.log(name);
    }
}
addname();//but the code is mess 

//here the default parameter comes in to overcome it
function addname(name="World"){
    console.log(name);
}
addname();//world

//Template Literals

console.log("Anusha\nAkila\nHari");
let a="Anusha";
console.log(`
Anusha
Akila
Hari
${a}
`)

//let variable
//let is block scope, it can't be redeclared, it should be declared before use

//Asynchronous Javscript
//Promises
//Promises have two state Resolve and Reject
/*Example we take, fetching data from server we can do it by http request 
it is a way to get and post data to server for that Javascript use a function 
called fetch*/
fetch("https://jsonplaceholder.typicode.com/users").then((result)=>result.json()).then((data)=>console.log(data)).catch((error)=>console.log(error));
//if we have more resolve state or nested api call, so we go for Async await using variables

//Async Await
const getData=async()=>{
  const result= await fetch("https://jsonplaceholder.typicode.com/users");
  const data=await result.json();
  console.log(data);
}
getData();