import {getFibonacci} from './fibonacci.js';

const btn = document.querySelector("#calculate");

btn.addEventListener("click", (e) => {
    // Proper way would be to use null coalescing, sadly it's not fully supported in FF yet
    const txt = (document.querySelector("#n").value) ? document.querySelector("#n").value : 7;
    console.log(txt);
    const result = getFibonacci(txt);
    console.log(result);

    document.querySelector("#result").innerHTML = result;
});