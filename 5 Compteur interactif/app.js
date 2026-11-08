const tocount = document.querySelector("#counter")
const increase = document.querySelector("#toIncrease")
const decrease = document.querySelector("#toDecrease")
const rest = document.querySelector("#toRest")


let count = 0;
increase.addEventListener("click" , function () {
     count++;
     tocount.textContent = count;

     if (count === 10) {
         tocount.style.color = "red"
     }
});

let countdown = count ;
decrease.addEventListener("click", function (){
       count-- ;
       tocount.textContent = count ;
});

rest.addEventListener("click", function (){
      tocount.textContent = 0
});

