function isPalindrome(str) {
  function isAlphabetic(char) {
      return /^[a-zA-Z]$/.test(char);
  }
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
      while (left < right && !isAlphabetic(str[left])) {
          left++;
      }
      while (left < right && !isAlphabetic(str[right])) {
          right--;
      }
      // Compare characters ignoring case
      if (str[left].toLowerCase() !== str[right].toLowerCase()) {
          return false;
      }
      // Move to the next characters
      left++;
      right--;
  }
  return true;
}
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("robot")); // false
console.log(isPalindrome("")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("Mom")); // true
console.log(isPalindrome("a man a plan a canal panama")); // true
function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Compare the string with its reverse
  return cleanStr === cleanStr.split('').reverse().join('');
}

module.exports = isPalindrome;