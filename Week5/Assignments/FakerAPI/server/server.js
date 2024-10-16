import express from "express";
import { faker } from "@faker-js/faker";

const app = express();
const port = 8001;

app.use(express.json());

const createUser = () => {
  return {
    _id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phoneNumber: faker.phone.number(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};

const createCompany = () => {
  return {
    _id: faker.string.uuid(),
    name: faker.company.name(),
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      country: faker.location.country(),
    },
  };
};

/**
 * Route to create a new user
 * Method: POST
 * Endpoint: /api/users/new
 */
app.post("/api/users/new", (req, res) => {
  const newUser = createUser();
  res.json(newUser);
});

/**
 * Route to create a new company
 * Method: POST
 * Endpoint: /api/companies/new
 */
app.post("/api/companies/new", (req, res) => {
  const newCompany = createCompany();
  res.json(newCompany);
});

/**
 * Route to create both a new user and a new company
 * Method: POST
 * Endpoint: /api/user/company
 */
app.post("/api/user/company", (req, res) => {
  const newUser = createUser();
  const newCompany = createCompany();
  res.json({ user: newUser, company: newCompany });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
