/*
Problem Statement:
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWord(str) {
  var arr = str.split(' ');
  var max_len = 0;
  var max_word;
  for (var i=0;i<arr.length;i++) {
    if (arr[i].length > max_len) {
      max_len = arr[i].length;
      max_word = arr[i];
    }
  }
  return max_len;
}

findLongestWord("The quick brown fox jumped over the lazy dog");