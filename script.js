let currentBMI = null;

function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const bmiValue = document.getElementById("bmi-value");
    const bmiCategory = document.getElementById("bmi-category");

    if (!weight || !height || weight <= 0 || height <= 0) {
        bmiValue.textContent = "--";
        bmiCategory.textContent = "Please enter valid weight and height.";
        currentBMI = null;
        return;
    }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    currentBMI = bmi;

    bmiValue.textContent = bmi.toFixed(2);

    if (bmi < 18.5) {
        bmiCategory.textContent = "Category: Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        bmiCategory.textContent = "Category: Normal (Fit)";
    } else {
        bmiCategory.textContent = "Category: Overweight";
    }
}

function suggestGoalPlan() {
    if (currentBMI === null) {
        alert("Please calculate your BMI first.");
        return;
    }

    if (currentBMI < 18.5) {
        window.location.href = "underweight page/index.html";
    } else if (currentBMI >= 18.5 && currentBMI < 25) {
        window.location.href = "fit page/Fitness.html";
    } else {
        window.location.href = "overweight page/ow.html";
    }
}
