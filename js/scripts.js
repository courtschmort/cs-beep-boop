//business logic
var functionNumbers = function(number) {
  var numbers = [];
  for (index = 0; index <= number; index += 1) {
    if (index.toString().includes("3")) {
      numbers.push(" I'm sorry Dave. I'm afraid I can't do that!");
    } else if (index.toString().includes("2")) {
      numbers.push(" Boop!");
    } else if (index.toString().includes("1")) {
      numbers.push(" Beep!");
    } else {
      numbers.push(" " + index);
    }
  }
  return numbers; //return the final results
}

///user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("input#number").val());
    var result = functionNumbers(number);

    $(".array").text(result);
    $("#result").show();

  });
});

// The following is WIP:
//
// // business logic
// // function newFunction(numbers) {
// //
// // };
//
// // user interface logic
// $(document).ready(function() {
//   $("form").submit(function(event) {
//     event.preventDefault();
//     let number = parseInt($("input#number").val());
//
//     let numbers = [];
//     for (index = 0; index <= number; index += 1) {
//       numbers.push(index);
//     };
//
//     // numbers.forEach(function(number) {
//     //   if ((number.toString()).includes("3")) {
//     //     numbers.push(" " + "Hi!");
//     //   };
//     // });
//
//     // let result = newFunction(number);
//
//     // if (number === "") {
//     //   alert("Please enter a number.");
//     // };
//
//     $(".array").text(numbers);
//     $("#result").show();
//     });
//   });
