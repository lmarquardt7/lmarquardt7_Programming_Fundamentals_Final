//Medieval Themed Mad-lib
//Levi Marquardt

//Creating inputNouns Array and returning array to main
function enterNouns () {
  //initialize variables
  var counter = 1;
  var inputNouns = [];
  var userInput;
  
  //loop prompts for user to enter nouns 12 times and makes sure text is entered
  while (counter <= 12) {
    if (counter === 1) {
      userInput = prompt("We will start by entering 12 nouns. Please enter your first noun.");
    } else {
      userInput = prompt("Enter Noun number " + counter + " out of 12:");
    }
    if (userInput === "" || userInput === null) {
      alert("Be sure to fill in all prompts. Try again");
    } else {
      inputNouns.push(userInput);
      counter++;
    }
  }
  //return array
  return inputNouns;
}

//creating inputPluralNouns Array and returning array to main
function enterPluralNouns () {
  //initialize variables
  var counter = 1;
  var inputPluralNouns = [];
  var userInput;

  //loop prompts for user to enter plural nouns 6 times and makes sure text is entered
  while (counter <= 6) {
    if (counter === 1) {
      userInput = prompt("Next, we will enter 6 plural nouns. Please enter your first plural noun.");
    } else {
      userInput = prompt("Enter Plural Noun number  " + counter + " out of 6:");
    }
    if (userInput === "" || userInput === null) {
      alert("Be sure to fill in all prompts. Try again");
    } else {
      inputPluralNouns.push(userInput);
      counter++;
    }
  }
  //return array 
  return inputPluralNouns;
}

//creating inputVerbs array and returning array to main
function enterVerbs () {
  //initialize variabls
  var counter = 1;
  var inputVerbs = [];
  var userInput;
  
  //loop prompts user to enter different verbs 3 times and makes sure text is entered
  while (counter <= 3) {
    if (counter === 1) {
      userInput = prompt("Next, we will enter 3 verbs that end in \"-ing\". Please enter your first verb.");
    } else {
      userInput = prompt("Enter Verb ending in \"-ing\" number " + counter + " out of 3:");
    }
    if (userInput === "" || userInput === null) {
      alert("Be sure to fill in all prompts. Try again");
    } else {
      inputVerbs.push(userInput);
      counter++;
    }
  }
  //return array
  return inputVerbs;
}

//creating inputColors array and returning array to main
function enterColors () {
  //initialize variables
  var counter = 1;
  var inputColors = [];
  var userInput;

  //loop prompts user to enter 5 different colors and makes sure text is entered
  while (counter <= 5) {
    if (counter === 1) {
      userInput = prompt("Finally, we will enter 5 colors. Please enter your first color.");
    } else {
      userInput = prompt("Enter Color number " + counter + " out of 5:");
    }
    if (userInput === "" || userInput === null) {
      alert("Be sure to fill in all prompts. Try again");
    } else {
      inputColors.push(userInput);
      counter++;
    }
  }
  //return array
  return inputColors;
}

// receiving arrays from other functions and creating output to display
function main () {
  //start with an alert as an introduction
  alert("You have selected the Medieval Themed Mad-lib! Please take your time and" +
        " enter all of the requested information for the best experience." + 
        " Once all blanks are filled your personal story will display. Have Fun!");

  //initialize variables in order
  var colors; 
  var nouns;
  var output = "";
  var pluralNouns; 
  var verbs;  
  
  //set variables equal to results from arrays in order I want them to run
  nouns = enterNouns();
  pluralNouns = enterPluralNouns();
  verbs = enterVerbs();
  colors = enterColors();
    
  //alert that prompting is complete
  alert("Congratulations. You have now completed your Mad-Lib. I hope you enjoy your story!");

  //creating output using values saved in arrays given by users
  output = "Once upon a time in a faraway land there lived a " + nouns[0];
  output += " and his daughter, the " + nouns[1] + ". They lived in a " + nouns[2] + ".";
  output += " One evening during dinner, a " + nouns[3] + " stopped by and asked the " + nouns[4];
  output += " if he could have a jousting " + nouns[5] + ". The " + nouns[6];
  output += " thought this was a grand idea and invited everyone to attend. All of the " + pluralNouns[0];
  output += " arrived on their " + pluralNouns[1] + ". Several " + pluralNouns[2];
  output += " were excited to be there and were " + verbs[0] + " around. Other "; 
  output += pluralNouns[3] + " were much calmer and were just " + verbs[1];
  output += ". When the trumpet sounded, it was time to begin. The " + colors[0]; 
  output += " knight and the " + colors[1] + " knight were the first to compete. ";
  output += "The first competition was collection of the rings. The " + colors[2];
  output += " knight requested his " + nouns[7] + " from his " + nouns[8] + ". He asked his ";
  output += nouns[9] + " to start " + verbs[2] + " and was able to collect all of the rings. The other ";
  output += colors[3] + " knight was only able to collect three " + pluralNouns[4];
  output += ". The final part of the competition was called \"" + nouns[10];
  output += "\", where two knights ride their horses toward each other trying to knock each other off their ";
  output += nouns[11] + ". It was a great day at the castle for the " + colors[4];
  output += " knight. He won the tournament and received " + pluralNouns[5]; 
  output += " from the princess. The End!";

  //display output to user
  document.write(output);
}

//call main function to run program
main();
