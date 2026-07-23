// let h2=document.querySelector('h2');
// h2.innerText=h2.innerText+"From apna college students   ";
// console.dir(h2.innerText);


// let div=document.querySelectorAll(".box");
// let idex=0;
// for(let i=0;i<div.length;i++){
//     div[i].innerText="Hello from apna college students";
// }

let newbutton=document.createElement('button');
newbutton.innerText="Click me";
 
newbutton.style.color="white";
newbutton.style.backgroundColor="red";

document.querySelector('body').prepend(newbutton);

let para=document.querySelector('.contant');
para.getAttribute('class');
para.setAttribute('class','newclass');
para.classList
para.classList.add('newclass2');