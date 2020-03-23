function Ride_Function() {
    var Height, Can_Ride;
    Height= document.getElementById("Height").Value;
    Can_Ride= (Height < 52)? "You are too short": "You are tall enough";
    document.getElementById("Ride").innerHTML= Can_Ride + "to ride.";
}

function People(Name, Age, Year, Gender) {
    this.People_Name = Name;
    this.People_Age = Age;
    this.People_Year = Year;
    this.People_Gender = Gender;
}

var Grace = new People("Grace", "19", "2001", "Female");
var Sharon = new People("Sharon", "59", "1961", "Female");
var Luke = new People("Luke", "22", "1998", "Male");

function myFunction() {
    document.getElementById("New_and_This").innerHTML=
    "My name is" + Grace.People_Name + "I was born in" + Grace.People_Year +
    " and I am a " + Grace.People_Gender;
}


function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count () {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}

;