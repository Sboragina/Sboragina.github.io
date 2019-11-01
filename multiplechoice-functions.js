function ConfigGroupQuiz() {
    currentscore = 0;
    matchpoints = $('.hidden-selection-right').length + $('.selection-right').length;
    currentscore = currentscore + matchpoints;
    fadems = 1000;
    $(".alert").hide();
    $(".reset").show();
    anchor = set + "anchor";
    window.location.hash = '#';
    window.location.hash = anchor;
}

function ConfigGroupQuizNoScore(question) {
    fadems = 500;
    $(question).find(".alert").hide();
    $(question).find(".reset").show();
}

function ConfigInstantQuiz(question) {
    fadems = 500;
    $(question).find(".alert").hide();
}

function MatchActivity(set) {
    $(set).find(".matchoption").on("click", function() {
        e = $(this).attr("data-row");
        t = $(this).attr("data-answer");
        $("." + e).addClass("none");
        if (t == "y") {
            $("." + e).removeClass("hidden-selection-wrong").removeClass("selection-wrong").text("");
            $(this).addClass("hidden-selection-right")
        } else {
            $("." + e).removeClass("hidden-selection-right").removeClass("selection-right").text("");
            $("." + e).removeClass("hidden-selection-wrong").removeClass("selection-wrong").text("");
            $(this).addClass("hidden-selection-wrong");
        }
    })
}

function CalculateScore(set) {
    $(".hidden-selection-wrong").removeClass("hidden-selection-wrong").addClass("selection-wrong").text("Wrong");
    $(".hidden-selection-right").removeClass("hidden-selection-right").addClass("selection-right").text("Correct");
    $(".score").html(currentscore + "/" + totalscore);
    $(".scorestatement").show();
}

function Reset(set) {
    $(set).find(".reset").on("click", function() {
        $(".scorestatement").hide();
        currentscore = 0;
        $("input").attr("disabled", false).attr("checked", false);
        $(".alert").hide(0);
        $(".reset").hide();
        $(".matchoption").empty().removeClass('hidden-selection-right').removeClass('hidden-selection-wrong').removeClass('selection-right').removeClass('selection-wrong');
        window.location.hash = '#';
        window.location.hash = anchor;
    });
}

function ResetNoScore(set) {
    $(set).find(".reset").on("click", function() {
        $("input").attr("disabled", false).attr("checked", false);
        $(".alert").hide(0);
        $(".reset").hide();
    });
}

function CheckResults(set) {
    function question1(mc, right) {
        return JSON.stringify(mc) == JSON.stringify(right)
    }
    $(set).find(question).find("input:checked").each(function() {
        selection.push($(this).val().toLowerCase())
    }), 0 === selection.length ? (Missing(), HideHR()) : question1(right, selection) ? (RightFeedback(), HideHR(), Disable(question)) : question1(wrong1, selection) ? (WrongFeedback1(), HideHR()) : question1(wrong2, selection) ? (WrongFeedback2(), HideHR()) : question1(wrong3, selection) ? (WrongFeedback3(), HideHR()) : question1(wrong4, selection) ? (WrongFeedback4(), HideHR()) : question1(wrong5, selection) ? (WrongFeedback5(), HideHR()) : question1(wrong6, selection) ? (WrongFeedback6(), HideHR()) : question1(wrong7, selection) ? (WrongFeedback7(), HideHR()) : question1(wrong8, selection) ? (WrongFeedback8(), HideHR()) : question1(wrong9, selection) && (WrongFeedback9(), HideHR())
}

function GroupCheckResults(set) {
    function question1(mc, right) {
        return JSON.stringify(mc) == JSON.stringify(right)
    }
    $(set).find(question).find("input:checked").each(function() {
        selection.push($(this).val().toLowerCase())
    }), 0 === selection.length ? (Missing(), HideHR()) : question1(right, selection) ? (RightFeedback(), HideHR(), currentscore++) : question1(wrong1, selection) ? (WrongFeedback(), HideHR()) : question1(wrong2, selection) ? (WrongFeedback(), HideHR()) : question1(wrong3, selection) ? (WrongFeedback(), HideHR()) : question1(wrong4, selection) ? (WrongFeedback(), HideHR()) : question1(wrong5, selection) ? (WrongFeedback(), HideHR()) : question1(wrong6, selection) ? (WrongFeedback(), HideHR()) : question1(wrong7, selection) ? (WrongFeedback(), HideHR()) : question1(wrong8, selection) ? (WrongFeedback(), HideHR()) : question1(wrong9, selection) && (WrongFeedback(), HideHR())
}


function CheckResultsMP(set) {
    function question1(mc, right) {
        return JSON.stringify(mc) == JSON.stringify(right)
    }
    $(set).find(question).find("input:checked").each(function() {
        selection.push($(this).val().toLowerCase())
    }), 0 === selection.length ? (Missing(), HideHR()) : question1(right, selection) ? (RightFeedback(), HideHR(), Disable(question)) : question1(wrong1, selection) ? (WrongFeedback1(), HideHR(), Disable(question)) : question1(wrong2, selection) ? (WrongFeedback2(), HideHR(), Disable(question)) : question1(wrong3, selection) ? (WrongFeedback3(), HideHR(), Disable(question)) : question1(wrong4, selection) && (WrongFeedback4(), HideHR(), Disable(question))
}

