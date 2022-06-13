const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  FirstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  groupe:{
      type:Number

  },

  date: {
    type: Date,
    default: Date.now,
  },
  Exos: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exo",
    },
  ],
});

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
