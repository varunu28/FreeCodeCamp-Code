/*
Problem Statement:
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
  str =  str.split(' ').map(function(val) {
    return val.substr(0,1).toUpperCase() + val.substr(1,val.length).toLowerCase();
  }); 
  
  return str.join(' ');
}

titleCase("I'm a little tea pot");