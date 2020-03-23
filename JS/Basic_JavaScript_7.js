var X = 10;
function Add_Numbers_1() {
    document.write(20 + X +"<br>");
}
function Add_Numbers_2() {
    document.write(X + 100);
}
Add_Numbers_1();
Add_Numbers_2();


function Subtract_Numbers_1() {
    var X = 12;
    document.write(2 + X +"<br>");
}
function Subtract_Numbers_2() {
    document.write(X + 120);
}
Subtract_Numbers_1();
Subtract_Numbers_2();

function myFunction() {
    if (new Date().getHours() < 18) {
        document.getElementById("time").innerHTML = "How are you today?";
    }
}

if (12 > 10) {
    document.write("The number on the left is bigger.");
}

function Age_Function() {
    var Agenum = document.getElementById("Age").value;
    if (Agenum >= 18) {
        document.getElementById("How_old_are_you?").innerHTML = "You are old enough to vote.";
    }
    else if (Agenum < 18) {
        document.getElementById("How_old_are_you?").innerHTML = "You are not old enough to vote.";
    }
}