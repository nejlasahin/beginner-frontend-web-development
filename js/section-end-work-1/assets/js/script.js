let counter = 0;
let counterDOM = document.querySelector('#counter');
counterDOM.innerHTML = counter;
let increaseDOM = document.querySelector('#increase');
let decreaseDOM = document.querySelector('#decrease');

increaseDOM.addEventListener("click", function(){
    counter++;
    counterDOM.innerHTML = counter;
})

decreaseDOM.addEventListener("click", function(){
    counter--;
    counterDOM.innerHTML = counter;
})