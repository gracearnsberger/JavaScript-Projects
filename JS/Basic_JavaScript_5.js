document.write(typeof "Word");

function nan_Test() {
    document.getElementById("NaN").innerHTML= 0/0;
} 

function false_Test() {
    document.getElementById("False").innerHTML= isNaN('word');
} 

function true_Test() {
    document.getElementById("True").innerHTML= isNaN('6');
} 

function true_Function() {
    document.getElementById("True2").innerHTML= !(5 > 10);
} 

function nottrue_Function() {
    document.getElementById("Not").innerHTML= !(20 > 10);
} 

document.write(2E350);

document.write(-2E350);

document.write(2 > 8);

document.write(6 > 2);

console.log(2 + 2)

document.write("90" + 2);

document.write(3 == 3);

document.write(1 == 4);

{   X = 2
    Y = 2
    document.write( X === Y);
}

{   X = 2
    Y = "2"
    document.write( X === Y);
}

{   X = 2
    Y = "cat"
    document.write( X === Y);
}

{   X = 2
    Y = "two"
    document.write( X === Y);
}

document.write(5 > 6 && 7 > 10);

document.write(6 > 3 && 7 > 1);

document.write(5 > 6 || 3 > 1);

document.write(5 > 6 || 2 > 3);

