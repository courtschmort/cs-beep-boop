// business logic
// function newFunction(numbers) {
//
// };

// user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let number = parseInt($("input#number").val());

    let numbers = [];
    for (index = 0; index <= number; index += 1) {
      numbers.push(index);
    };

    // numbers.forEach(function(number) {
    //   if ((number.toString()).includes("3")) {
    //     numbers.push(" " + "Hi!");
    //   };
    // });

    // let result = newFunction(number);

    // if (number === "") {
    //   alert("Please enter a number.");
    // };

    $(".array").text(numbers);
    $("#result").show();
    });
  });
