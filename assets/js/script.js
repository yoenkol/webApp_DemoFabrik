var turn=0;


$(function() {
  //Hauptfunktion
});

$(".start").click(function() {
  console.log( "Start" );
  $(".quiz_start").fadeOut(function() {
    startQuiz();  
});
   
});

function startQuiz() {
  points = 0;
  currentQuestionNo = 0;
  showNextQuestion();
  $("#question").fadeIn(()=>{document.getElementById("question").removeAttribute("hidden");});

  $("#continue_btn").hide();
}

$("#answer_a_btn").click(function() {
  selectAnswer("#answer_a_btn");
  deselectAnswer("#answer_b_btn");
  deselectAnswer("#answer_c_btn");
  deselectAnswer("#answer_d_btn");
});

$("#answer_b_btn").click(function() {
  selectAnswer("#answer_b_btn");
  deselectAnswer("#answer_a_btn");
  deselectAnswer("#answer_c_btn");
  deselectAnswer("#answer_d_btn");
});

$("#answer_c_btn").click(function() {
  selectAnswer("#answer_c_btn");
  deselectAnswer("#answer_b_btn");
  deselectAnswer("#answer_a_btn");
  deselectAnswer("#answer_d_btn");
});

$("#answer_d_btn").click(function() {
  selectAnswer("#answer_d_btn");
  deselectAnswer("#answer_b_btn");
  deselectAnswer("#answer_c_btn");
  deselectAnswer("#answer_a_btn");
});

$("#answer_commit_btn").click(function() {
  validateAnswer();
});

$(".restart").click(function() {
  $(".quiz_end").fadeOut(function() { 
    startQuiz();
    document.getElementById("answer_commit_btn").removeAttribute("display");
  });  
});
function validateAnswer() {
  $("#answer_commit_btn").hide();
  var rightAnswer = getRightAnswer();
  var selectedAnswerId = $(".answer.btn-primary").attr("id");
  var selectedAnswer = $(".answer.btn-primary").text()[0]; 
  if (selectedAnswer == rightAnswer) {
    $(".answer.btn-primary").removeClass("btn-primary");
    $(".answer.btn-default").removeClass("btn-default");
    $("#"+selectedAnswerId).addClass("btn-success");
    points += rightAnswerPoints;
  } else {
    $(".answer.btn-primary").removeClass("btn-primary");
    $(".answer.btn-default").removeClass("btn-default");
    $("#"+selectedAnswerId).addClass("btn-danger");
  }
  $("#continue_btn").show();
}


$("#continue_btn").click(function() {
if(currentQuestionNo==9){
    showEnd();
    currentQuestionNo--;
}
currentQuestionNo++;
  showNextQuestion();
  $("#continue_btn").hide();
  $("#answer_commit_btn").show();
});
function selectAnswer(id) {
  $(id).addClass("btn-primary");
  $(id).removeClass("btn-default");
}
function deselectAnswer(id) {
  $(id).addClass("btn-default");
  $(id).removeClass("btn-primary");  
}

function showEnd() {
  $("#question").fadeOut(function() {
    $("#endpoints").text(points);
    $("#possiblepoints").text(rightAnswerPoints * questions.length);
    $(".quiz_end").fadeIn(()=>{document.getElementById("over").removeAttribute("hidden");});
    turn=turn+1;
    console.log("Turns:" + turn);
  });
}

$('#modalQuiz').on('hidden.bs.modal', '.modal', function () {
    $(this).removeData('bs.modal');
});
