var answers = ["a","a","b","b","c","c","a","c","a","c"], 
    tot = answers.length;

function getCheckedValue( radioName ){
    var radios = document.getElementsByName( radioName ); // Get radio group by-name
    for(var y=0; y<radios.length; y++)
      if(radios[y].checked) return radios[y].value; // return the checked value
}

function getScore(){
  var score = 0;
  for (var i=0; i<tot; i++)
    if(getCheckedValue("q"+i)===answers[i]) score += 1; // increment only
  return score;
}

function pass(){
  var passFail = 0;
      if((getCheckedValue("q"+0)===answers[0])&&(getCheckedValue("q"+6)===answers[6])) passFail = 1; 
  return passFail;
}

function revealFeedback(){
  $("div.feedback-info").removeClass("sr-only");
if(pass()>0) $("div.success").removeClass("sr-only");
 $("input[type='radio']").prop("disabled", true);
  $("button").html("Reload the page to take the quiz again").prop("disabled", true);
};

function returnScore(){
  if(pass()>0) {alert("You passed! Review the feedback, if you wish, and share your success using the buttons at the bottom of the screen. Your score is "+ getScore() +"/"+ tot);}
  else {alert("Review the feedback and reload the page to try again. Your score is "+ getScore() +"/"+ tot);}
}
