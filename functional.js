let countries = ["Norway", "Sweden", "Finland", "United States of America"];

// Returns a URL-friendly version of a string.
// Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join('-');
}

// map: Imperative version
function imperativeMap(countries) {
  let urlCountries = [];
  countries.forEach(function(country) {
    urlCountries.push(urlify(country));
  });
  return urlCountries;
}
console.log(imperativeMap(countries));


// map: Functional version
function functionalMap(countries) {
  return countries.map(country => urlify(country));
}
console.log(functionalMap(countries));

// filter: Imperative version
function imperativeFilter(countries) {
  let singleWordCountries = [];
  countries.forEach(function(country) {
    if (country.split(/\s+/).length === 1) {
      singleWordCountries.push(country);
    }
  });
  return singleWordCountries;
}
console.log(imperativeFilter(countries));

// filter: Functional version
function functionalFilter(countries) {
  return countries.filter(country => country.split(/\s+/).length === 1);
}
console.log(functionalFilter(countries));

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// reduce: Iterative solution
function iterativeSum(array) {
  let total = 0;
  array.forEach(function(n) {
    total += n;
  });
  return total;
}
console.log(iterativeSum(a));

// reduce: Functional solution
function functionalSum(array) {
  return array.reduce((total, n) => { return total += n });
}
console.log(functionalSum(a));

// reduce object: Imperative solution
function imperativeLengths(countries) {
  let lengths = {};
  countries.forEach(function(country) {
    lengths[country] = country.length;
  });
  return lengths;
}
console.log(imperativeLengths(countries));

// reduce object: Functional solution
function functionalLengths(countries) {
  return countries.reduce((lengths, country) => {
    lengths[country] = country.length;
    return lengths;
  }, {});
}
console.log(functionalLengths(countries));
