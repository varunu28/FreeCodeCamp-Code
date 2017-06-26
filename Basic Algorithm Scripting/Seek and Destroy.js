/*
Problem Statement:
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
*/

function destroyer(arr) {
  var dest = [];
  for (var i=1;i<arguments.length;i++) {
    dest.push(arguments[i]);
  }
  return arr.filter(function(val) {
    return dest.indexOf(val) == -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

