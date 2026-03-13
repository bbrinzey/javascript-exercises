const removeFromArray = function(array, ...items) {
  const itemsSet = new Set(items);
  return array.filter(x => !itemsSet.has(x));
};

// Do not edit below this line
module.exports = removeFromArray;
