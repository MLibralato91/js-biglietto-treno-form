


let myAge = document.querySelector("input.age");
let myKm = document.querySelector("input.km");

const myPrice = 0.21;
const juniorPrice = 0.20;
const seniorPrice = 0.40;
let totalPrice;



document.querySelector("button.calcTicket").addEventListener("click", myFunctionCalc );

function myFunctionCalc(){
    if(myAge.value < 18){
        totalPrice = myKm.value * myPrice - (myKm.value * myPrice * juniorPrice);
    }
    if(myAge.value >= 65){
        totalPrice = myKm.value * myPrice - (myKm.value * myPrice * seniorPrice);
    }
    console.log(totalPrice);
}


