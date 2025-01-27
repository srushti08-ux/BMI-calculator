const calculateBtn = document.getElementById('calculateBtn');
const resetBtn = document.getElementById('resetBtn');
const result = document.getElementById('result');
const resetBtnContainer = document.getElementById('resetBtnContainer');

calculateBtn.addEventListener('click', () => {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    // Check if weight and height are valid numbers
    if (!isNaN(weight) && weight > 0 && !isNaN(height) && height > 0) {
        const bmi = (weight / (height * height)).toFixed(2);
        let category = '';

        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 25) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi < 30) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }

        result.innerHTML = `Your BMI is ${bmi}. Category: ${category}`;
        resetBtnContainer.style.display = 'block'; // Show reset button
    } else {
        result.innerHTML = 'Please enter valid weight and height.';
        resetBtnContainer.style.display = 'none'; // Hide reset button
    }
});

// Reset functionality
resetBtn.addEventListener('click', () => {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    result.innerHTML = '';
    resetBtnContainer.style.display = 'none'; // Hide reset button
});
