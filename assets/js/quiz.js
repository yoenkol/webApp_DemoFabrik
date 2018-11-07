var currentQuestionNo = 0;
var points = 0;
var rightAnswerPoints = 1;
var currentQuestion;
var questions = [
  {
    "id":"1",
    "question" : "Was versteht man unter dem Begriff „Smart Factory“?",
    "answers" : {
      "A":"Eine vollautomatisierte und vernetzte Produktionsstätte",
      "B":"Eine Fertigungshalle mit intelligenten Mitarbeitern",
      "C":"Eine Fabrik, in der KI-Produkte hergestellt werden",
      "D":"Ein Startup mit einem Durchschnitts-IQ von 140"
    }, 
    "right":"A"
  },{
    "id":"2",
    "question" : "Was verbirgt sich hinter der Abkürzung „RFID“?",
    "answers" : {
      "A":"Eine Geheimorganisation der Industrie",
      "B":" Ein Chip mit Informationen zu einem Werkstück",
      "C":"Ein Reinigungsroboter für Industriehallen",
      "D":"RoboterFabrik-ID"
    }, 
    "right":"B"
  },
  {
    "id":"3",
    "question" : "Kann der Mensch in der Produktion vollständig durch eine Maschine ersetzt werden?",
    "answers" : {
      "A":" Ja",
      "B":" Nein",
      "C":"Abhängig vom Produktionsvolumen",
      "D":"Abhängig von der Branche"
    }, 
    "right":"B"
  },
  {
    "id":"4",
    "question" : "Welche sind die drei verschiedenen Servicemodelle des Cloud Computings?",
    "answers" : {
      "A":"IaaS, PaaS, SaaS",
      "B":"WaaS, CaaS, MaaS",
      "C":"Tick, Trick und Track ",
      "D":"SaaS, LaaS, PaaS,"
    }, 
    "right":"A"
  },{
    "id":"5",
    "question" : "Wovon werden die industriellen Revolutionen vorangetrieben?",
    "answers" : {
      "A":"Vom Wirtschaftswachstum",
      "B":"Von neuen Technologien",
      "C":"Vom Klimawandel",
      "D":"Von Umweltkatastrophen"
    }, 
    "right":"B"
  },
  {
    "id":"6",
    "question" : "Was versteht man unter „IoT“?",
    "answers" : {
      "A":"Internet of Thoughts",
      "B":"Internet of Things",
      "C":"Internet of Tanks",
      "D":"Internet of Trump"
    }, 
    "right":"B"
  },{
    "id":"7",
    "question" :"Welche Arbeitsfelder oder Positionen innerhalb eines Unternehmens sind von der Globalisierung betroffen?",
    "answers" : {
      "A":"IT-Abteilung",
      "B":"Führungskräfte",
      "C":"Alle Beschäftigte",
      "D":"Verkaufs-Abteilung"
    }, 
    "right":"C"
  },
  {
    "id":"8",
    "question" : "Welches sind die drei Kerntechnologien des Internets der Dinge? ",
    "answers" : {
      "A":" RFid, Smart Grids, NFC",
      "B":" MFid, Smart CP, NFL",
      "C":" NYPD, NFL, Smart Grids",
      "D":"RDid, Smrids, NFL"
    }, 
    "right":"A"
  },
  {
    "id":"9",
    "question" : "Welche Anforderungen werden im Zusammenhang mit Industrie 4.0 von den Mitarbeitern erwartet? ",
    "answers" : {
      "A":" Flexibilität ",
      "B":"Engagement ",
      "C":" Subjektivität ",
      "D":"Alle drei"
    }, 
    "right":"D"
  },{
    "id":"10",
    "question" : "Welches Land gilt als Ursprungsland der industriellen Revolution?",
    "answers" : {
      "A":" USA",
      "B":"Großbritannien",
      "C":"Spanien",
      "D":"Deutschland"
    }, 
    "right":"B"
  },

];

function showNextQuestion() {
  if (currentQuestionNo == 10) {
    showEnd();
  }
  console.log("Loading Question:" + currentQuestionNo);
  currentQuestion = questions[currentQuestionNo];

    $("#qno").text(currentQuestionNo+1);
  $("#question_text").text(currentQuestion.question);
  $("#answer_a").text(currentQuestion.answers.A);
  $("#answer_b").text(currentQuestion.answers.B);
  $("#answer_c").text(currentQuestion.answers.C);
  $("#answer_d").text(currentQuestion.answers.D);
  $(".answer").removeClass("btn-primary btn-danger btn-success btn-default");
  $(".answer").addClass("btn-default");

}

function getRightAnswer() {
  return currentQuestion.right;
}