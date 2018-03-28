var _ = require('lodash');

// given the following array, randomize it.

var students = [
    'Dan'
  , 'Brack'
  , 'Erin'
  , 'Geordyn'
  , 'Jess'
  , 'Sarah'
  , 'Andrew'
  , 'Ryan'
  , 'Tim'
  , 'Stephen'
  , 'David'
  , 'Mark'
];

function randomArray(arr) {
  function randomNumber() {
    return Math.floor(Math.random() * arr.length);
  }
  var newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(randomNumber(), 1)[0]);
  }
  return newArr;
}

console.log(randomArray(students));


var puppyNames = [
    'Spot'
  , 'Socks'
  , 'Toast'
  , 'Sparky'
  , 'Furball'
  , 'Devil-dog'
  , 'Carl'
  , 'Kimmie'
  , 'Wolfie'
  , 'Rocket'
  , 'Jesse'
  , 'Jobe the nastiest'
];

function copyPuppy(puppy) {
  copy = Object.assign({}, puppy);
  copy.name = puppyNames[_.random(puppyNames.length - 1)];
  return copy;
}

var puppy = {
  name: 'Jesse'
};

let { name } = copyPuppy(puppy);
console.log(name);

let name1 = puppy.name;
console.log(name1);
