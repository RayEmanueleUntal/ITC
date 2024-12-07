// JS File for the main functionalities of Factorial, Sum, and Average Calculator

let factorial_answer = document.getElementById('factorial-answer');
let sum_answer = document.getElementById('sum-answer');
let average_answer = document.getElementById('average-answer');

let factorial_solution = document.getElementById('factorial-solution');
let sum_solution = document.getElementById('sum-solution');
let average_solution = document.getElementById('average-solution');

document.getElementById("calculate-button").addEventListener("click", calculate);
document.getElementById("clear-button").addEventListener("click", clearInput);

function calculate() {
    const integer = parseInt(document.getElementById('integer-input').value); 

    if (isNaN(integer) || integer < 0) {
        alert("Please enter a valid non-negative integer.");
        return;
    }

    // nth Factorial
    let i = 1;
    var factorial = 1;

    if (integer === 0) {
        factorial_solution.textContent = '0! = 1';
    } 
    else {
        var factorial_string = '';
        while (i <= integer) {
            factorial *= i;
            factorial_string += `${i} x `;
            i++;
        }
        factorial_string = factorial_string.slice(0, -2); // Gets rid of the " x" in the last part of the string
        factorial_solution.textContent = `${integer}! = ${factorial_string} = ${factorial}`;
    }

    factorial_answer.textContent = factorial;   
  

    // Sum of the First n Numbers

    if (integer === 0) {
        sum_answer.textContent = '0';
        sum_solution.textContent = '0';
    }

    else {
        i = 1;
        var sum = 0;
        var sum_string = '';
        do {
            sum += i;
            sum_string += `${i} + `;
            i++;
        } while (i <= integer);
        sum_answer.textContent = sum;
        sum_string = sum_string.slice(0, -2);
        sum_solution.textContent = `${sum_string} = ${sum}`;
    }

    // Average of the First n Numbers
    
    if (integer > 0) {
        var average = 0;
        var average_string = '';
        for (i = 1; i <= integer; i++) {
            average += i;
            average_string += `${i} + `;
        }
        average /= integer;
        average_answer.textContent = average;
        average_string = average_string.slice(0, -2);
        average_solution.textContent = `(${average_string}) / ${integer} = ${average}`;
    }   
    else {
        average_answer.textContent = '...';
        average_solution.textContent = '...';
    }

}


function clearInput(){
    document.getElementById('integer-input').value = 0;
    calculate();
}