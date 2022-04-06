//Grab the form values when the user submits the form
//make, model, year
//use those values to create a car
//add the car to the wishlist
//update the DOM

import Wishlist from "./Wishlist";
let wishList = new Wishlist();


let form = document.querySelector("#submitForm");

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    let make = document.querySelector("#makeInput")
    let model = document.querySelector("#modelInput")
    let year = document.querySelector("#yearInput")

    wishList.add(make.value, model.value, year.value);
    
    console.log(make.value, model.value, year.value);

    make.value="";
    model.value="";
    year.value="";
})