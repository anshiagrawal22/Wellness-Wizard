function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);
    const bmiValueElement = document.getElementById('bmi-value');
    const bmiCategoryElement = document.getElementById('bmi-category');

    if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
        bmiValueElement.textContent = "Invalid input";
        bmiCategoryElement.textContent = "";
        return;
    }

    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);
    bmiValueElement.textContent = bmi.toFixed(2);

    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    bmiCategoryElement.textContent = `Category: ${category}`;

    // Store the BMI globally so the suggest function can use it
    window.currentBMI = bmi;
}

function suggestGoalPlan() {
    const bmi = window.currentBMI;

    if (!bmi) {
        alert("Please calculate your BMI first.");
        return;
    }

    let suggestionHTML = `<h3>Suggested Plan:</h3><ul>`;
 # add the links 
    if (bmi < 18.5) {
        suggestionHTML += `
            <li><a href="fitness.html" target="_blank">Gain Weight Plan</a></li>`;
    } else if (bmi < 25) {
        suggestionHTML += `
            <li><a href="maintain-fitness.html" target="_blank">Maintain Fitness Plan</a></li>`;
    } else {
        suggestionHTML += `
            <li><a href="weight-loss.html" target="_blank">Weight Loss Plan</a></li>`;
    }

    suggestionHTML += `</ul>`;

    const suggestionDiv = document.getElementById("goal-suggestions");
    suggestionDiv.innerHTML = suggestionHTML;
    suggestionDiv.style.display = "block";
}