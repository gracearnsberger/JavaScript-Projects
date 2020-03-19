function addition_Function() {
    var Addition = 4 + 6;
    document.getElementById("Addition").innerHTML= "4 + 6 =" + Addition;
} 

function multiplication_Function() {
    var Multiplication = 5 * 1;
    document.getElementById("Multiplication").innerHTML= "5 * 1 =" + Multiplication;
} 

function division_Function() {
    var Division = 10 / 5;
    document.getElementById("Division").innerHTML= "10 / 5 =" + Division;
} 

function subtraction_Function() {
    var Subtraction = 12 - 2;
    document.getElementById("Subtraction").innerHTML= "12 - 2 =" + Subtraction;
} 

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Modulus").innerHTML= "25/6 has a remainder of: " +simple_Math;
}

function negation_Operator() {
    var x = 22;
    document.getElementById("Unary").innerHTML= -x;
}

function increment_Operator() {
    var x = 6;
    x++;
    document.getElementById("Increment").innerHTML= x;
}

function decrement_Operator() {
    var x = 8;
    x--;
    document.getElementById("Decrement").innerHTML= x;
}

{window.alert(Math.random()*100);}

function sqrt_Operator() {
    document.getElementById("Sqrt").innerHTML= Math.sqrt(64);
}












