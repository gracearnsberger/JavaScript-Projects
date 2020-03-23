function my_Dictionary() {
    var Favorites = {
        Drink: "Pepsi",
        Food: "Bagels",
        Animal: "Raccoon",
        State: "Colorado",
        Sport: "Swimming"
    };
    delete Favorites.Drink;
    document.getElementById("Dictionary").innerHTML= Favorites.Drink;
}