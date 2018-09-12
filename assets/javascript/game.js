function generateRandom(higher, lower) {
    return Math.floor(Math.random() * higher) + lower;
    console.log(generateRandom);
}

//generate random number between 19-120 for the "target number" and display
var targetNum;
console.log(targetNum);


//generate random number between 1-12 for each crystal's value and assign it to each crystal
var crystal1;
var crystal2;
var crystal3;
var crystal4;

//create wins and losses counters
var wins = 0;
var losses = 0;
var totalScore = 0;

// Initial page load reset
reset();

//When clicked, adds crystal's value to the total score. How do I pass the value and add it to the total score?
$("#crystal1").click(function(){
    //return("totalScore");
    totalScore += crystal1;
    console.log(totalScore);
    scoreUpdate();
});
$("#crystal2").click(function(){
    //return("totalScore");
    totalScore += crystal2;
    console.log(totalScore);
    scoreUpdate();
});
$("#crystal3").click(function(){
    //return("totalScore");
    totalScore += crystal3;
    console.log(totalScore);
    scoreUpdate();
});
$("#crystal4").click(function(){
    //return("totalScore");
    totalScore += crystal4;
    console.log(totalScore);
    scoreUpdate();
});
//comparison


//Reset game
function reset() {
    targetNum = generateRandom(120, 19);
    crystal1 = generateRandom(12, 1);
    crystal2 = generateRandom(12, 1);
    crystal3 = generateRandom(12, 1);
    crystal4 = generateRandom(12, 1);
    totalScore = 0;
}
function scoreUpdate(){
    $("#totalScore").html(totalScore);
    if (totalScore === targetNum) {
        wins++; //add 1 to the wins counter
        reset();
    }else if (totalScore > targetNum) {
        losses++; //add 1 to the losses counter
        reset();
    }
    $("#targetNum").html(targetNum);
    $("#wins").html(wins);
    $("#losses").html(losses);
}

// document.getElementById("totalScore").innerHTML = totalScore;
// document.getElementById("targetNum").innerHTML = targetNum;
// document.getElementById("wins").innerHTML = "Wins: " + wins;
// document.getElementById("losses").innerHTML = "Losses: " + losses;

$("#targetNum").html(targetNum);
$("#wins").html(wins);
$("#losses").html(losses);