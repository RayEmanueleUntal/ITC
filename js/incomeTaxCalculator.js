// JS File for the main functionalities of Income Tax Calculator

let previousRowIndex = 1;
clearInput();

document.getElementById('calculate-button').addEventListener("click", calculateIncomeTax);
document.getElementById('clear-button').addEventListener("click", clearInput);

function calculateIncomeTax() {
    const income = parseFloat(document.getElementById('income-input').value);
    const table = document.getElementById('tax-table');
    let rowIndex;

    if (!isNaN(income)) {
        let incomeTax;

        if (income <= 250_000) {
            incomeTax = 0;
            rowIndex = 1;

        } else if (income <= 400_000) {
            incomeTax = 0.2 * (income - 250_000);
            rowIndex = 2;
        
        } else if (income <= 800_000) {
            incomeTax = 30_000 + 0.25 * (income - 400_000);
            rowIndex = 3;
        
        } else if (income <= 2_000_000) {
            incomeTax = 130_000 + 0.3 * (income - 800_000);
            rowIndex = 4;
        
        } else if (income <= 8_000_000) {
            incomeTax = 490_000 + 0.32 * (income - 2_000_000);
            rowIndex = 5;
        
        } else {
            incomeTax = 2_410_000 + 0.35 * (income - 8_000_000);
            rowIndex = 6;
        }

        let formattedIncomeTax = Number(incomeTax).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        document.getElementById('tax-output-value').textContent = formattedIncomeTax; // Updates the Income Tax
        table.rows[previousRowIndex].style.background = ''; 
        table.rows[previousRowIndex].style.color = ''; 
        previousRowIndex = rowIndex; 
        table.rows[rowIndex].style.background = '#9fa5b6';
        table.rows[rowIndex].style.color = 'white';
    }
}

function clearInput() {
    document.getElementById('income-input').value = 0;
    calculateIncomeTax();
}