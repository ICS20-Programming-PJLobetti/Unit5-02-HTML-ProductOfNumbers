// Created by: Angelo Pintilie
// Created on: June 2022
// This file contains the JS functions for index.html

"use strict"


 // This function displays all numbers from 0 up to the user number

function calculateProduct() {
  	// initialize the product to 0
	let product = 0;
	
	// get the user numbers
	let numOne = parseInt(document.getElementById('num-one').value);
	let numTwo = parseInt(document.getElementById('num-two').value);	

	// use a for loop to calculate the product of the numbers
	for (let counter = 1; counter <= numTwo; counter++) {
    product = product + numOne;
  }
  	// return the product back to html
  	document.getElementById('display-results').innerHTML = "The product is " + product + ".";
}