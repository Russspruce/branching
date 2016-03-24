$(document).ready(function() {

  var animalChoice = parseInt(prompt("Select the # for the animal you would like to learn about:\n1) Insects\n2) Turtles\n3) Snakes"));

   if (animalChoice === 1) {
     $(location).attr("href", "https://en.wikipedia.org/wiki/Insect");
   } else if (animalChoice === 2) {
     $(location).attr("href", "https://en.wikipedia.org/wiki/Turtle");
   } else if (animalChoice === 3) {
     $(location).attr("href", "https://en.wikipedia.org/wiki/Snake");
   } else {
     alert("Not an option, try again.");
   }

});
