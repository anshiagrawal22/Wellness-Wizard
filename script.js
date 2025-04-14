
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
}
