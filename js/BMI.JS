function calculateBMI() {
  var username = document.getElementById("username").value;
  var height = parseFloat(document.getElementById("height").value);
  var heightUnit = document.getElementById("heightUnit").value;
  var weight = parseFloat(document.getElementById("weight").value);
  var weightUnit = document.getElementById("weightUnit").value;
  
  // 欄位必填
  if (username === "" || isNaN(height) || isNaN(weight)) {
      alert("請填寫所有欄位");
      return;
  }

  // 單位轉換
  if (heightUnit === "cm") {
      height /= 100; 
  } else if (heightUnit === "in") {
      height *= 0.0254; 
  }
  
  if (weightUnit === "lb") {
      weight *= 0.453592; 
  }
  
  // 體重指數
  var bmi = weight / (height * height);
  
  // BMI範圍
  var weightStatus;
  if (bmi < 18.5) {
      weightStatus = "過輕";
  } else if (bmi >= 18.5 && bmi < 24.9) {
      weightStatus = "適中";
  } else if (bmi >= 24.9 && bmi < 29.9) {
      weightStatus = "過重";
  } else {
      weightStatus = "過胖";
  }
  
  document.getElementById("result").innerHTML = username + "，您的 BMI 是: " + bmi.toFixed(2) + "，您的體重狀況是: " + weightStatus;
}