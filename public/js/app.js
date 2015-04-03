// Quadratic Solver Function
$("#quadSolve").click(function() {
    var quadA, quadB, quadC, rootA, rootB;
    quadA = parseFloat($('#quadA').val());
    quadB = parseFloat($('#quadB').val());
    quadC = parseFloat($('#quadC').val());
    rootA = (((0-quadB) + Math.sqrt(Math.pow(quadB, 2) - (4 * quadA * quadC))) / (2 * quadA)).toFixed(3);
    rootB = (((0-quadB) - Math.sqrt(Math.pow(quadB, 2) - (4 * quadA * quadC))) / (2 * quadA)).toFixed(3);
    $("#quadRoots").html('Root #1: ' + rootA + "<br>" + 'Root #2: ' + rootB).css("font-size", "40px").css("color","orange");
    return false;
});

// Pythagorean Solver Code
$("#pythagSolve").click(function() {
    var pythagA = parseFloat($("#pythagA").val());
    var pythagB = parseFloat($("#pythagB").val());
    var pythagC = parseFloat($("#pythagC").val());
    var third_side_length;
    if (isNaN(pythagA) && !isNaN(pythagB) && !isNaN(pythagC)) {
        third_side_length = Math.sqrt(Math.pow(pythagC, 2) - Math.pow(pythagB, 2)).toFixed(3)
    }
    else if (isNaN(pythagB) && !isNaN(pythagA) && !isNaN(pythagC)) {
        third_side_length = Math.sqrt(Math.pow(pythagC, 2) - Math.pow(pythagA, 2)).toFixed(3)
    }
    else if (isNaN(pythagC) && !isNaN(pythagB) && !isNaN(pythagA)) {
        third_side_length = Math.sqrt(Math.pow(pythagA, 2) + Math.pow(pythagB, 2)).toFixed(3)
    }
    else if ((isNaN(pythagB) && isNaN(pythagA)) || (isNaN(pythagA) && isNaN(pythagC)) || (isNaN(pythagB) && isNaN(pythagC))) {
        confirm("Sorry, you can't have more than one input empty at the same time while submitting. Please refresh and try again.")
    }
    else if (!isNaN(pythagA) && !isNaN(pythagB) && !isNaN(pythagC)) {
        confirm("You must have at least one of the boxes unfilled to use this calculator. Please refresh and try again.")
    }
    $("#pythagAnswer").html(third_side_length).css("font-size", "40px").css("color","orange");
    return false;
});

// Factorial Solver
function getFactorial() {
    var fact_input = Math.round(parseFloat($("#fact-input").val())), answer, i;
    if ((isNaN(fact_input) || fact_input <= -1) && fact_input != null) {
        confirm("Sorry, but the input of this calculator has to be a positive number.");
        $("#fact-output").html("No answer")
    } else {
        answer = 1
    }
    for (i = fact_input; i > 0; i--) {
        answer *= i;
    }
    $("#fact-output").html(answer).css("font-size", "40px").css("color","orange");
}
$("#fact-submit").click(function(){
    getFactorial();
    return false;
});

// Tab Switch
$(function() {
    var page = window.location.pathname,tabs;
    tabs = $(".nav-x");
    if (page === '/factorial.erb') {
        tabs.removeClass("active");
        $("#fact_page").addClass("active")
    } else if (page === '/quadratic.erb') {
        tabs.removeClass("active");
        $("#quad_page").addClass("active")
    } else if (page === '/pythag.erb') {
        tabs.removeClass("active");
        $("#pythag_page").addClass("active")
    } else if (page === '/index.erb') {
        tabs.removeClass("active");
        $("#home_page").addClass("active");
    }
});

