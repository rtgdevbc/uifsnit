function AmountChange() {
    document.getElementById("txtAmount").value = document.getElementById("rangeAmount").value;
}

function YearsChange() {
    document.getElementById("txtYears").value = document.getElementById("rangeYears").value;
}

function RateChange() {
    document.getElementById("txtRate").value = document.getElementById("rangeRate").value;
}
function emiCal() {
    // document.write("clicked");
    let principle = parseInt(document.getElementById("txtAmount").value);
    // document.write(principle);
    let period = parseInt(document.getElementById("txtYears").value*12);
    let rate = parseFloat(document.getElementById("txtRate").value/12/100);
    // document.write(principle, years, rate);
    let emiPerMonth = (principle*rate*Math.pow((1+rate),period))/(Math.pow((1+rate),period)-1);
    document.getElementById("txt-emi").innerHTML = `Your monthly EMI is <b><span class='txt-primary'>&#8377; ${Math.round(emiPerMonth)}</span></b> for ${principle} in ${period/12} years `;
}
function txtAmountChange() {
    document.getElementById("rangeAmount").value = document.getElementById("txtAmount").value;
}
function txtYearsChange() {
    document.getElementById("rangeYears").value = document.getElementById("txtYears").value;
}
function txtRateChange() {
    document.getElementById("rangeRate").value = document.getElementById("txtRate").value;
}
