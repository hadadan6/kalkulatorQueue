import { probabilityZeroCustomer } from './probabilityZeroCustomer.js';
import { averageCustomer, averageCustomerInQueue } from './averageCustomer.js';
import {
    averageTimeSpent,
    averageTimeSpentInQueue,
} from './averageTimeSpent.js';
import { trafficIntensity } from './trafficIntensity.js';
import { probabilityServerBusy } from './probabilityServerBusy.js';

const inputLambda = document.getElementById("lambda")
const inputMicro = document.getElementById("micro")
const inputServer = document.getElementById("s")
const btnHitung = document.getElementById("btn-hitung")
const btnUlang = document.getElementById("btn-ulang")
const hasil = document.getElementById("hasil")
const error = document.getElementById('error');
let spinnerHitung = document.getElementById('spinner-hitung')
let spinnerUlang = document.getElementById('spinner-reset')
let spinner = document.getElementsByClassName('spinner-border')

let lambda = 0
let micro = 0
let server = 0

inputLambda.addEventListener("change", function(event) {
    lambda = event.target.value
})
inputMicro.addEventListener("change", function(event) {
    micro = event.target.value
})
inputServer.addEventListener("change", function(event) {
    server = event.target.value
})
btnHitung.addEventListener("click", function(event) {
    event.preventDefault()

    spinnerHitung.classList.remove('d-none')

    setTimeout(() => {
        let isValid = validate()
        if(!isValid) {
            return;
        }
    
        calculate()
    
        hasil.classList.remove('d-none')
        spinnerHitung.classList.add('d-none')
    }, 500)
})

btnUlang.addEventListener("click", function(event) {
    spinnerUlang.classList.remove('d-none')
    setTimeout(() => {
        reset()
        spinnerUlang.classList.add('d-none')
    }, 500)
});

function calculate() {
    let P0 = document.getElementById("P0")
    let Wq = document.getElementById("Wq")
    let W = document.getElementById("W")
    let L = document.getElementById("L")
    let Lq = document.getElementById("Lq")
    let Ro = document.getElementById("Ro")
    let Pq = document.getElementById("Pq")

    P0.innerHTML = probabilityZeroCustomer(lambda, micro, server).toFixed(4);
    Wq.innerHTML = averageTimeSpentInQueue(lambda, micro, server).toFixed(4);
    W.innerHTML = averageTimeSpent(lambda, micro, server).toFixed(4);
    L.innerHTML = averageCustomer(lambda, micro, server).toFixed(4);
    Lq.innerHTML = averageCustomerInQueue(lambda, micro, server).toFixed(4);
    Ro.innerHTML = trafficIntensity(lambda, micro, server).toFixed(4);
    Pq.innerHTML = probabilityServerBusy(lambda, micro, server).toFixed(4);
}

function validate() {
    if(
        lambda <= 0 ||
        micro <= 0 ||
        server <= 0
    ) 
    {
        error.classList.add('show')

        stopSpinner()
        
        return false;
    }
    
    return true
}

function reset() {
    inputLambda.value = null
    inputMicro.value = null
    inputServer.value = null
    hasil.classList.add('d-none')
    error.classList.remove('show')

    stopSpinner()
}

function stopSpinner() {
    for(let i = 0; i < spinner.length; i++) {
        spinner[i].classList.add('d-none')
    }
}