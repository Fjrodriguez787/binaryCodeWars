



function invert(array) {
  var inverted = [];
  for (var i = 0; i < array.length; i++) {
    inverted.push(parseInt(-array[i]));
  }
  return inverted;
}



Test Results:
 Invert array values
 Basic Tests (4 of 4 Assertions)
