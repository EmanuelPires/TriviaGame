//listen to a button click event.
var timerNumber = 20;
var intervalId;
var numCorrect = 0;
var numIncorrect = 0;
var unanswered;
var radioVal;

$(document).ready(function() {
  $(".quiz").hide();

  $(".start").on("click", function() {
    $("div.startButton").hide();
    $(".quiz").show();
    $(".timer").html(timerNumber);

    intervalId = setInterval(decrement, 1000);

    function decrement() {
      $(".timer").html(timerNumber);
      timerNumber--;
      if (timerNumber === -1) {
        grade();
        clearInterval(intervalId);
      }
    }

    //I want to animate the Done button once
    //every question has been answered.
    var isItDone = [];

    $("input").on("click", function() {
      isItDone.push($(this).attr("value"));
      console.log(isItDone);
      if (isItDone.length > 3) {
        $(".done").animate({ opacity: "1" });
      }
    });

    //-------------------------------------------------
    $(".done").on("click", grade);

    //Function to grade trivia.
    function grade() {
      $("input").each(function() {
        if ($(this).prop("checked") && $(this).attr("value") === "correct") {
          numCorrect++;
          console.log(numCorrect);
        }
        if ($(this).prop("checked") && $(this).attr("value") === "incorrect") {
          numIncorrect++;
          console.log(numIncorrect);
        }
      });
      answered = numCorrect + numIncorrect;
      unanswered = 4 - answered;
      console.log(unanswered);
      $(".quiz").html(
        "<h2>All Done!</h2>" +
          "<h2>Correct Answers: " +
          numCorrect +
          "</h2>" +
          "<h2>Incorrect Answers: " +
          numIncorrect +
          "</h2>" +
          "<h2>Unanswered: " +
          unanswered +
          "</h2>"
      );
    }
  });
});

// $(document).ready(function() {
//   $(".quiz").hide();

//   $(".start").on("click", function() {
//     //button click launches javascript that creates html elements
//     $("div.startButton").remove();
//     $(".quiz").show();
//     $("#timer").html(timerNumber);

//     //timer runs, 30 seconds
//     intervalId = setInterval(decrement, 1000);

//     function decrement() {
//       $("#timer").html(timerNumber);
//       timerNumber--;
//       if(timerNumber===0){
//         clearInterval(intervalId);
//       }
//     }

//     //Create function to grade trivia

//     function grade() {
//       var whichType =0;
//       for(var i = 1; i <4; i++) {
//         var radios =document.getElementsByName('question'+i);
//         for (var j=0; j < radios.length; j++) {
//           var radio = radios[j];
//           if(radio.value=="correct" && radio.checked) {
//             whichType++;
//         }
//       }
//     }

//     $(".done").on("click", grade);
//   };
// }

//game asks a question  and has answer options radio input.
//you can only choose one option per question.

//done button checks if answers are right
//or timer ends game checks if answers are right

// displays correct answers
// incorrect answeres
//unanswered
