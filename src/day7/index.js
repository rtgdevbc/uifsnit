function Deleted() {
    // alert("Deleted\nRecord will be deleted");
    var flag = confirm("Deleted\nRecord will be deleted"); //storing result of confirm to the flag variable to do some functionality
    if(flag === true){
        // alert("Record deleted Successfully");
        // document.write("<b><font color=red>Deleted</font></b><br><a href=index.html>Back</a>");//markup can be possible we can add design and styles to the output
        // document.querySelector("p").innerText = "Deleted Successfully";
        document.querySelector("p").innerHTML = "<b><font color=red>Deleted</font></b>";
    }
    else{
        alert("Record not deleted..!");
    }
}