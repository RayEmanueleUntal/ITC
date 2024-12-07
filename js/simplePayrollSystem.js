// JS File for the main functionalities of Simple Payroll System

let rowNumber = 1;

const table = document.getElementById('payroll-table');
const tbody = table.querySelector('tbody');

document.getElementById('add-entry-button').addEventListener("click", () => {
    openPopup('add-entry-section');
});

document.getElementById('remove-entry-button').addEventListener("click", () => {
    openPopup('remove-entry-section');
});

document.querySelectorAll('.operation-button.cancel-button').forEach(button => {
    button.addEventListener('click', closePopup);
});

document.getElementById('confirm-add-button').addEventListener("click", addEntry);
document.getElementById('confirm-remove-button').addEventListener("click", removeEntry);

function addEntry() {
    
    const employeeName = document.getElementById('employeeName-input').value;
    const daysWorked = document.getElementById('daysWorked-input').value;
    const dailyRate = document.getElementById('dailyRate-input').value;
    const grossPay = dailyRate * daysWorked;
    const deductionAmount = document.getElementById('deductionAmount-input').value;
    const netPay = grossPay - deductionAmount;

    var row = tbody.insertRow();
    row.insertCell(0).innerText = rowNumber;
    row.insertCell(1).innerText = employeeName;
    row.insertCell(2).innerText = daysWorked;
    row.insertCell(3).innerText = dailyRate;
    row.insertCell(4).innerText = grossPay;
    row.insertCell(5).innerText = deductionAmount;
    row.insertCell(6).innerText = netPay;

    rowNumber++;

    closePopup();

}

function removeEntry() {
    const lineNumber = parseInt(document.getElementById('employeeLineNumber-input').value);

    if (lineNumber > 0 && lineNumber < tbody.rows.length + 1) {
        tbody.deleteRow(lineNumber - 1); 
        rowNumber--;  
        updateRowNum(); 
    } else {
        alert('Invalid row number!');
    }
    closePopup();
}

function updateRowNum() {
    const rows = table.rows;
    
    for (let i = 1; i < rowNumber; i++) {
        rows[i].cells[0].innerText = i;
    }
}

// function for opening pop up
function openPopup(popupId) {
    document.getElementById(popupId).showModal();
}

// function for closing pop up
function closePopup() {
    document.getElementById('add-entry-section').close();
    document.getElementById('remove-entry-section').close();
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
    });

}