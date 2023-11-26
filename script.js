function toCase(text) {
  if (!text) {
    return '-';
  }

  const lowercase = text.toLowerCase();
  const uppercase = text.toUpperCase();

  return `${lowercase}-${uppercase}`;
}

// Prompt user for input and display the result
const userInput = prompt("Enter text:");
alert(toCase(userInput));

