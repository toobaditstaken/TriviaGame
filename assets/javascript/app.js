
var number = 30;
var intervalId;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

var questions = [{
    question: "What year did the events of the first Bioshock game happen?",
    answerList: ["1960","1968","1957","1962"],
    answer: 0
},{
    question: "What is the name of the Little Sister protector?",
    answerList: ["Low Diver", "Delta Series", "Big Daddy", "Leather Golem"],
    answer: 2
},{
    question: "Splicer's got their name because of their addiction to?",
    answerList: ["Plasmids", "Adam", "Eve", "Movies"],
    answer: 1
},{
    question: "Who is the founder of Rapture?",
    answerList: ["Julie Langford", "Handsome Jack", "Andrew Ryan", "Frank Fontaine"],
    answer: 2
},{
    question: "What was the first Plasmid you received?",
    answerList: ["Electro Bolt", "Incinerate", "Insect Swarm", "Winter Blast"],
    answer: 0
},{
    question: "Bioshock is greatly infuenced by what philosophy?",
    answerList: ["Taoism", "Marxism", "Nihilism" ,"Objectivism"],
    answer: 3
},{
    question: "Rapture is a city located?",
    answerList: ["Under the sea", "In the sky", "Deep underground", "In space"],
    answer: 0
}];

$("#start").on("click", function(){
    $(this).hide();
    $("#time").html("<h2>Time Remaining: 30 Seconds</h2>" + "<br>");
    
    $("#question1").html("<h3>" + questions[0].question + "</h3>");
    $("#answer1").html("<input type = 'radio' name = 'answer1' value = '0'>" + "<label>" + questions[0].answerList[0] + "</label>" + 
    "<input type = 'radio' name = 'answer1' value='0'>" + "<label>" + questions[0].answerList[1] + "</label>" +
    "<input type = 'radio' name = 'answer1' value='0'>" + "<label>" + questions[0].answerList[2] + "</label>" +
    "<input type = 'radio' name = 'answer1' value='0'>" + "<label>" + questions[0].answerList[3] + "</label><br><br>"
    );
    $("#question2").html("<h3>" + questions[1].question + "</h3>");
    $("#answer2").html("<input type = 'radio' name = 'answer2' value = '0'>" + "<label>" + questions[1].answerList[0] + "</label>" + 
    "<input type = 'radio' name = 'answer2' value='0'>" + "<label>" + questions[1].answerList[1] + "</label>" +
    "<input type = 'radio' name = 'answer2' value='0'>" + "<label>" + questions[1].answerList[2] + "</label>" +
    "<input type = 'radio' name = 'answer2' value='0'>" + "<label>" + questions[1].answerList[3] + "</label><br><br>"
    );
    $("#question3").html("<h3>" + questions[2].question + "</h3>");
    $("#answer3").html("<input type = 'radio' name = 'answer3' value = '0'>" + "<label>" + questions[2].answerList[0] + "</label>" + 
    "<input type = 'radio' name = 'answer3' value='0'>" + "<label>" + questions[2].answerList[1] + "</label>" +
    "<input type = 'radio' name = 'answer3' value='0'>" + "<label>" + questions[2].answerList[2] + "</label>" +
    "<input type = 'radio' name = 'answer3' value='0'>" + "<label>" + questions[2].answerList[3] + "</label><br>"
    );
    $("#question4").html("<h3>" + questions[3].question + "</h3>");
    $("#answer4").html("<input type = 'radio' name = 'answer4' value = '0'>" + "<label>" + questions[3].answerList[0] + "</label>" + 
    "<input type = 'radio' name = 'answer4' value='0'>" + "<label>" + questions[3].answerList[1] + "</label>" +
    "<input type = 'radio' name = 'answer4' value='0'>" + "<label>" + questions[3].answerList[2] + "</label>" +
    "<input type = 'radio' name = 'answer4' value='0'>" + "<label>" + questions[3].answerList[3] + "</label><br><br>"
    );
    $("#question5").html("<h3>" + questions[4].question + "</h3>");
    $("#answer5").html("<input type = 'radio' name = 'answer5' value = '0'>" + "<label>" + questions[4].answerList[0] + "</label>" + 
    "<input type = 'radio' name = 'answer5' value='0'>" + "<label>" + questions[4].answerList[1] + "</label>" +
    "<input type = 'radio' name = 'answer5' value='0'>" + "<label>" + questions[4].answerList[2] + "</label>" +
    "<input type = 'radio' name = 'answer5' value='0'>" + "<label>" + questions[4].answerList[3] + "</label><br><br>"
    );
    $("#question6").html("<h3>" + questions[5].question + "</h3>");
    $("#answer6").html("<input type = 'radio' name = 'answer6' value = '0'>" + "<label>" + questions[5].answerList[0] + "</label>" + 
    "<input type = 'radio' name = 'answer6' value='0'>" + "<label>" + questions[5].answerList[1] + "</label>" +
    "<input type = 'radio' name = 'answer6' value='0'>" + "<label>" + questions[5].answerList[2] + "</label>" +
    "<input type = 'radio' name = 'answer6' value='0'>" + "<label>" + questions[5].answerList[3] + "</label><br><br>"
    );
    $("#question7").html("<h3>" + questions[6].question + "</h3>");
    $("#answer7").html("<input type = 'radio' name = 'answer7' value = '0'>" + "<label>" + questions[6].answerList[0] + "</label>" + 
    "<input type = 'radio' name = 'answer7' value='0'>" + "<label>" + questions[6].answerList[1] + "</label>" +
    "<input type = 'radio' name = 'answer7' value='0'>" + "<label>" + questions[6].answerList[2] + "</label>" +
    "<input type = 'radio' name = 'answer7' value='0'>" + "<label>" + questions[6].answerList[3] + "</label><br><br>"
    );

});

function run() {}

function decrement() {}

function stop() {}

function displayResult() {}

function keepingScore() {}

//maybe implement a reset