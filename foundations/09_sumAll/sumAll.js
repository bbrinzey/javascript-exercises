const sumAll = function(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR";
  }

  if (a < 0 || b < 0) {
    return "ERROR";
  }

  if (a > b) {
    [a, b] = [b, a];
  }

  return ((b + a)*(b - a + 1)) / 2;
};

// Do not edit below this line
module.exports = sumAll;
