let letter = prompt("Enter letter"); 

switch (letter.toUpperCase()) {
  case "A":
  case "E":
  case "I":
  case "O":
  case "U":
    console.log(letter + " is a vowel.");
    break;
  default:
    console.log(letter + " is not a vowel.");
    break;
}