var answers = ["a","a","b"], 
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

function revealFeedback(){
  $("div").removeClass("sr-only");
 $("input[type='radio']").prop("disabled", true);
  $("button").html("Reload the page to take the quiz again").prop("disabled", true);
};

function returnScore(){
  if(getScore()>=2) {alert("You passed! Your score is "+ getScore() +"/"+ tot);}
  else {alert("Review the feedback and try again. Your score is "+ getScore() +"/"+ tot);}
}
