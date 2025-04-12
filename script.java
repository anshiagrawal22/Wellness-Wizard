document.getElementById("bmiForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const height = parseFloat(document.getElementById("height").value) / 100;
    const weight = parseFloat(document.getElementById("weight").value);
  
    if (!height || !weight) {
      alert("Please enter valid height and weight!");
      return;
    }
  
    const bmi = (weight / (height * height)).toFixed(1);
    let status = "";
  
    if (bmi < 18.5) {
      status = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      status = "Normal";
    } else if (bmi >= 25 && bmi < 29.9) {
      status = "Overweight";
    } else {
      status = "Obese";
    }
  
    document.getElementById("bmiResult").textContent = `Your BMI is ${bmi} (${status})`;
    document.getElementById("workoutLink").style.display = "block";
  });
  