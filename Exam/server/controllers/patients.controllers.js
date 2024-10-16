const Patient = require("../models/patients.model");

const createPatient = async (req, res) => {
  try {
    const newPatient = await Patient.create(req.body);
    res.json(newPatient);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    res.json(patient);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updatePatient = async (req, res) => {
  try {
    const updatedPatient = await Patient.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.json(updatedPatient);
  } catch (error) {
    res.status(400).json(error);
  }
};

const deletePatient = async (req, res) => {
  try {
    const deletedPatient = await Patient.findByIdAndDelete(req.params.id);
    res.json(deletedPatient);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  createPatient,
  getAllPatients,
  getPatientById,
  updatePatient,
  deletePatient,
};
