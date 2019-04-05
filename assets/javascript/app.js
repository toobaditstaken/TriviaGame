
var number = 60;
var intervalId;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

var questions = [{
    question: "What year did the events of the first Bioshock game happen?",
    answerList: ["1960","1968","1957","1962"],
    answer: 0
},
{
    question: "What is the name of the Little Sister protector?",
    answerList: ["Low Diver", "Delta Series", "Big Daddy", "Leather Golem"],
    answer: 2
},
{
    question: "Splicer's got their name because of their addiction to?",
    answerList: ["Plasmids", "Adam", "Eve", "Movies"],
    answer: 1
},
{
    question: "Who is the founder of Rapture?",
    answerList: ["Julie Langford", "Handsome Jack", "Andrew Ryan", "Frank Fontaine"],
    answer: 2
},
{
    question: "What was the first Plasmid you received?",
    answerList: ["Electro Bolt", "Incinerate", "Insect Swarm", "Winter Blast"],
    answer: 0
},
{
    question: "Bioshock is greatly infuenced by what philosophy?",
    answerList: ["Taoism", "Marxism", "Nihilism" ,"Objectivism"],
    answer: 3
},
{
    question: "Rapture is a city located?",
    answerList: ["Under the sea", "In the sky", "Deep underground", "In space"],
    answer: 0
}];

$("#start").on("click", function(){
    $(this).hide();
    $("#time").html("<h2>Time Remaining: 60 Seconds</h2>" + "<br>");
    run();
    $("#question1").html("<h3>" + questions[0].question + "</h3>");
    $("#answer1").html("<input type = 'radio' name = 'answer1' value = '0'>" + "<label>" + questions[0].answerList[0] + "</label>" + 
    "<input type = 'radio' name = 'answer1' value='0'>" + "<label>" + questions[0].answerList[1] + "</label>" +
    "<input type = 'radio' name = 'answer1' value='0'>" + "<label>" + questions[0].answerList[2] + "</label>" +
    "<input type = 'radio' name = 'answer1' value='0'>" + "<label>" + questions[0].answerList[3] + "</label><br>"
    );
    $("#question2").html("<h3>" + questions[1].question + "</h3>");
    $("#answer2").html("<input type = 'radio' name = 'answer2' value = '0'>" + "<label>" + questions[1].answerList[0] + "</label>" + 
    "<input type = 'radio' name = 'answer2' value='0'>" + "<label>" + questions[1].answerList[1] + "</label>" +
    "<input type = 'radio' name = 'answer2' value='0'>" + "<label>" + questions[1].answerList[2] + "</label>" +
    "<input type = 'radio' name = 'answer2' value='0'>" + "<label>" + questions[1].answerList[3] + "</label><br>"
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
    "<input type = 'radio' name = 'answer4' value='0'>" + "<label>" + questions[3].answerList[3] + "</label><br>"
    );
    $("#question5").html("<h3>" + questions[4].question + "</h3>");
    $("#answer5").html("<input type = 'radio' name = 'answer5' value = '0'>" + "<label>" + questions[4].answerList[0] + "</label>" + 
    "<input type = 'radio' name = 'answer5' value='0'>" + "<label>" + questions[4].answerList[1] + "</label>" +
    "<input type = 'radio' name = 'answer5' value='0'>" + "<label>" + questions[4].answerList[2] + "</label>" +
    "<input type = 'radio' name = 'answer5' value='0'>" + "<label>" + questions[4].answerList[3] + "</label><br>"
    );
    $("#question6").html("<h3>" + questions[5].question + "</h3>");
    $("#answer6").html("<input type = 'radio' name = 'answer6' value = '0'>" + "<label>" + questions[5].answerList[0] + "</label>" + 
    "<input type = 'radio' name = 'answer6' value='0'>" + "<label>" + questions[5].answerList[1] + "</label>" +
    "<input type = 'radio' name = 'answer6' value='0'>" + "<label>" + questions[5].answerList[2] + "</label>" +
    "<input type = 'radio' name = 'answer6' value='0'>" + "<label>" + questions[5].answerList[3] + "</label><br>"
    );
    $("#question7").html("<h3>" + questions[6].question + "</h3>");
    $("#answer7").html("<input type = 'radio' name = 'answer7' value = '0'>" + "<label>" + questions[6].answerList[0] + "</label>" + 
    "<input type = 'radio' name = 'answer7' value='0'>" + "<label>" + questions[6].answerList[1] + "</label>" +
    "<input type = 'radio' name = 'answer7' value='0'>" + "<label>" + questions[6].answerList[2] + "</label>" +
    "<input type = 'radio' name = 'answer7' value='0'>" + "<label>" + questions[6].answerList[3] + "</label><br><br>"
    );

    $("#submit").html("<button id = 'done' class='btn'>Done</button>");

    $("#done").on("click", function() {
        keepingScore();
        displayResult();
    });
});

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000)
}

