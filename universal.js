
/***************************
****************************
Dropdown-inline
****************************
***************************/

$( document ).ready(function() {
    var totalQuestions = $('.dropdownQuestion').length;
    var score = 0;
    $('button[data-toggle="dropdown"]').on('click', function(e) {
        var currentDropdown = $(this);
        var answer = $(this).attr('data-answer');
        currentDropdown.next().find('a[role="menuitem"]').on('click', function(e) {
            e.preventDefault();
            var choice = $(this).text();
            currentDropdown.find('.buttonDefaultText').text(choice);
            var value = $(this).attr('data-value');
            if (answer === value) {
                currentDropdown.parent().on('hidden.bs.dropdown', function () {
                    $(this).html('<div style="padding:6px 12px;border-radius:4px;border:1px solid #FFF;background:#dff0d8;"><span class="glyphicon glyphicon-ok"></span> ' + choice + '</div>')
                });             
                if ( $('button.dropdown-toggle').length <= 1 ) {
                    $('.feedback-dropdown').removeClass('sr-only');
                }
            } else {
                currentDropdown.css('background-color','#f2dede').find('.buttonIcon').html('<span class="glyphicon glyphicon-remove"></span> ');
            }
        });
    });
});


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
      $('.feedback-correct', mSelect).removeClass('sr-only').fadeOut(0).fadeIn(200);
      $('.feedback-incorrect', mSelect).addClass('sr-only');
      $('.feedback-noselection', mSelect).addClass('sr-only');
      $("input[type='checkbox']", mSelect).prop("disabled", true);
  } else if (mSelectChoice.length === 0) {
      $('.feedback-noselection', mSelect).removeClass('sr-only').fadeOut(0).fadeIn(200);
      $('.feedback-incorrect', mSelect).addClass('sr-only');
  } else {
      if (mSelectAttempt <= 2) {
        $('.feedback-incorrect', mSelect).removeClass('sr-only').fadeOut(0).fadeIn(200);
        $('.feedback-noselection', mSelect).addClass('sr-only');
    } else {
        $('.feedback-incorrect2', mSelect).removeClass('sr-only').fadeOut(0).fadeIn(200);
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
            $('.feedback-correct', mChoice).removeClass('sr-only').fadeOut(0).fadeIn(200);
            $('.feedback-incorrect', mChoice).addClass('sr-only');
            $("input[type='radio']", mChoice).prop("disabled", true);
        } else {
            $('.feedback-incorrect', mChoice).removeClass('sr-only').fadeOut(0).fadeIn(200);
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


/***************************
****************************
Short Answer
****************************
***************************/

$(document).ready(() => {
  $('.saSubmit').on('click', event => {
    event.preventDefault();
    var $saCont = $(event.currentTarget).closest('.shortanswer');
     var $response = $('#answerbox', $saCont).val();
    if ($response === "") {
      $('.noresponse', $saCont).removeClass('sr-only');
      $('.user', $saCont).addClass('sr-only');
      $('.feedback', $saCont).addClass('sr-only');
    } else {
      $('.noresponse', $saCont).addClass('sr-only');
      $('.user', $saCont).removeClass('sr-only');
      $('.user', $saCont).html("<strong>Your Answer</strong><br> " + $response);
      $('.feedback', $saCont).removeClass('sr-only');
      $('.tohide', $saCont).addClass('sr-only');
    }
  });
});




/***************************
****************************
Video and Interpolated Questions
****************************
***************************/
$(document).ready(function() {
    $(".topcontent").hide();
    $( ".topbuttons #top1" ).trigger( "click" );
    $('.topbuttons button').click(function() {
        $("video").each(function() {
            $(this).get(0).pause();
        });
    });
});
$(".topbuttons .btn").click(function() {
    $(".topcontent").hide();
    $(".topbuttons .btn").removeClass("btn-primary").addClass("btn-default");
    $(this).removeClass("btn-default").addClass("btn-primary");
    /*
    if ($(window).width() < 1200) {
        $("html, body").animate({ scrollTop: $('#topcontent').offset().top }, 1000);
    }
    else {
    }
    */
});


$('.topbuttons #top1').one('click',function(){
    $(this).prepend("<i class='fa fa-check-circle pull-right' style='margin-left:10px; margin-top:2px;'></i>");
}).click(function(){
    $(".top1").fadeIn(200);
});

$('.topbuttons #top2').one('click',function(){
    $(this).prepend("<i class='fa fa-check-circle pull-right' style='margin-left:10px; margin-top:2px; '></i>");
}).click(function(){
    $(".top2").fadeIn(200);
});


$('.topbuttons #top3').one('click',function(){
    $(this).prepend("<i class='fa fa-check-circle pull-right' style='margin-left:10px; margin-top:2px; '></i>");
}).click(function(){
    $(".top3").fadeIn(200);
});

$('.topbuttons #top4').one('click',function(){
    $(this).prepend("<i class='fa fa-check-circle pull-right' style='margin-left:10px; margin-top:2px; '></i>");
}).click(function(){
    $(".top4").fadeIn(200);
});

$('.topbuttons #top5').one('click',function(){
    $(this).prepend("<i class='fa fa-check-circle pull-right' style='margin-left:10px; margin-top:2px; '></i>");
}).click(function(){
    $(".top5").fadeIn(200);
});

$('.topbuttons #top6').one('click',function(){
    $(this).prepend("<i class='fa fa-check-circle pull-right' style='margin-left:10px; margin-top:2px; '></i>");
}).click(function(){
    $(".top6").fadeIn(200);
});

$('.topbuttons #top7').one('click',function(){
    $(this).prepend("<i class='fa fa-check-circle pull-right' style='margin-left:10px; margin-top:2px; '></i>");
}).click(function(){
    $(".top7").fadeIn(200);
});

$('.topbuttons #top8').one('click',function(){
    $(this).prepend("<i class='fa fa-check-circle pull-right' style='margin-left:10px; margin-top:2px; '></i>");
}).click(function(){
    $(".top8").fadeIn(200);
});

$('.topbuttons #top9').one('click',function(){
    $(this).prepend("<i class='fa fa-check-circle pull-right' style='margin-left:10px; margin-top:2px; '></i>");
}).click(function(){
    $(".top9").fadeIn(200);
});

$('.topbuttons #top10').one('click',function(){
    $(this).prepend("<i class='fa fa-check-circle pull-right' style='margin-left:10px; margin-top:2px; '></i>");
}).click(function(){
    $(".top10").fadeIn(200);
});

$('.topbuttons #top11').one('click',function(){
    $(this).prepend("<i class='fa fa-check-circle pull-right' style='margin-left:10px; margin-top:2px; '></i>");
}).click(function(){
    $(".top11").fadeIn(200);
});

$('.topbuttons #top12').one('click',function(){
    $(this).prepend("<i class='fa fa-check-circle pull-right' style='margin-left:10px; margin-top:2px; '></i>");
}).click(function(){
    $(".top12").fadeIn(200);
});


/***************************
****************************
Video and Interpolated Questions 2
****************************
***************************/
$(document).ready(function() {
    $(".topcontent2").hide();
    $( ".topbuttons2 #top1-2" ).trigger( "click" );
    $('.topbuttons2 button').click(function() {
        $("video").each(function() {
            $(this).get(0).pause();
        });
    });
});
$(".topbuttons2 .btn").click(function() {
    $(".topcontent2").hide();
    $(".topbuttons2 .btn").removeClass("btn-primary").addClass("btn-default");
    $(this).removeClass("btn-default").addClass("btn-primary");
    /*
    if ($(window).width() < 1200) {
        $("html, body").animate({ scrollTop: $('#topcontent2').offset().top }, 1000);
    }
    else {
    }
    */
});


$('.topbuttons2 #top1-2').one('click',function(){
    $(this).prepend("<i class='fa fa-check-circle pull-right' style='margin-left:10px; margin-top:2px;'></i>");
}).click(function(){
    $(".top1-2").fadeIn(200);
});

$('.topbuttons2 #top2-2').one('click',function(){
    $(this).prepend("<i class='fa fa-check-circle pull-right' style='margin-left:10px; margin-top:2px; '></i>");
}).click(function(){
    $(".top2-2").fadeIn(200);
});


$('.topbuttons2 #top3-2').one('click',function(){
    $(this).prepend("<i class='fa fa-check-circle pull-right' style='margin-left:10px; margin-top:2px; '></i>");
}).click(function(){
    $(".top3-2").fadeIn(200);
});

$('.topbuttons2 #top4-2').one('click',function(){
    $(this).prepend("<i class='fa fa-check-circle pull-right' style='margin-left:10px; margin-top:2px; '></i>");
}).click(function(){
    $(".top4-2").fadeIn(200);
});

$('.topbuttons2 #top5-2').one('click',function(){
    $(this).prepend("<i class='fa fa-check-circle pull-right' style='margin-left:10px; margin-top:2px; '></i>");
}).click(function(){
    $(".top5-2").fadeIn(200);
});

$('.topbuttons2 #top6-2').one('click',function(){
    $(this).prepend("<i class='fa fa-check-circle pull-right' style='margin-left:10px; margin-top:2px; '></i>");
}).click(function(){
    $(".top6-2").fadeIn(200);
});

$('.topbuttons2 #top7-2').one('click',function(){
    $(this).prepend("<i class='fa fa-check-circle pull-right' style='margin-left:10px; margin-top:2px; '></i>");
}).click(function(){
    $(".top7-2").fadeIn(200);
});

$('.topbuttons2 #top8-2').one('click',function(){
    $(this).prepend("<i class='fa fa-check-circle pull-right' style='margin-left:10px; margin-top:2px; '></i>");
}).click(function(){
    $(".top8-2").fadeIn(200);
});

$('.topbuttons2 #top9-2').one('click',function(){
    $(this).prepend("<i class='fa fa-check-circle pull-right' style='margin-left:10px; margin-top:2px; '></i>");
}).click(function(){
    $(".top9-2").fadeIn(200);
});

$('.topbuttons2 #top10-2').one('click',function(){
    $(this).prepend("<i class='fa fa-check-circle pull-right' style='margin-left:10px; margin-top:2px; '></i>");
}).click(function(){
    $(".top10-2").fadeIn(200);
});

$('.topbuttons2 #top11-2').one('click',function(){
    $(this).prepend("<i class='fa fa-check-circle pull-right' style='margin-left:10px; margin-top:2px; '></i>");
}).click(function(){
    $(".top11-2").fadeIn(200);
});

$('.topbuttons2 #top12-2').one('click',function(){
    $(this).prepend("<i class='fa fa-check-circle pull-right' style='margin-left:10px; margin-top:2px; '></i>");
}).click(function(){
    $(".top12-2").fadeIn(200);
});




/***************************
****************************
Video and Interpolated Questions 3
****************************
***************************/
$(document).ready(function() {
    $(".topcontent3").hide();
    $( ".topbuttons3 #top1-3" ).trigger( "click" );
    $('.topbuttons3 button').click(function() {
        $("video").each(function() {
            $(this).get(0).pause();
        });
    });
});
$(".topbuttons3 .btn").click(function() {
    $(".topcontent3").hide();
    $(".topbuttons3 .btn").removeClass("btn-primary").addClass("btn-default");
    $(this).removeClass("btn-default").addClass("btn-primary");
    /*
    if ($(window).width() < 1200) {
        $("html, body").animate({ scrollTop: $('#topcontent2').offset().top }, 1000);
    }
    else {
    }
    */
});


$('.topbuttons3 #top1-3').one('click',function(){
    $(this).prepend("<i class='fa fa-check-circle pull-right' style='margin-left:10px; margin-top:2px;'></i>");
}).click(function(){
    $(".top1-3").fadeIn(200);
});

$('.topbuttons3 #top2-3').one('click',function(){
    $(this).prepend("<i class='fa fa-check-circle pull-right' style='margin-left:10px; margin-top:2px; '></i>");
}).click(function(){
    $(".top2-3").fadeIn(200);
});


$('.topbuttons3 #top3-3').one('click',function(){
    $(this).prepend("<i class='fa fa-check-circle pull-right' style='margin-left:10px; margin-top:2px; '></i>");
}).click(function(){
    $(".top3-3").fadeIn(200);
});

$('.topbuttons3 #top4-3').one('click',function(){
    $(this).prepend("<i class='fa fa-check-circle pull-right' style='margin-left:10px; margin-top:2px; '></i>");
}).click(function(){
    $(".top4-3").fadeIn(200);
});

$('.topbuttons3 #top5-3').one('click',function(){
    $(this).prepend("<i class='fa fa-check-circle pull-right' style='margin-left:10px; margin-top:2px; '></i>");
}).click(function(){
    $(".top5-3").fadeIn(200);
});

$('.topbuttons3 #top6-3').one('click',function(){
    $(this).prepend("<i class='fa fa-check-circle pull-right' style='margin-left:10px; margin-top:2px; '></i>");
}).click(function(){
    $(".top6-3").fadeIn(200);
});

$('.topbuttons3 #top7-3').one('click',function(){
    $(this).prepend("<i class='fa fa-check-circle pull-right' style='margin-left:10px; margin-top:2px; '></i>");
}).click(function(){
    $(".top7-3").fadeIn(200);
});

$('.topbuttons3 #top8-3').one('click',function(){
    $(this).prepend("<i class='fa fa-check-circle pull-right' style='margin-left:10px; margin-top:2px; '></i>");
}).click(function(){
    $(".top8-3").fadeIn(200);
});

$('.topbuttons3 #top9-3').one('click',function(){
    $(this).prepend("<i class='fa fa-check-circle pull-right' style='margin-left:10px; margin-top:2px; '></i>");
}).click(function(){
    $(".top9-3").fadeIn(200);
});

$('.topbuttons3 #top10-3').one('click',function(){
    $(this).prepend("<i class='fa fa-check-circle pull-right' style='margin-left:10px; margin-top:2px; '></i>");
}).click(function(){
    $(".top10-3").fadeIn(200);
});

$('.topbuttons3 #top11-3').one('click',function(){
    $(this).prepend("<i class='fa fa-check-circle pull-right' style='margin-left:10px; margin-top:2px; '></i>");
}).click(function(){
    $(".top11-3").fadeIn(200);
});

$('.topbuttons3 #top12-3').one('click',function(){
    $(this).prepend("<i class='fa fa-check-circle pull-right' style='margin-left:10px; margin-top:2px; '></i>");
}).click(function(){
    $(".top12-3").fadeIn(200);
});




/***************************
****************************
Image Desc Toggle
****************************
***************************/


$(document).ready(function() {
    $('.btn[data-toggle="collapse"]').click(function() {
        $("i", this).toggleClass("fa-plus-circle fa-minus-circle");
    });
});


/***************************
****************************
Popover
****************************
***************************/

$(function () {
    $('[data-toggle="popover"]').popover()
});


