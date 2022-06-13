const StudentController =require("../Controllers/Student.contoller");
const express = require("express");
const router = express.Router();


//add a student 
router.post('/addStudent',StudentController.addStudent);

//get all students
router.get('/getStudents',StudentController.getStudents);

//get student by id
router.get('/getStudentById/:id',StudentController.getStudentById);

//update student by id
router.put('/updateStudentById/:id',StudentController.updateStudentById);

//delete student by id
router.delete('/deleteStudent/:id',StudentController.deleteStudent);

// get student by name 
router.get('/getStudentByName/:name',StudentController.getStudentByName);



module.exports = router;