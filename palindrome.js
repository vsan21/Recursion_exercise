//Palindrome: any string that is the same read forwards or backwards

//Returns the first character of the string, str. Slice() extracts a section of a string and returns it as a new string
function firstCharacter(str) {
  return str.slice(0, 1);
}
//Returns the last character of the string, str. If negative --> strLength + endIndex (so strLength - 1)
function lastCharacter(str) {
  return str.slice(-1);
}
//Returns the middle string after first and last are removed
function middleCharacters(str) {
  return str.slice(1, -1);
}

//######################################################################
function isPalindrome(str) {
  //Base Case: 'a' and '' is a palindrome so minimum, any string containing 0 or 1 letter is true.
  if (str.length === 0 || str.length === 1) {
    return true;
  }
  //Recursive Case: if first and last letters are the same, check the middle characters
  if (firstCharacter(str) === lastCharacter(str)) {
    return isPalindrome(middleCharacters(str));     //isPalindrome('aceca')
  }
  return false;
}

isPalindrome('racecar');
isPalindrome('step on no pets');
isPalindrome('a');
isPalindrome('goat');
