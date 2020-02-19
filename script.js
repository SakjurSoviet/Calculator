let name = "Raffaele";
let age = 13;

console.log(6577867324723);
console.log(5 * 8886374);
console.log("Hi " + name + " Ye");
console.log(typeof ("HI"));
console.log("hi " + 7);
console.log("Bye, Mr." + name);
console.log("I'm " + age + " years old");
console.log("I was born in " + (2019 - age));
//alert("Hello");
//alert(26271783678123);

//--------------------------------------------------------------

//document.querySelector("button").onclick = function () {
//console.log(1238721637)
//};

//document.querySelector("button.click").onclick = function () {
//console.log(11199291)
//};

//--------------------------------------------------------------

document.querySelector("input.num1").onclick = function () {
	console.log("wow")
};

document.querySelector("input.num2").onclick = function () {
	console.log("yee")
};

document.querySelector("button.add").onclick = function () {
	let num1 = parseInt(document.querySelector("input.num1").value);
	let num2 = parseInt(document.querySelector("input.num2").value);
	alert(num1 + num2);
};

document.querySelector("button.subtract").onclick = function () {
	let num1 = parseInt(document.querySelector("input.num1").value);
	let num2 = parseInt(document.querySelector("input.num2").value);
	alert(num1 - num2);
};

document.querySelector("button.multiply").onclick = function () {
	let num1 = parseInt(document.querySelector("input.num1").value);
	let num2 = parseInt(document.querySelector("input.num2").value);
	alert(num1 * num2);
};

document.querySelector("button.divide").onclick = function () {
	let num1 = parseInt(document.querySelector("input.num1").value);
	let num2 = parseInt(document.querySelector("input.num2").value);
	alert(num1 / num2);
};
