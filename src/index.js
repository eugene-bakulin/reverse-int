module.exports = function reverse (n) {
  let reverseNumber = '';
  if (String(n)[0] != '-') {
    for (let i = String(n).length - 1; i >= 0; i --) {
        reverseNumber += String(n)[i];
    }
  } else {
    for (let i = String(n).length - 1; i >= 1; i --) {
        reverseNumber += String(n)[i];
    }
  }
  return +reverseNumber;
}
