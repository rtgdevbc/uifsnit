function summaryDetails()
{
    document.getElementById("lblName").innerHTML = document.getElementById("txtName").value;
    document.getElementById("lblMobile").innerHTML = document.getElementById("txtMobile").value;
    var optBurger = document.getElementById("burger");
    var optRoll = document.getElementById("roll");
    var chkSides1 = document.getElementById("sides1");
    var chkSides2 = document.getElementById("sides2");
    var mealCost = 0;
    var adonCost = 0;
    // var total = 0;
    var adonMeal = "";
    
    if(optBurger.checked)
    {
        document.getElementById("lblMeal").innerHTML = optBurger.value;
        mealCost = 120;
        document.getElementById("imageSrc").src = "../Images/chicken-burger.jpg";
    }
    if(optRoll.checked)
        {
            document.getElementById("lblMeal").innerHTML = optRoll.value;
            mealCost = 100;
            document.getElementById("imageSrc").src = "../Images/chicken-roll.jpg";
        }
    if(chkSides1.checked)
    {
        adonMeal += chkSides1.value + "<br>";
        adonCost = 40;
        mealCost += adonCost;
    }
    if(chkSides2.checked)
    {
        adonMeal += chkSides2.value + "<br>";
        adonCost = 60;
        mealCost += adonCost;
    }
    document.getElementById("lblAdon").innerHTML = adonMeal;
    document.getElementById("lblTotal").innerHTML = mealCost;
}
