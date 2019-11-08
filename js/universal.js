
/***************************
****************************
Multiple Select
****************************
***************************/
$(document).ready(function() {
  $('.mSelectSubmit').on('click', function(event) {
    event.preventDefault();
    var mSelect = $(event.currentTarget).closest('form.mSelect');
    var mSelectAttempt = mSelect.data('attempts') || 0;
    mSelect.data('attempts', ++mSelectAttempt); 
    var mSelectChoice = $('input[type="checkbox"]:checked', mSelect).map(function() {
      return $(this).val();
  }).get();
    console.log(mSelectChoice);

    var button = $(this);
    var mSelectAnswer = button.data('answer').split(" ");
    console.log(mSelectAnswer);

    if (JSON.stringify(mSelectChoice) === JSON.stringify(mSelectAnswer)) {
      $('.feedback-correct', mSelect).removeClass('sr-only');
      $('.feedback-incorrect', mSelect).addClass('sr-only');
      $('.feedback-noselection', mSelect).addClass('sr-only');
      $("input[type='checkbox']", mSelect).prop("disabled", true);
  } else if (mSelectChoice.length === 0) {
      $('.feedback-noselection', mSelect).removeClass('sr-only');
      $('.feedback-incorrect', mSelect).addClass('sr-only');
  } else {
      if (mSelectAttempt <= 2) {
        $('.feedback-incorrect', mSelect).removeClass('sr-only');
        $('.feedback-noselection', mSelect).addClass('sr-only');
    } else {
        $('.feedback-incorrect2', mSelect).removeClass('sr-only');
        $('.feedback-incorrect2', mSelect).html("Sorry that was incorrect. The correct responses are " + mSelectAnswer + ".");
        $('.feedback-incorrect', mSelect).addClass('sr-only');
        $('.feedback-noselection', mSelect).addClass('sr-only');
        $("input[type='checkbox']", mSelect).prop("disabled", true);
    }
}
});
});


/***************************
****************************
Multiple Choice, No Correct Answer
****************************
***************************/
$(document).ready(function() {  
    $("input[type='radio']").on('change', function(event) {
        var mChoiceInfo = $(event.currentTarget).closest('form.mChoiceInfo');
            $('.feedback-info', mChoiceInfo).removeClass('sr-only');
            $("input[type='radio']", mChoiceInfo).prop("disabled", true);
    });
});



/***************************
****************************
Multiple Choice
****************************
***************************/


$(document).ready(function() {  
    $("input[type='radio']").on('change', function(event) {
        var mChoice = $(event.currentTarget).closest('form.mChoice');
        var selected = $("input[type='radio']:checked", mChoice).val();
        var correct = $(mChoice).data('answer');
        if (selected == correct) {
            $('.feedback-correct', mChoice).removeClass('sr-only');
$('.feedback-incorrect', mChoice).addClass('sr-only');
            $("input[type='radio']", mChoice).prop("disabled", true);
        } else {
            $('.feedback-incorrect', mChoice).removeClass('sr-only');
            $('.feedback-correct', mChoice).addClass('sr-only');
        }
    });
});


/***************************
****************************
Multiple Choice, Feedback
by Option, One Attempt
****************************
***************************/

$(document).ready(function() {  
    $("input[type='radio']").on('change', function(event) {
        var mChoiceOneAttempt = $(event.currentTarget).closest('form.mChoiceOneAttempt');
        var selected = $("input[type='radio']:checked", mChoiceOneAttempt).val();
        if (selected === "a") {
            $('.feedback-optA', mChoiceOneAttempt).removeClass('sr-only');
            $('.feedback-optB', mChoiceOneAttempt).addClass('sr-only');
            $('.feedback-optC', mChoiceOneAttempt).addClass('sr-only');
            $("input[type='radio']", mChoiceOneAttempt).prop("disabled", true);
        } else if (selected === "b") {
            $('.feedback-optB', mChoiceOneAttempt).removeClass('sr-only');
            $('.feedback-optA', mChoiceOneAttempt).addClass('sr-only');
            $('.feedback-optC', mChoiceOneAttempt).addClass('sr-only');
            $("input[type='radio']", mChoiceOneAttempt).prop("disabled", true);
        } else {
            $('.feedback-optC', mChoiceOneAttempt).removeClass('sr-only');
            $('.feedback-optA', mChoiceOneAttempt).addClass('sr-only');
            $('.feedback-optB', mChoiceOneAttempt).addClass('sr-only');
            $("input[type='radio']", mChoiceOneAttempt).prop("disabled", true);
        }
    });
});



