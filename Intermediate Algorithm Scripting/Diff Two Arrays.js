/*
Problem Statement:
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
  var newArr = [];
  var temp1 = arr1.filter(function(elem){
    return arr2.indexOf(elem) == -1;
  });
  
  var temp2 = arr2.filter(function(elem){
    return arr1.indexOf(elem) == -1;
  });
  
  newArr = temp1.concat(temp2);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

