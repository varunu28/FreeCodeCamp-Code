/*
Problem Statement:
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/

function bouncer(arr) {
  return arr.filter(Boolean);
}

bouncer([false, null, 0, NaN, undefined, ""]);
