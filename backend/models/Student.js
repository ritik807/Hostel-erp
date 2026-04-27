import mongoose from "mongoose";

const installmentSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  paid: {
    type: Boolean,
    default: false,
  },
  finePerDay: {
    type: Number,
    default: 100,
  },
});

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    collegeName: {
      type: String,
      required: false,
    },
      role: {
    type: String,
    enum: ["admin", "student"],
    default: "student"
  },

    roomNo: {
      type: String,
      required: false,
    },
    fees: {
      type: Number,
      required: false,
    },
    installmentCount: {
      type: Number,
      required: true,
      default: 1,
    },
    installments: [installmentSchema],

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Student", studentSchema);