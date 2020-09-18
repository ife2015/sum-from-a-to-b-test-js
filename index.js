
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  //base case -> toN === fromN
  // recursive case
  // toN + sum(toN - 1)
  if(fromN === toN) {
    return fromN;
  }
  if(toN > fromN) {
    return toN + sum(fromN, toN-1);
  }

}

module.exports = sum;
