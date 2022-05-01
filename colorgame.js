var numsquare = 6;
var colors = generateRandomColors(numsquare);
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDIsplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var buttons = document.querySelectorAll(".buttons")

for (var i = 0;  i < buttons.length; i++){
buttons[i].addEventListener("click", function(){
    buttons[0].classList.remove("selected");
    buttons[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "Easy" ? numsquare = 3: numsquare = 6;
    reset();
    // u can write that ^ OR this 
    // if (this.textContent === "easy"){
    //     numsquare = 3;
    // }else {
    //     numsquare = 6;
    // }
    
    // figure out how many squares to show
    // pick new colors
    // pick a new pickedColor
    // update page to reflect changes 

});
}

function reset(){
    colors = generateRandomColors(numsquare);
// pick a new random color from array
pickedColor = pickColor();
// change colorDisplay to match pickedColor
colorDIsplay.textContent = pickedColor;
resetButton.textContent = "new colors";
messageDisplay.textContent = ""; 
// change colors of squares
for(var i = 0; i < square.length; i++){
    if(colors[i]){
       square[i].style.display="block"; 
        square[i].style.backgroundColor = colors[i];
    } 
    else {
        square[i].style.display="none";
    }
}
h1.style.backgroundColor = "steelblue";
}
// easyBtn.addEventListener("click", function(){
//     hardBtn.classList.remove("selected");
//      easyBtn.classList.add("selected");
//      numsquare = 3
//      colors = generateRandomColors(numsquare);
//      pickedColor = pickColor();
//      colorDIsplay.textContent = pickedColor;
//     for(var i =0; i< square.length; i++){
//       if(colors[i]) {
//           square[i].style.backgroundColor = colors[i]; 
//       } else{
//           square[i].style.display ="none";
//       } 
//     } 

// });

// hardBtn.addEventListener("click", function(){
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numsquare = 6;
//     colors = generateRandomColors(numsquare);
//      pickedColor = pickColor();
//      colorDIsplay.textContent = pickedColor;
//     for(var i =0; i< square.length; i++){
//           square[i].style.backgroundColor = colors[i]; 
//           square[i].style.display ="block";
//       } 
// });

resetButton.addEventListener("click", function(){
// //   generate all new colors
// colors = generateRandomColors(numsquare);
// // pick a new random color from array
// pickedColor = pickColor();
// // change colorDisplay to match pickedColor
// colorDIsplay.textContent = pickedColor;
// this.textContent = "new colors" 
// messageDisplay.textContent = ""; 
// // change colors of squares
// for(var i = 0; i< square.length; i++){
//     square[i].style.backgroundColor = colors[i];
// }
// h1.style.backgroundColor = "steelblue";
reset();
});

colorDIsplay.textContent = pickedColor;
 
for (var i = 0; i < square.length; i++){
    // add initial colors to suqares
    square[i].style.backgroundColor = colors[i];
    // add click listeners to squares
    square[i].addEventListener("click", function(){
    //    grab color of clicked square
     var clickedColor = this.style.backgroundColor;
     if (clickedColor === pickedColor) {
        messageDisplay.textContent = "correct!";
        resetButton.textContent = "Play Again?"
        changeColor(clickedColor);
        h1.style.backgroundColor = clickedColor;
     } else {
         this.style.backgroundColor = "#232323";
         messageDisplay.textContent = "Try Again!!!"
     }
    });
}

function changeColor(color){
for (var i = 0; i < colors.length ; i++){
    square[i].style.backgroundColor = color;
}
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random]
}

function generateRandomColors(num){
    // make an array
    var arr=[]
    // add num random colors to array
    for(var i = 0; i < num; i++){
    // get random color and push into array
    arr.push(randomColor())
    }
    // return that array
    return arr;
}

 function randomColor(){
    //  pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //  pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //  pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    // return "rgb(r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
 }