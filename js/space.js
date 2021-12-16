//Outer Space Themed Mad-lib
//Levi Marquardt

//Creating inputNouns array and returning array values to main
function enterNouns () {
  //initialize variables
  var counter = 1;
  var inputNouns = [];
  var userInput;
  
  //loop prompts user to enter nouns 16 times and makes sure something is entered using if/else
  while (counter <= 16) {
    if (counter === 1) {
      userInput = prompt("We will start by entering 16 nouns. Please enter your first noun.");
    } else {
      userInput = prompt("Enter Noun number " + counter + " out of 16:");
    }
    if (userInput === "" || userInput === null) {
      alert("Be sure to fill in all prompts. Try again");
    } else {
      inputNouns.push(userInput);
      counter++;
    }
  }
  //return array to main
  return inputNouns;
}

//Creating inputPluralNouns array and returning array values to main
function enterPluralNouns () {
  //initialize variables
  var counter = 1;
  var inputPluralNouns = [];
  var userInput;

  //loop prompts user 6 times to enter plural nouns and uses if/else makes sure something is entered
  while (counter <= 6) {
    if (counter === 1) {
      userInput = prompt("Next, we will enter 6 plural nouns. Please enter your first plural noun.");
    } else {
      userInput = prompt("Enter Plural Noun number " + counter + " out of 6:");
    }
    if (userInput === "" || userInput === null) {
      alert("Be sure to fill in all prompts. Try again");
    } else {
      inputPluralNouns.push(userInput);
      counter++;
    }
  }
  //return array values to main
  return inputPluralNouns;
}

//creating inputVerbs array and returning array to main
function enterVerbs () {
  //initialize variables
  var counter = 1;
  var inputVerbs = [];
  var userInput;

  //loop prompts user to enter 2 verbs and uses if/else to make sure something is entered
  while (counter <= 2) {
    if (counter === 1) {
      userInput = prompt("Next, we will enter 2 past tense verbs. Please enter your first verb.");
    } else {
      userInput = prompt("Enter Past tense verb number " + counter + " out of 2:");
    }
    if (userInput === "" || userInput === null) {
      alert("Be sure to fill in all prompts. Try again");
    } else {
      inputVerbs.push(userInput);
      counter++;
    }
  }
  //return array values to main
  return inputVerbs;
}

//creating inputNumbers array and returning array values to main
function enterNumbers () {
  //intitialize variables
  var counter = 1;
  var inputNumbers = [];
  var userInput;

  //loop prompts user 4 times to enter numbers and uses if/else to make sure a Number is entered using isNaN
  while (counter <= 4) {
    if (counter === 1) {
      userInput = prompt("Next, we will enter 4 numbers. Please enter your first number.");
    } else {
      userInput = prompt("Enter Number " + counter + " out of 4:");
    }
    if (userInput === "" || userInput === null) {
      alert("Be sure to fill in all prompts. Try again");
    } else if (isNaN(userInput)) {
      alert("Be sure to enter a number. Try again");
    } else {
      inputNumbers.push(userInput);
      counter++;
    }
  }
  //return results to main
  return inputNumbers;
}

//creating inputEmotions array and returning array values to main
function enterEmotions () {
  //initialize variables
  var counter = 1;
  var inputEmotions = [];
  var userInput;

  //loop prompts user 4 times to enter emotion and makes sure something is entered using if/else
  while (counter <= 4) {
    if (counter === 1) {
      userInput = prompt("Finally, we will enter 4 emotions. Please enter your first emotion.");
    } else {
      userInput = prompt("Enter Emotion number " + counter + " out of 4:");
    }
    if (userInput === "" || userInput === null) {
      alert("Be sure to fill in all prompts. Try again");
    } else {
      inputEmotions.push(userInput);
      counter++;
    }
  }
  //returns results to main
  return inputEmotions;
}

//receiving array values from other functions and using values to create output to display
function main () {
  //alert used as introduction for user
  alert("You have selected the Outer Space Themed Mad-lib! Please take your time and" +
    " enter all of the requested information for the best experience." + 
    " Once all blanks are filled your personal story will display. Have Fun!");

  //declare variables in alphabetical order
  var emotions;
  var nouns;
  var numbers;
  var output = "";
  var pluralNouns;
  var verbs;
  
  // set variables equal to functions results in the order I want them to run
  nouns = enterNouns();
  pluralNouns = enterPluralNouns();
  verbs = enterVerbs();
  numbers = enterNumbers();
  emotions = enterEmotions();
  
  //alert that prompting is complete
  alert("Congratulations. You have now completed your Mad-Lib. I hope you enjoy your story!");

  //creating output using user values given by arrays in other functions
  output = "The year is 300" + numbers[0] + ". It has been " + numbers[1]; 
  output += " years since I embarked on this outer space exploration in search of ";
  output += pluralNouns[0] + ". This was my first space expedition. I remeber initially feeling ";
  output += emotions[0] + " but at this point I just feel " + emotions[1] + "."; 
  output += " I have traveled the length of over a million " + nouns[0] + "s from Earth, ";
  output += " with just my " + nouns[1] + " by my side. I am starting to realize we may never find " + pluralNouns[1];
  output += ". I new when I started this " + nouns[2] + " that the job would not be easy.";
  output += " Our first task was to explore the planet named " + nouns[3] + " but we soon learned that the planet was inhabitted by ";
  output += nouns[4] + " creatures and their enitre language was only one word, \"" + nouns[5];
  output += "\". They were friendly but we could find no " + pluralNouns[2]; 
  output += " on their planet so we " + verbs[0] + " and left the planet for good.";
  output += " Our next stop was a planet called " + nouns[6] + " that had become controlled by evil " + nouns[7];
  output += " people. We tried to tell these people that we were " + emotions[2];
  output += " but they did not care and attacked us. I made it out but they ate my " + nouns[8];
  output += " while I made my escape. I " + verbs[1] + " into my spaceship, turned on the antigravity " + nouns[9];
  output += ", but before I could take off, one of the creatures damaged the spaceship\'s ";
  output += nouns[9] + ". Luckily I was able to get off the planet, but my ship needed to be repaired soon.";
  output += " I traveled at " + numbers[2] + " miles per hour in a rush to get to a safe planet to start the repairs.";
  output += " I soon spotted an unknown planet, it looked as though it was covered in green " + nouns[10];
  output += "s and it was the shape of a giant " + nouns[11] + ". I did not want to stop there, but I had no choice.";
  output += " As soon as I landed I came face-to-face with a giant " + nouns[12];
  output += " it looked " + emotions [3] + " but it was friendly, or so I thought.";
  output += " The creature helped me to fix my ship, and even gave me some " + pluralNouns[3];
  output += " to eat. But it was a trap. Once I let my guard down, the creature tried to rob ";
  output += " me and to take all of my " + pluralNouns[4] + ". I had no choice but to to fight back.";
  output += " In the ruckus, I broke my " + nouns[13] + " and my communication device. ";
  output += " Eventually, I was able to escape using a " + nouns[14] + " as a weapon.";
  output += " Now, I am back in space, still searching the galaxy for " + pluralNouns[5];
  output += ", but now, without my communication device, all I have to talk to for the next " + numbers[3];
  output += " years, is my " + nouns[15] + ". Wish me luck, I hope to return to Earth soon!";
  
  //display output to user
  document.write(output);
}

//call main function to run program
main();
