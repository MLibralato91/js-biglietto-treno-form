


// let myAge = document.querySelector("input.age");
// let myKm = document.querySelector("input.km");

// const myPrice = 0.21;
// const juniorPrice = 0.20;
// const seniorPrice = 0.40;
// let totalPrice;



// document.querySelector("button.calcTicket").addEventListener("click", myFunctionCalc );

// function myFunctionCalc(){
//     if(myAge.value < 18){
//         totalPrice = myKm.value * myPrice - (myKm.value * myPrice * juniorPrice);
//     }
//     if(myAge.value >= 65){
//         totalPrice = myKm.value * myPrice - (myKm.value * myPrice * seniorPrice);
//     }
//     console.log(totalPrice);
// }

// Milestone 1 Terminato

let myAge = document.querySelector("input.age");
let myKm = document.querySelector("input.km");
let myName = document.querySelector("input.myName");

const myPrice = 0.21;
const juniorPrice = 0.20;
const seniorPrice = 0.40;

let totalPrice;

const ticket = document.querySelector('#ticket');
const home = document.querySelector('#home');

document.querySelector("button.calcTicket").addEventListener("click", myFunctionCalc );

function myFunctionCalc(){
    if(myAge.value < 18){
        totalPrice = myKm.value * myPrice - (myKm.value * myPrice * juniorPrice);
    }
    else
        totalPrice = myKm.value * myPrice;
    if(myAge.value >= 65){
        totalPrice = myKm.value * myPrice - (myKm.value * myPrice * seniorPrice);
    }
    else
        totalPrice = myKm.value * myPrice;
    console.log(totalPrice);
    let passenger = myName.value;
    let kilometers = myKm.value;
    ticket.classList.remove('d-none');
    home.classList.add('d-none');
    document.getElementById('yourPrice').innerHTML += ` <p> ${totalPrice} €</p>`;
    document.getElementById('passenger').innerHTML += ` <p> ${passenger} </p>`;
    document.getElementById('kilometers').innerHTML += ` <p> ${kilometers} Km</p>`;

}


document.querySelector("button.resetTicket").addEventListener("click", myFunctionReset );
document.querySelector("#ticket.button.resetTicket").addEventListener("click", myFunctionReset );
function myFunctionReset(){
    myKm.value = '';
    myAge.value= '';
    myName.value= '';
    ticket.classList.add('d-none');
    home.classList.remove('d-none');
}