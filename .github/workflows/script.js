function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var weightUnit = document.getElementById('weightUnit').value;
    var height = parseFloat(document.getElementById('height').value);
    var heightUnit = document.getElementById('heightUnit').value;
    var bmi;
    var resultElement = document.getElementById('result');
  
    if (weightUnit === 'lbs') {
      // Convert pounds to kilograms
      weight *= 0.453592;
    }
  
    if (heightUnit === 'in') {
      // Convert inches to meters
      height *= 0.0254;
    } else {
      // Convert centimeters to meters
      height *= 0.01;
    }
  
    bmi = weight / (height * height);
  
    if (isNaN(bmi)) {
      resultElement.innerHTML = "Please enter valid numbers.";
    } else {
      resultElement.innerHTML = "Your BMI is: " + bmi.toFixed(2) + "<br>";
      resultElement.innerHTML += "Classification: " + getBMIClassification(bmi);
    }
  }
  
  function getBMIClassification(bmi) {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi < 24.9) {
      return "Normal weight";
    } else if (bmi < 29.9) {
      return "Overweight";
    } else {
      return "Obesity";
    }
  }
  