// JS File for the main functionalities of Conversion Calculator

function convert(arg) {
    const source = parseFloat(document.getElementById(arg).value);
    if (!isNaN(source)) {
        
        // Celsius to Fahrenheit
        if (arg === 'celsius-input') {
            const fahrenheit = (source * 9/5) + 32;
            document.getElementById('fahrenheit-input').value = fahrenheit.toFixed(2);
        }

        // Fahrenheit to Celsius
        else if (arg === 'fahrenheit-input') {
            const celsius = (source - 32) * 5/9;
            document.getElementById('celsius-input').value = celsius.toFixed(2);
        }

        // Meters to Feet
        else if (arg === 'meters-input') {
            const feet = source * 3.281;
            document.getElementById('feet-input').value = feet.toFixed(2);
        }

        // Feet to Meters
        else if (arg == 'feet-input') {
            const meters = source / 3.281;
            document.getElementById('meters-input').value = meters.toFixed(2);
        }

    }
}