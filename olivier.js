const solvingArray = (array) => {
    const specialCharacters = ['!', '@', '#', '?', '$', '*', '%', '&', '...'];
    
    // Helper function to check if a character is special
    const isSpecial = (char) => specialCharacters.includes(char);
    
    // Iterate through the array and add backslashes where needed
    const result = array.map((str) => {
      let modifiedStr = '';
      for (let i = 0; i < str.length; i++) {
        if (isSpecial(str[i]) || str[i] === '') {
          modifiedStr += '\\' + str[i];
        } else {
          modifiedStr += str[i];
        }
      }
      return modifiedStr;
    });
    
    return result;
  };
  
  // Test cases
console.log(solvingArray(["karera", "/", "david", "!", "$", ""]));