function decrement() {
    number--;
    $("#time").html("<h2>Time Remaining: " + number + " Seconds</h2>" + "<br>")

    if (number === 0) {
        stop();
        keepingScore();
        displayResult();
    }
}

function stop() {
    clearInterval(intervalId);
}

function displayResult() {
    $("#time").hide();
    $("#question1").hide();
    $("#question2").hide();
    $("#question3").hide();
    $("#question4").hide();
    $("#question5").hide();
    $("#question6").hide();
    $("#question7").hide();
    $("#answer1").hide();
    $("#answer2").hide();
    $("#answer3").hide();
    $("#answer4").hide();
    $("#answer5").hide();
    $("#answer6").hide();
    $("#answer7").hide();
    $("#submit").hide();

    $("#resultsMessage").html("<h2>A man choses, A slave obeys.</h2>");
    $("#correct").html("Correct answers: " + correctAnswers);
    $("#incorrect").html("Incorrect answers: " + incorrectAnswers);
    $("#unanswered").html("unanswered: " + unanswered);
}

function keepingScore() {
    var userChoice1 = $("input[name='answer1']:checked").val();
    var userChoice2 = $("input[name='answer2']:checked").val();
    var userChoice3 = $("input[name='answer3']:checked").val();
    var userChoice4 = $("input[name='answer4']:checked").val();
    var userChoice5 = $("input[name='answer5']:checked").val();
    var userChoice6 = $("input[name='answer6']:checked").val();
    var userChoice7 = $("input[name='answer7']:checked").val();

    if (userChoice1 === undefined) {
        unanswered++;
    }
    else if (userChoice1 == questions[0].answer) {
        correctAnswers++;
    }
    else {
        incorrectAnswers++
    }

    if (userChoice2 === undefined) {
        unanswered++;
    }
    else if (userChoice2 == questions[1].answer) {
        correctAnswers++;
    }
    else {
        incorrectAnswers++
    }

    if (userChoice3 === undefined) {
        unanswered++;
    }
    else if (userChoice3 == questions[2].answer) {
        correctAnswers++;
    }
    else {
        incorrectAnswers++
    }

    if (userChoice4 === undefined) {
        unanswered++;
    }
    else if (userChoice4 == questions[3].answer) {
        correctAnswers++;
    }
    else {
        incorrectAnswers++
    }

    if (userChoice5 === undefined) {
        unanswered++;
    }
    else if (userChoice5 == questions[4].answer) {
        correctAnswers++;
    }
    else {
        incorrectAnswers++
    }

    if (userChoice6 === undefined) {
        unanswered++;
    }
    else if (userChoice6 == questions[5].answer) {
        correctAnswers++;
    }
    else {
        incorrectAnswers++
    }

    if (userChoice7 === undefined) {
        unanswered++;
    }
    else if (userChoice7 == questions[6].answer) {
        correctAnswers++;
    }
    else {
        incorrectAnswers++
    }
}

//maybe implement a reset