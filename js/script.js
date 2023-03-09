


let myAge = document.querySelector(".age");
let myKm = document.querySelector(".km");

const myPrice = 0.21;
const juniorPrice = 0.20;
const seniorPrice = 0.40;
let totalPrice;

document.getElementsByClassName("calcTicket").addEventListener("click", myFunctionCalc );

function myFunctionCalc(){
    totalPrice= myKm * myPrice;
    
}
console.log(totalPrice);

