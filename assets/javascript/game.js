//generate random number between 19-120 for the "target number" and display
var targetNum = Math.floor(Math.random() * 120) + 19;
console.log(targetNum);

//generate random number between 1-12 for each crystal's value and assign it to each crystal
var crystal1 = Math.floor(Math.random() * 12) + 1;
console.log(crystal1);
var crystal2 = Math.floor(Math.random() * 12) + 1;
console.log(crystal2);
var crystal3 = Math.floor(Math.random() * 12) + 1;
console.log(crystal3);
var crystal4 = Math.floor(Math.random() * 12) + 1;
console.log(crystal4);

//create wins and losses counters
var wins = 0;
var losses = 0;

//When clicked, adds crystal's value to the total score. How do I pass the value and add it to the total score?
$("").click(function(){
    return("totalScore");
    console.log()
});

//comparison
if (totalScore === targetNum) {
    wins++; //add 1 to the wins counter
}else if (totalScore < targetNum) {
    //keep clicking
}else {
    losses++;

//Reset game
function myFunction(targetNum) {
    return targetNum;
}
  
document.getElementById("targetNum-text").innerHTML = myFunction(targetNum);
}


