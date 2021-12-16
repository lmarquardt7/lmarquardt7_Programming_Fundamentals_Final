//Christmas Themed Mad-lib
//Levi Marquardt

//Creating inputNouns array and returning user inputs as array values to main
function enterNouns () {
  //initialize variables
  var counter = 1;
  var inputNouns = [];
  var userInput;

  //loop prompts user for nouns 15 times and verifys that something is entered using if/else
  while (counter <= 15) {
    if (counter === 1) {
      userInput = prompt("We will start by entering 15 nouns. Please enter your first noun.");
    } else {
      userInput = prompt("Enter Noun number " + counter + " out of 15:");
    }
    if (userInput === "" || userInput === null) {
      alert("Be sure to fill in all prompts. Try again");
    } else {
      inputNouns.push(userInput);
      counter++;
    }
  }
  //return array to main function
  return inputNouns;
}

//Creating inputPluralNouns array and returning user inputs as array values to main
function enterPluralNouns () {
  //initialize variables
  var counter = 1;
  var inputPluralNouns = [];
  var userInput;

  // loop prompts user 8 times to enter plural nouns and verifys that something is entered
  while (counter <= 8) {
    if (counter === 1) {
      userInput = prompt("Next, we will enter 8 plural nouns. Please enter your first plural noun.");
    } else {
      userInput = prompt("Enter Plural Noun number " + counter + " out of 8:");
    }
    if (userInput === "" || userInput === null) {
      alert("Be sure to fill in all prompts. Try again");
    } else {
      inputPluralNouns.push(userInput);
      counter++;
    }
  }
  //return array to main 
  return inputPluralNouns;
}

//creating inputVerbs array and returning values from user to main function
function enterVerbs () {
  //initialize variables
  var counter = 1;
  var inputVerbs = [];
  var userInput;

  //loop prompts user 4 times to enter verbs and checks to see that something is entered
  while (counter <= 4) {
    if (counter === 1) {
      userInput = prompt("Next, we will enter 4 verbs. The first one should end in \"-ing\". Please enter your first verb.");
    } else if (counter === 2){
      userInput = prompt("Now we will enter 3 past tense verbs. Enter your first past tense verb: ");
    } else {
      userInput = prompt("Enter Past Tense Verb number " + counter + " out of 4:");
    }
    if (userInput === "" || userInput === null) {
      alert("Be sure to fill in all prompts. Try again");
    } else {
      inputVerbs.push(userInput);
      counter++;
    }
  }
  //return array values to main to be used in output
  return inputVerbs;
}

//creating inputCelebrity array and returning values from user to main function in an array
function enterCelebrity () {
  //intialize variables
  var counter = 1;
  var inputCelebrity = [];
  var userInput;

  //loop prompts user 2 times to enter a celebrity name and checks that something is entered
  while (counter <= 2) {
    if (counter === 1) {
      userInput = prompt("Finally, we will enter 2 celebrity names. Please enter your first celebrity.");
    } else {
      userInput = prompt("Enter Celebrity number " + counter + " out of 2:");
    }
    if (userInput === "" || userInput === null) {
      alert("Be sure to fill in all prompts. Try again");
    } else {
      inputCelebrity.push(userInput);
      counter++;
    }
  }
  //return user input as values in array to main function
  return inputCelebrity;
}

//receiving user inputs in form of array and using values to create final output to display
function main () {
  //alert used as introduction for user to this mad-lib
  alert("You have selected the Christmas Themed Mad-lib! Please take your time and" +
    " enter all of the requested information for the best experience." + 
    " Once all blanks are filled your personal story will display. Have Fun!");

  //declare variables in alphabetical order
  var celebrity;
  var nouns;
  var output = "";
  var pluralNouns;
  var verbs;
  
  //set variables equal to results of functions to use values in output in the order I want them to run
  nouns = enterNouns();
  pluralNouns = enterPluralNouns();
  verbs = enterVerbs();
  celebrity = enterCelebrity();
  
  //alert that prompting is complete
  alert("Congratulations. You have now completed your Mad-Lib. I hope you enjoy your story!");
  
  //create output using array values a.k.a users input
  output = "Twas the night before Christmas, when all through the " + nouns[0];
  output += ", not a " + nouns[1] + " was " + verbs[0] + " not even a " + nouns[2] + ".";
  output += " The " + pluralNouns[0] + " were hung by the " + nouns[3];
  output += " with care, In hopes that " + celebrity[0] + " soon would be there. ";
  output += "The " + pluralNouns[1] + " were nestled all snug in their " + nouns[4] + ",";
  output += " while visions of " + nouns[5] + "s danced in their heads. And mamma in her ";
  output += nouns[6] + ", and I in my " + nouns[7] + ", had just settled down for a long winter's nap";
  output += ". When out on the " + nouns[8] + " there arose such a clatter, I sprang from the ";
  output += nouns[9] + " to see what was the matter. Away to the window I " + verbs[1];
  output += " like a flash, tore open the " + pluralNouns[2] + " and threw up the " + nouns[10];
  output += ". When, what to my wondering " + pluralNouns[3] + " should appear, but a miniature ";
  output += nouns[11] + ", and eight tiny " + pluralNouns[4] + ".";
  output += " I knew in a moment it must be " + celebrity[1] + ".";
  output += " They were dressed all in " + pluralNouns[5] + " from their head to their " + pluralNouns[6];
  output += ". They spoke not a word, but went straight to work. They filled all the ";
  output += pluralNouns[7] + " then turned with a jerk. And laying their " + nouns[12];
  output += " aside of their " + nouns[13] + " up the chimney they " + verbs [2] + "!";
  output += " As they " + verbs[3] + " away I heard them exlaim \"Merry Christmas to all, and to all a good ";
  output += nouns[14] + ".\" The End!";

  //display output
  document.write(output);
}

//call main function to run program
main();












