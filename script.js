let button1 = document.querySelector(".one");
let button2 = document.querySelector(".two");
let button3 = document.querySelector(".three");
let button4 = document.querySelector(".four");
let button5 = document.querySelector(".five");
let button6 = document.querySelector(".six");
let maul = 0;
let vader = 0;
let grevous = 0;
let dooku = 0;
let result = document.querySelector(".result");
let pic1 = document.querySelector(".mau");
let pic2 = document.querySelector(".vad");
let pic3 = document.querySelector(".gre");
let pic4 = document.querySelector(".doo");
button1.addEventListener("click", function() {
maul+=2;
vader+=2;
});
button2.addEventListener("click", function() {
grevous+=2;
dooku+=2;
});
button3.addEventListener("click", function() {
grevous++;
vader++;
});
button4.addEventListener("click", function() {
dooku ++;
maul++;
});
button5.addEventListener("click", function() {
dooku+=2;
maul+=2;
 result.style.display = "block";
if(maul > dooku && maul > vader && maul > grevous) {
result.innerHTML = "Your sith is Darth Maul";
pic1.style.display = "block";
}
else if (vader > dooku && vader > maul && vader > grevous){
result.innerHTML = "Your sith is Darth Vader";
pic2.style.display = "block";
}

else if(grevous > maul && grevous > vader && grevous > dooku){
result.innerHTML = "Your sith is General Grievous";
pic3.style.display = "block";
}

else if(dooku > vader && dooku > grevous && dooku>maul){
result.innerHTML = "Your sith is Count Dooku";
pic4.style.display = "block";
}
else
result.innerHTML = "Your sith is Darth Vader";
//pic2.style.display = "block";
});
button6.addEventListener("click", function() {
grevous+=2;
vader+=2;
 result.style.display = "block";
if(maul > dooku && maul > vader && maul > grevous) {
result.innerHTML = "Your sith is Darth Maul";
pic1.style.display = "block";
}
else if (vader > dooku && vader > maul && vader > grevous){
result.innerHTML = "Your sith is Darth Vader";
pic2.style.display = "block";
}

else if(grevous > maul && grevous > vader && grevous > dooku){
result.innerHTML = "Your sith is General Grievous";
pic3.style.display = "block";
}

else if(dooku > vader && dooku > grevous && dooku>maul){
result.innerHTML = "Your sith is Count Dooku";
pic4.style.display = "block";
}
else
result.innerHTML = "Your sith is Darth Vader";
//pic2.style.display = "block";
});


