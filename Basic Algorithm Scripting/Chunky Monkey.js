/*
Problem Statement:
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  var ans = [];
  var temp = [];
  for (var i=0;i<arr.length;i++) {
    if (i%size === 0 && i !== 0) {
       ans.push(temp);
      temp = [];
    }
    temp.push(arr[i]);
  }
  if (temp.length > 0) {
    ans.push(temp);
  }
  return ans;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
