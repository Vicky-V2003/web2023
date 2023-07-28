function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
  
    if (weight === '' || height === '') {
      alert('Please enter both weight and height.');
      return;
    }
  
    var bmi = weight / ((height / 100) * (height / 100));
    bmi = bmi.toFixed(2);
  
    var result = document.getElementById('result');
    result.innerHTML = 'Your BMI is ' + bmi;
  
    var category = '';
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi < 25) {
      category = 'Normal weight';
    } else if (bmi < 30) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }
  
    result.innerHTML += '<div class="bmi-category">' ++ category + '</div>';
  
    var chart = document.getElementById('chart');
    chart.innerHTML = '<h3>BMI Chart</h3>' +
      '<table class="bmi-chart-table">' +
      '<tr>' +
      '  <th>BMI</th>' +
      '  <th>Category</th>' +
      '</tr>' +
      '<tr>' +
      '  <td>&lt; 18.5</td>' +
      '  <td>Underweight</td>' +
      '</tr>' +
      '<tr>' +
      '  <td>18.5 - 24.9</td>' +
      '  <td>Normal weight</td>' +
      '</tr>' +
      '<tr>' +
      '  <td>25 - 29.9</td>' +
      '  <td>Overweight</td>' +
      '</tr>' +
      '<tr>' +
      '  <td>&gt;= 30</td>' +
      '  <td>Obese</td>' +
      '</tr>' +
      '</table>';
  }
  