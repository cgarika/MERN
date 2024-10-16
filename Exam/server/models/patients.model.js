const { model, Schema } = require("mongoose");

const patientSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "A patient's name is required."],
      minlength: [5, "Patient's name must be at least 5 characters long."],
      maxlength: [255, "Patient's name cannot exceed 255 characters."],
    },
    age: {
      type: String,
      required: [true, "A patient's age is required!"],
      minlength: [1, "Patients minimum age is 1"],
    },
    symptoms: {
      type: String,
      required: [true, "A patient's symptoms are required."],
      minlength: [5, "Patient's symptoms must be at least 5 characters long."],
      maxlength: [255, "Patient's symptoms cannot exceed 255 characters."],
    },
  },
  { timestamps: true }
);

const Patient = model("Patient", patientSchema);
module.exports = Patient;
