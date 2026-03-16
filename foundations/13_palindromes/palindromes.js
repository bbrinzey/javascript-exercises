const palindromes = function (str) {
  const cleaned = str.match(/\w|\d/g).map((c) => c.toLowerCase());
  return cleaned.join("") === cleaned.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
