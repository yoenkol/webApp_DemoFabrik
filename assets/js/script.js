var turn=0;

function startQuiz() {
  points = 0;
  currentQuestionNo = 0;
  showNextQuestion();
  $("#question").fadeIn(()=>{document.getElementById("question").removeAttribute("hidden");});

  $("#continue_btn").hide();
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
