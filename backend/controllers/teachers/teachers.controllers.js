import Teacher from "../../models/teachers.model.js";
import sharp from "sharp";
export const getTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).send(teachers);
  } catch (error) {
    console.log("Something went wrong in get Teachers controller", error);
    res.status(404).json({ message: error.message });
  }
};

export const getTeacherById = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found!" });
    }
    res.status(200).json(teacher);
  } catch (error) {
    console.log("Something went wrong in get Teacher by id controller", error);
    res.status(404).json({ message: error.message });
  }
};

export const postTeacher = async (req, res) => {
  try {
    const { name, email, address, subject, role, phone, education } = req.body;

    // Check if file is present in the request
    if (!req.file) {
      throw new Error("File not provided");
    }

    // Use sharp to compress and convert the image to base64
    const compressedImageBuffer = await sharp(req.file.buffer)
      .resize({ width: 300 }) // Adjust the width as needed
      .toBuffer();

    const base64Data = compressedImageBuffer.toString("base64");
    const teacher = new Teacher({
      name,
      email,
      address,
      subject,
      role,
      phone,
      image: base64Data,
      education,
    });
    await teacher.save();
    res.status(201).json(teacher);
  } catch (error) {
    console.log("Something went wrong in post Teacher controller", error);
    res.status(404).json({ message: error.message });
  }
};

export const updateTeacher = async (req, res) => {
  try {
    // Check if req.file is defined before accessing its properties
    if (req.file && req.file.buffer) {
      // Process the image
      const compressedImageBuffer = await sharp(req.file.buffer)
        .resize({ width: 300 })
        .toBuffer()
        .catch((error) => {
          throw new Error(`Error processing image: ${error.message}`);
        });

      const base64Data = compressedImageBuffer.toString("base64");

      // Update fields for both file and non-file updates
      const updateFields = {
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        subject: req.body.subject,
        role: req.body.role,
        phone: req.body.phone,
        image: base64Data,
        education: req.body.education,
      };

      // Use the { new: true } option to return the updated document
      const updatedTeacher = await Teacher.findByIdAndUpdate(
        req.params.id,
        updateFields,
        { new: true }
      );

      if (!updatedTeacher) {
        return res
          .status(404)
          .json({ message: "Teacher not found for updating" });
      }

      res.status(200).json(updatedTeacher);
    } else {
      // If no file is provided, update only non-file fields
      const updateFields = {
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        subject: req.body.subject,
        role: req.body.role,
        phone: req.body.phone,
        education: req.body.education,
      };

      const updatedTeacher = await Teacher.findByIdAndUpdate(
        req.params.id,
        updateFields,
        { new: true }
      );

      if (!updatedTeacher) {
        return res
          .status(404)
          .json({ message: "Teacher not found for updating" });
      }

      res.status(200).json(updatedTeacher);
    }
  } catch (error) {
    console.log("Something went wrong in update Teacher controller", error);
    res.status(404).json({ message: error.message });
  }
};

export const deleteTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndDelete(req.params.id);
    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found!" });
    }
    res.status(200).json({
      message: "Teacher deleted successfully",
    });
  } catch (error) {
    console.log("Something went wrong in delete Teacher controller", error);
    res.status(404).json({ message: error.message });
  }
};
