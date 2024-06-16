function bmiCal() {
    var weight = document.getElementById("txtKg").value;
    var height = document.getElementById("txtCm").value;
    height = height/100;
    var bmi = Math.round(weight/(height*height));
    document.getElementById("yourBMI").innerHTML=`your BMI is: ${bmi}`;
}
