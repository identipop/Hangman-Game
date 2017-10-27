window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  var word ;              
  var guess ;             // <--- user guess
  var guesses = [ ];      // <--- index of user guesses
  var lives ;             // <--- keep track of lives
  var counter ;           // <---tally correct guesses
  var space;              // <--- number of spaces in word

  
  var showLives = document.getElementById("mylives");



  // Create Alphabet buttons
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
    
  

  // Create Guess Unordered List
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = " ";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
  // Show lives
   comments = function () {
    showLives.innerHTML = "You have " + lives + " guesses left";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }

  // click function
   check = function () {
    list.onclick = function () {
      var guess = (this.innerHTML);
      var wrongGuess = [];
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          guesses[i].innerHTML = guess;
          counter += 1;
        } 
      }
      var j = (word.indexOf(guess));
      if (j === -1) {
        lives -= 1;
        comments();
        wrongGuess.push(guess);
        document.getElementById("guesses").innerHTML = "You guessed: " + wrongGuess;
      } else {
        comments();
      }
 
 // PSEUDOCODING THIS PART!
      // I know that I need to push my guesses (if wrong) into an array and show that array in
      // in my "guesses" section of html. I know I'll need .innerHTML and I'll be doing a push, but it
      //is not working above. I tried setting variable outside of function, but that doesn't work either. *sadface*
      console.log(guess);

    }
  }
  
    
  // game!
  play = function () {
    index = 
        ["tamagotchis", "pogs", "the macarena", "grunge", "overalls", 
          "furby", "moon shoes", "jnco jeans", "mood rings", "butterfly clips", "hackey sack", 
          "troll dolls", "doc martens", "lava lamps", "pet rocks", "hot wheels", "pokemon", "super nintendo",
          "dunkaroos", "lisa frank", "johnathan taylor thomas", "tickle me elmo", "frosted tips"];

    // choose word
    word = index[Math.floor(Math.random() * index.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    guesses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();


  }

  play();
  
   // Reset

  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    play();
  }
}


