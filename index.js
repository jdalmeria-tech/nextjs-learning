function displayPerson({firstName, lastName, age, job="Unemployed"}) {
  console.log(`name: ${firstName} ${lastName}`);
  console.log(`age: ${age}`);
  console.log(`current job: ${job}`);
};

const person1 = {
  firstName: "SpongeBob",
  lastName: "Squarepants",
  age: 30,
  job: "Fry Cook"
}

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 34
}

displayPerson(person1);
displayPerson(person2);

// this js file goes hand in hand with destructuring.html since I am learning and reviewing about it (:
// credits to broCode