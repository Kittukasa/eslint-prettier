// Bad code for ESLint + Prettier testing

var firstName = 'Alice';
var lastName = 'Smith';
var unusedVar = 'not used';
var anotherUnused = 100;

// Bad function formatting
function greetUser(name, age) {
  if (age == '18') {
    console.log('Welcome ' + name + ' you are 18');
  } else if (age == '21') {
    console.log('Welcome ' + name + ' you are 21');
  } else {
    console.log('Welcome ' + name);
  }
}

// Bad class formatting
class Animal {
  constructor(name, type, age, color) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.color = color;
    this.isAlive = true;
  }

  getDetails() {
    return {
      name: this.name,
      type: this.type,
      age: this.age,
      color: this.color,
    };
  }

  isAdult() {
    if (this.age == 'adult') {
      console.log(this.name + ' is an adult');
      return true;
    } else {
      console.log(this.name + ' is not an adult');
      return false;
    }
  }

  makeSound(sound) {
    if (sound == null) {
      console.log('No sound');
    } else {
      console.log(this.name + ' says ' + sound);
    }
  }
}

// Bad array formatting
var animals = [
  'dog',
  'cat',
  'bird',
  'fish',
  'rabbit',
  'hamster',
  'turtle',
  'snake',
];

var upperAnimals = animals.map(function (animal) {
  return animal.toUpperCase();
});

var shortAnimals = animals.filter(function (animal) {
  return animal.length == 3;
});

// Bad object formatting
var userProfile = {
  firstName: 'Alice',
  lastName: 'Smith',
  age: 25,
  email: 'alice@example.com',
  role: 'admin',
  isActive: true,
  loginCount: 0,
};

// Bad async function
async function getData(id) {
  try {
    if (id == null) {
      console.log('ID is null');
      return null;
    } else if (id == 0) {
      console.log('ID is zero');
      return null;
    } else {
      var data = { id: id, name: 'Alice', email: 'alice@example.com' };
      console.log('Data fetched: ', data);
      return data;
    }
  } catch (error) {
    console.log('Error: ', error);
  }
}

// Bad switch statement
function getAnimalSound(animal) {
  switch (animal) {
    case 'dog':
      return 'woof';
    case 'cat':
      return 'meow';
    case 'bird':
      return 'tweet';
    case 'fish':
      return 'blub';
    default:
      return 'unknown';
  }
}

// Call functions
var cat = new Animal('Cat', 'mammal', 'adult', 'black');
cat.getDetails();
cat.isAdult();
cat.makeSound('meow');
getData(1);
console.log(upperAnimals);
console.log(shortAnimals);
console.log(getAnimalSound('dog'));
console.log(firstName + ' ' + lastName);

// This will cause ESLint ERRORS
var x = 10
if(x == "10"){
    console.log(x)
}