// business logic


// user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let number = parseInt($("input#number").val());

    // if (number === "") {
    //   alert("Please enter a number.");
    // };

    let numbersArray = [];

    for (index = 0; index <= number; index +=1) {
      numbersArray.push(index);
    };
    // numbersArray.toString().replace(3, "I'm sorry, Dave. I'm afraid I can't do that.");

    // if (number === "") {
    //   alert("Please enter a number.")
    // }

    $(".array").text(numbersArray);
    $("#results").show();
    });
  });
