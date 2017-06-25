/*
Problem Statement:
Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.
*/

function slasher(arr, howMany) {
  if (arr.length <= howMany) {
    return [];
  }
  else if (howMany <= 0) {
    return arr;
  }
  else {
    return arr.slice(howMany,arr.length);
  }
}

slasher([1, 2, 3], 2);
