var messageString;
var limit = 30;
var sectionDisplay;

function runFizzBuzz() {

  sectionDisplay = document.getElementById('fizzbuzz');

  messageString = "<p>";

  for (var i = 1; i <= limit; i++) {

    if (i % 3 == 0 && i % 5 == 0) {

      messageString = messageString + "<span id='fizzb'>FizzBuzz</span><br>";
    }
    else if (i % 3 == 0) {
      messageString = messageString + "<span id='fizz'>Fizz</span><br>";
    }
    else if (i % 5 == 0) {
      messageString = messageString + "<span id='buzz'>Buzz</span><br>";
    }
    else {
      messageString = messageString + i + "<br>";
    }
  }

  messageString = messageString + "</p>";

  sectionDisplay.innerHTML = messageString;
}
