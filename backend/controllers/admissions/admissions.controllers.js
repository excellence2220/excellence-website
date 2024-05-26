import Admission from "../../models/admissions.model.js";
import sharp from "sharp";

export const getAdmission = async (req, res) => {
  try {
    const admission = await Admission.find();
    res.status(200).json(admission);
  } catch (error) {
    console.log("Something went wrong in get Admission controller", error);
    res.status(404).json({ message: error.message });
  }
};

export const getAdmissionByID = async (req, res) => {
  try {
    const admission = await Admission.findById(req.params.id);
    if (!admission) {
      return res.status(404).json({ message: "Admission not found!" });
    }
    res.status(200).json(admission);
  } catch (error) {
    console.log(
      "Something went wrong in get Admission by id controller",
      error
    );
    res.status(404).json({ message: error.message });
  }
};

export const postAdmission = async (req, res) => {
  try {
    const {
      firstName,
      middleName,
      lastName,
      email,
      phone,
      gender,
      dateOfBirth,
      guardianName,
      guardianPhone,
      school,
      className,
      course,
      temporaryAddress,
      permanentAddress,
      description,
    } = req.body;

    // Check if file is present in the request
    if (!req.file) {
      throw new Error("File not provided");
    }

    // Use sharp to compress and convert the image to base64
    const compressedImageBuffer = await sharp(req.file.buffer)
      .resize({ width: 300 }) // Adjust the width as needed
      .toBuffer();

    const base64Data = compressedImageBuffer.toString("base64");

    const newAdmission = new Admission({
      firstName,
      middleName,
      lastName,
      email,
      phone,
      gender,
      dateOfBirth,
      temporaryAddress,
      permanentAddress,
      image: base64Data,
      guardianName,
      guardianPhone,
      school,
      className,
      course,
      description,
    });

    const newSavedAdmission = await newAdmission.save();
    res.status(200).json(newSavedAdmission);
  } catch (error) {
    console.log("Something went wrong in post Admission controller", error);
    res.status(400).json({ message: error.message });
  }
};

export const deleteAdmission = async (req, res) => {
  try {
    const admission = await Admission.findByIdAndDelete(req.params.id);
    if (!admission) {
      return res.status(404).json({ message: "Admission not found!" });
    }
    res.status(200).json({ message: "Admission deleted successfully" });
  } catch (error) {
    console.log("Something went wrong in delete Admission controller", error);
    res.status(404).json({ message: error.message });
  }
};
