function full_Sentence() {
    var part_1 = "My";
    var part_2 = "name";
    var part_3 = "is";
    var part_4 = "Grace";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27, 33);
    document.getElementById("Slice").innerHTML = Section;
}

function upperFunction() {
    var str = "Hello!";
    var res = str.toUpperCase();
    document.getElementById("upper").innerHTML = res;
}

function searchFunction() {
    var str = "Apples are a delicious fruit"; 
    var n = str.search("delicious");
    document.getElementById("search").innerHTML = n;
}

function string_Method() {
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X =34958099.387498219;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);

}

function fixedFunction() {
    var num = 8.789769;
    var n = num.toFixed(2);
    document.getElementById("fixed").innerHTML = n;
}

function valueofFunction() {
    var num = 20;
    var n = num.valueOf()
    document.getElementById("value").innerHTML = n;
}