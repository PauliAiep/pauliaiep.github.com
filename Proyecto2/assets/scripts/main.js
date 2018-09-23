//alert("Hola mundo JS");
//console.log("Hola mundo JS en Consola");
//DOM (Document Object Model)

//let element = document.querySelector(".fa-star");
//Los objetos dentro del DOM se conocen como Nodos

let elementList = document.querySelectorAll(".fa-star");

 elementList.forEach(function(element){
     element.addEventListener('click',function(){
//         alert("Estrellita Clickeada");
         element.classList.remove("far");
         element.classList.add("fas");
     })
 });

let closes = document.querySelectorAll(".close");
let content = document.querySelector(".content")

closes.forEach(function(close){
    close.addEventListener('click', function(ev){
        ev.preventDefault();
        content.classList.remove("animated");
        content.classList.remove("bounceInRight");
        content.classList.add("animated");
        content.classList.add("bounceOutRight");
        setTimeout(() => {
            location.href="/";
        }, 500);
        
    });
})
