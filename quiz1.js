document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var score = 0;
    
    // Check answers
    if (document.querySelector('input[name="q1"]:checked').value === 'a') {
      score++;
    }
    if (document.querySelector('input[name="q2"]:checked').value === 'a') {
      score++;
    }
    if (document.querySelector('input[name="q3"]:checked').value === 'a') {
      score++;
    }
    
    // Display score
    alert('You scored ' + score + ' out of 3!');
    
    // Reset form
    document.getElementById('quizForm').reset();
  });