function GroupCheckResultsMP(set) {
    function question1(mc, right) {
        return JSON.stringify(mc) == JSON.stringify(right)
    }
    $(set).find(question).find("input:checked").each(function() {
        selection.push($(this).val().toLowerCase())
    }), 0 === selection.length ? (Missing(), HideHR()) : question1(right, selection) ? (RightFeedback(), HideHR(), currentscore++) : question1(wrong1, selection) ? (WrongFeedback(), HideHR()) : question1(wrong2, selection) ? (WrongFeedback(), HideHR()) : question1(wrong3, selection) ? (WrongFeedback(), HideHR()) : question1(wrong4, selection) && (WrongFeedback(), HideHR())
}


function Disable(question) {
    $(question).find("input").attr("disabled", 'disabled');
    $(question).find(".check").attr("disabled", 'disabled');
}

function Missing() {
    $(question + "_error").fadeIn(fadems)
}

function RightFeedback() {
    $(question + "_right_feedback").fadeIn(fadems), Disable()
}

function WrongFeedback() {
    $(question + "_wrong_feedback").fadeIn(fadems)
}

function WrongFeedback1() {
    $(question + "_wrong_feedback1").fadeIn(fadems)
}

function WrongFeedback2() {
    $(question + "_wrong_feedback2").fadeIn(fadems)
}

function WrongFeedback3() {
    $(question + "_wrong_feedback3").fadeIn(fadems)
}

function WrongFeedback4() {
    $(question + "_wrong_feedback4").fadeIn(fadems)
}

function WrongFeedback5() {
    $(question + "_wrong_feedback5").fadeIn(fadems)
}

function WrongFeedback6() {
    $(question + "_wrong_feedback6").fadeIn(fadems)
}

function WrongFeedback7() {
    $(question + "_wrong_feedback7").fadeIn(fadems)
}

function WrongFeedback8() {
    $(question + "_wrong_feedback8").fadeIn(fadems)
}

function WrongFeedback9() {
    $(question + "_wrong_feedback9").fadeIn(fadems)
}

function HideHR() {
    $(question).find("hr").hide()
}


/* InlineDropdownQuiz Activity */
function InlineDropdownQuiz(container, question, dropdownhtml) {
    var correct_feedback = "<span class='feedback correct'> (Correct) </span>";
    var incorrect_feedback = "<span class='feedback incorrect'> (Try Again) </span>";
    $("#" + container).find(".question." + question).click(function() {
        $("#" + container).find(".highlight." + question).addClass("highlight-blue");
    });
    $("#" + container).find(".question." + question).mouseout(function() {
        $("#" + container).find(".highlight." + question).removeClass("highlight-blue");
    });

    if ($("#" + container).find(".question." + question).is(':focus')) {
        console.log("focused")
    }

    $("#" + container).find(".question." + question).focusin(function(){
        $("#" + container).find(".highlight").removeClass("highlight-blue");
        $("#" + container).find(".highlight." + question).addClass("highlight-blue");
    });


    $("#" + container).find(".show-more").click(function() {
        $("#" + container).find(".complete").hide();
        $("#" + container).find(".additional-feedback").fadeIn(500);
        // $(window).scrollTop($("#" + container).find(".additional-feedback").offset().top);

    });

    CheckScore()

    function CheckScore() {
        score = $("#" + container).find('.correct').length;
        total = $("#" + container).find('.selector').length;
        $("#" + container).find(".score").html(score + "/" + total);
        if (score == total) {
            $("#" + container).find(".complete").fadeIn(500);
            // $(window).scrollTop($("#" + container).find(".complete").offset().top);
        } else {
            $("#" + container).find(".complete").hide();
        }
    }
    $("#" + container).find(".question." + question).html(dropdownhtml);
    $("#" + container).find(".question." + question).find(".selector").on('change', function() {
        $("#" + container).find(".question." + question).find(".feedback").empty();
        answer = $(".question." + question).attr("answer");
        value = $(this).val();
        if (value == answer) {
            $("#" + container).find(".question." + question).find(".selector option:selected").append(correct_feedback);
            $("#" + container).find(".question." + question).find(".selector").attr('disabled', 'disabled').css("background", "#DFF0D8");
            $("#" + container).find(".highlight." + question).removeClass("highlight-blue");
            CheckScore()
        } else {
            $("#" + container).find(".question." + question).find(".selector option:selected").append(incorrect_feedback);
            $("#" + container).find(".question." + question).find(".selector").css("background", "#F2DEDE");
            $("#" + container).find(".highlight." + question).removeClass("highlight-blue");
            CheckScore()
        }
    });
    for (i = 1; i < question; i++) {
        InlineDropdownQuiz(container, i, dropdownhtml);
    }
}