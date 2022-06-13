const Student = require("../models/Student");   


const StudentController = {};

StudentController.addStudent = async (req, res) => {
    try {
        const {
            FirstName,
            email,
            lastName,
            date,
            groupe
        }= req.body;
        const student = new Student({
            FirstName,
            email,
            lastName,
            date,
            groupe
        });
        await student.save();
        res.status(201).json({
            message: "Student added successfully",
            student,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error occurred while adding student",
            error,
        });
    }
};



// get all students
StudentController.getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({
            message: "error getting students",
            students,

        });
    }
};

// get student by id
StudentController.getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({
            message: "error getting student",
            error,
        });
    }
}


// delete student

StudentController.deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "student deleted successfully",
            student,
        });
    } catch (error) {
        res.status(500).json({
            message: "error deleting student",
            error,
        });
    }
}

// update student by id
StudentController.updateStudentById = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            message: "student updated successfully",
            student,
        });
    } catch (error) {
        res.status(500).json({
            message: "error updating student",
            error,
        });
    }
}

// get student by name
StudentController.getStudentByName = async (req, res) => {
    try {
        const student = await Student.find({
            FirstName: req.params.name
        });
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({
            message: "error getting student",
            error,
        });
    }
}


module.exports = StudentController;
