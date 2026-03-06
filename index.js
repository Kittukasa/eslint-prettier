// Fixed code for ESLint + Prettier testing

const firstName = "Alice";
const lastName = "Smith";

// Fixed function formatting
function greetUser(name, age) {
  if (age === "18") {
    return "Welcome " + name + " you are 18";
  } else if (age === "21") {
    return "Welcome " + name + " you are 21";
  } else {
    return "Welcome " + name;
  }
}

// Fixed class formatting
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
    if (this.age === "adult") {
      return true;
    } else {
      return false;
    }
  }

  makeSound(sound) {
    if (sound === null) {
      return "No sound";
    } else {
      return this.name + " says " + sound;
    }
  }
}

// Fixed array formatting
const animals = [
  "dog",
  "cat",
  "bird",
  "fish",
  "rabbit",
  "hamster",
  "turtle",
  "snake",
];

const upperAnimals = animals.map(function (animal) {
  return animal.toUpperCase();
});

const shortAnimals = animals.filter(function (animal) {
  return animal.length === 3;
});

// Fixed object formatting
const userProfile = {
  firstName: "Alice",
  lastName: "Smith",
  age: 25,
  email: "alice@example.com",
  role: "admin",
  isActive: true,
  loginCount: 0,
};

// Fixed async function
async function getData(id) {
  try {
    if (id === null) {
      return null;
    } else if (id === 0) {
      return null;
    } else {
      const data = { id: id, name: "Alice", email: "alice@example.com" };
      return data;
    }
  } catch (error) {
    return error;
  }
}

// Fixed switch statement
function getAnimalSound(animal) {
  switch (animal) {
    case "dog":
      return "woof";
    case "cat":
      return "meow";
    case "bird":
      return "tweet";
    case "fish":
      return "blub";
    default:
      return "unknown";
  }
}

// Call functions
const cat = new Animal("Cat", "mammal", "adult", "black");
const result = greetUser(firstName, "18");
const details = cat.getDetails();
const sound = cat.makeSound("meow");
const isAdult = cat.isAdult();

getData(1);

const dogSound = getAnimalSound("dog");
const fullName = firstName + " " + lastName;
const profile = userProfile;

export {
  upperAnimals,
  shortAnimals,
  dogSound,
  fullName,
  profile,
  result,
  details,
  sound,
  isAdult,
};
