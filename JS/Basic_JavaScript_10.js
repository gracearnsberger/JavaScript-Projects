function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

function stringFunction() {
    var str = "My name is Grace.";
    var n = str.length;
    document.getElementById("string").innerHTML = n;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var name_State = [];
    name_State[0] = "Colorado";
    name_State[1] = "Texas";
    name_State[2] = "Wyoming";
    name_State[3] = "Florida";
    document.getElementById("array").innerHTML = "I live in Colorado but I used to live in" + name_State[1] +".";
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "red";
    Musical_Instrument.price = "$900";
    Musical_Instrument.brand = "Fender";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " +
    Musical_Instrument.price + " which is a " + Musical_Instrument.brand + " brand instrument.";
}

var Y = 22;
document.write(Y);
{
    let Y = 33;
    document.write("<br>" + Y);
}
document.write("<br>" + Y);

function myFunction() {
    return Math.PI;
}
document.getElementById("math").innerHTML = myFunction();

let cat = {
    color: " black ",
    age: " 3 year old ",
    type: " short-haired ",
    name: " Luna.",
    description: function() {
        return "The cat is a " + this.color + this.type + this.age + "named" + this.name;
    }
};
document.getElementById("Cat_Object").innerHTML = cat.description();

var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 6) { break; }
    text += "The number is" + i + "<br>"
}
document.getElementById("break").innerHTML = text;

function contFunction() {
var text = "";
var i;
for (i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  text += "The number is " + i + "<br>";
}
document.getElementById("continue").innerHTML = text;
}