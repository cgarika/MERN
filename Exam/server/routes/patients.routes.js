const { Router } = require("express");
const {
  createPatient,
  getAllPatients,
  getPatientById,
  updatePatient,
  deletePatient,
} = require("../controllers/patients.controllers.js");

const router = Router();

router.route("/patients").post(createPatient).get(getAllPatients);
router
  .route("/patients/:id")
  .get(getPatientById)
  .put(updatePatient)
  .delete(deletePatient);

module.exports = router;
