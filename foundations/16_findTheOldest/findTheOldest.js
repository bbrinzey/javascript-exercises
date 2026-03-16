function getAge(person) {
  return (person.yearOfDeath ?? new Date().getFullYear()) - person.yearOfBirth;
}

const findTheOldest = function (people) {
  return people.reduce((a, b) => (getAge(a) > getAge(b) ? a : b));
};

// Do not edit below this line
module.exports = findTheOldest;
