"use strict";

function calculator() {
    const nameVal = document.getElementById("name_form");
    const weightVal = document.getElementById("weight_form");
    const heightVal = document.getElementById("height_form");

    const weight = parseFloat(weightVal.value);
    const height = parseFloat(heightVal.value);

    const bmi = weight / (height * height);

    document.querySelector(".text").innerHTML = `Your name is ${nameVal.value} : your bmi is ${bmi.toFixed(1)}`;

}