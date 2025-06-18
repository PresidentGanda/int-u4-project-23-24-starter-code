let button1 = document.querySelector(".one");
let button2 = document.querySelector(".two");
let button3 = document.querySelector(".three");
let button4 = document.querySelector(".four");
let button5 = document.querySelector(".five");
let button6 = document.querySelector(".six");
let answer1 = 0;
let answer2 = 0;
let answer3 = 0;
let result = document.querySelector(".result");

button1.addEventListener("click", function() {
answer1 = 1;
});
button2.addEventListener("click", function() {
answer1 = 2;
});
button3.addEventListener("click", function() {
answer2 = 1;
});
button4.addEventListener("click", function() {
answer2 = 2;
});
button5.addEventListener("click", function() {
answer3 = 1;
// result.style.display = "block";
if(answer1 == 1 && answer2 ==2 && answer3 ==1) {
result.innerHTML = "Your sith is Darth Maul";
}
if (answer1 == 1 && answer2 == 1 && answer3 == 2){
result.innerHTML = "Your sith is Darth Vader";
}

else if(answer1 == 2 && answer2 ===1 && answer3 === 2){
result.innerHTML = "Your sith is General Grevous";
}

else if(answer1 == 2 && answer2 ===2 && answer3 === 1){
result.innerHTML = "Your sith is Count Dooku";
}
});
button6.addEventListener("click", function() {
answer3 = 2;
// result.style.display = "block";
if(answer1 == true) {
result.innerHTML = "Your sith is Darth Maul";
}
if (answer1 == 1 && answer3 == 2){
result.innerHTML = "Your sith is Darth Vader";
}

else if(answer2 ===1 && answer3 === 2){
result.innerHTML = "Your sith is General Grevous";
}

else if(answer2 ===2 && answer3 === 2){
result.innerHTML = "Your sith is Count Dooku";
}
});

// result.innerHTML = answer1;

