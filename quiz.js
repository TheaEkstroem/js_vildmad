function checkAnswers() {
    event.preventDefault(); // Prevent form submission

    var quizForm = document.getElementById("quizForm");
    var resultContainer = document.getElementById("result");

    // Check answers
    var q1Answer = quizForm.q1.value;
    var q2Answer = quizForm.q2.value;

    var numCorrect = 0;
    var feedback = "";

    if (q1Answer === "correct") {
      numCorrect++;
      feedback += "<p>Question 1 is correct!</p>";
    } else {
      feedback += "<p>Question 1 is incorrect!</p>";
    }

    if (q2Answer === "correct") {
      numCorrect++;
      feedback += "<p>Question 2 is correct!</p>";
    } else {
      feedback += "<p>Question 2 is incorrect!</p>";
    }

    // Display result
    resultContainer.innerHTML = "<h2>Result:</h2>" + "<p>You got " + numCorrect + " out of 2 correct answers.</p>" + feedback;
  }