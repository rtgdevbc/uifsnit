function Summary()
{   
    // var advamount = document.getElementById("advamount").innerHTML;
    var advanceAmount = document.getElementById("Advance").value;
    var errorMsg =  document.getElementById("adv");
    if(advanceAmount<=0){
        errorMsg.innerHTML ="Advance amount is mandatory or amount should be in positive";
        // document.getElementById("advamount").innerHTML = 0;
    }
    else{
        errorMsg.innerHTML ="";
        document.getElementById("advamount").innerHTML ="";
    }
    var Days = document.getElementById("txtDays").value;

    var Persons = document.getElementById("txtPersons").value;
    document.getElementById("lblName").innerHTML= document.getElementById("txtName").value;
    document.getElementById("lblDate").innerHTML= document.getElementById("txtDate").value;
    document.getElementById("lblDays").innerHTML= Days;
    document.getElementById("lblPersons").innerHTML= Persons;
    var roomType1 = document.getElementById("roomType1");
    var roomCost = 0;
    var AmenitiesCost = 0;
    var totalCost = 0;
    if(roomType1.checked)
        {
            document.getElementById("lblRoom").innerHTML = roomType1.value;
            roomCost = 2500;
        }
    var roomType2 = document.getElementById("roomType2");
    if(roomType2.checked)
            {
                document.getElementById("lblRoom").innerHTML = roomType2.value;
                roomCost = 4000;
            }
    var amenities = "";
    var ams1 = document.getElementById("Ams1");
    var ams2 = document.getElementById("Ams2");
    if(ams1.checked){
        amenities += ams1.value + ",";
        AmenitiesCost += 1000;

    }
    if(ams2.checked)
    {
        amenities += ams2.value + "," ;
        AmenitiesCost += 300;
    }
    document.getElementById("advamount").innerHTML = advanceAmount;
    document.getElementById("lblAmenities").innerHTML=amenities;
    totalCost = (roomCost + AmenitiesCost) * Days  - advanceAmount;
    if(Persons>2)
    {
        totalCost += (Persons - 2) * 1000;
    }
    document.getElementById("blnamount").innerHTML = totalCost;
}