/**
 * Power function to raise x to power y
 * @param {*} x
 * @param {*} y
 */
function power(x, y) {
  if (y == 0) {
    return 1;
  } else if (y == 1) {
    return x;
  } else {
    if (y % 2 != 0) {
      return x * power(x * x, Math.floor(y / 2));
    } else {
      return power(x * x, Math.floor(y / 2));
    }
  }
}

module.exports = power;
