const person = {
  firstName: "Bob",
  lastName: "Marley",
  email: "bob@marley.com",
  address: [
    {
      street: "10345 Penn Ln",
      city: "LA",
      State: "CA",
    },
    {
      street: "19746 Hydra ln",
      city: "Frisco",
      state: "TX",
    },
  ],
};
const animals = ["horse", "dog", "fish", "cat", "bird"];

person.age = 22;

console.log(person);

const { email: userEmail } = person;

console.log(userEmail);

const {
  address: [addr1, addr2],
} = person;

console.log(addr1, addr2);

const {
  address: [, { street: addre1 }],
} = person;

console.log(addre1);
