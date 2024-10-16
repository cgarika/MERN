import Person from "../models/person.model.js";
// create new
async function createPerson(req, res) {
  try {
    const newPerson = await Person.create(req.body);
    res.json(newPerson);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function getAllPeople(req, res) {
  try {
    const allPeople = await Person.find(); // here is our query to find Users
    res.json(allPeople);
  } catch (error) {
    console.log(error);
    res.status(400).json(error); // here is our error response
  }
}

async function getOnePerson(req, res) {
  try {
    const foundPerson = await Person.findById(req.params.id);
    res.json(foundPerson);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function updateOnePerson(req, res) {
  const options = {
    new: true,
    runValidators: true,
  };
  try {
    const updatedPerson = await Person.findByIdAndUpdate(
      req.params.id,
      req.body,
      options
    );
    res.json(updatedPerson);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function deleteOnePerson(req, res) {
  try {
    const deletedPerson = await Person.findByIdAndDelete(req.params.id);
    res.json(deletedPerson);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export {
  createPerson,
  getAllPeople,
  getOnePerson,
  updateOnePerson,
  deleteOnePerson,
};
