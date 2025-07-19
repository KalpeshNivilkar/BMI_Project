// Select elements
const weightInput = document.querySelector('.weight');
const heightInput = document.querySelector('.height');
const resultDiv = document.querySelector('.result');
const calculateBmiBtn = document.querySelector('.cal-btn');

// Function to calculate BMI
function calculateBMI(weight, heightCm) {
  const heightM = heightCm / 100;
  return (weight / (heightM * heightM)).toFixed(2);
}

// Get BMI category
function getBmiCategory(bmi) {
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 25) return 'Normal weight';
  if (bmi < 30) return 'Overweight';
  return 'Obese';
}

// On button click
function handleBMICalculation() {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);

  if (!weight || !height) {
    resultDiv.textContent = 'Please enter both weight and height.';
    return;
  }

  const bmi = calculateBMI(weight, height);
  const category = getBmiCategory(bmi);

  resultDiv.textContent = `Your BMI is ${bmi} (${category})`;
}

// Event listener
calculateBmiBtn.addEventListener('click', handleBMICalculation);
