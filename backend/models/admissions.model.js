import mongoose from "mongoose";

const admissionSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    middleName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      trim: true,
    },
    phone: {
      type: Number,
      trim: true,
    },
    gender: {
      type: String,
      required: true,
      trim: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
      trim: true,
    },
    temporaryAddress: {
      type: String,
      required: true,
      trim: true,
    },
    permanentAddress: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    guardianName: {
      type: String,
      required: true,
      trim: true,
    },
    guardianPhone: {
      type: Number,
      required: true,
      trim: true,
    },
    school: {
      type: String,
      trim: true,
    },
    className: {
      type: String,
      required: true,
      trim: true,
    },
    course: {
      type: String,
      required: true,
      trim: true,
    },
    description:{
      type: String,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);

const Admission = mongoose.model("Admission", admissionSchema);

export default Admission;
