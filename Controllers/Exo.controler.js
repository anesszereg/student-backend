const Exo = require("../models/Exo");
// const Student = require("../models/Student");
const ExoController = {};

//add an exo
ExoController.addExo = async (req, res) => {
    try{
        const { title, description, date, duration, level ,students } = req.body;
        const exo = new Exo({
            title,
            description,
            date,
            duration,
            level,
            students 
        });
        await exo.save();
        res.status(201).json({
            message: "Exo added successfully",
            exo,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error occurred while adding exo",
            error,
        });
    }
};


//get all exos
ExoController.getExos = async (req, res) => {
  try {
    const exos = await Exo.find();
    res.status(200).json(exos);
  } catch (error) {
    res.status(500).json({
      message: "error getting exos",
      exos,
    });
  }
};

//get one exo
ExoController.getOneExo = async (req, res) => {
    try {
        const exo = await Exo.findById(req.params.id);
        res.status(200).json(exo);
    } catch (error) {
        res.status(500).json({
            message: "error getting exo",
            exo,
        });
    }
};


// GET  exo by student id using populate methode
ExoController.getExosByStudent = async (req, res) => {
    try {
        const exos = await Exo.find({students:req.params.id}).populate('students');
        res.status(200).json(exos);
    } catch (error) {
        res.status(500).json({
            message: "error getting exos",
            exos,
        });
    } 
}




//delete an exo
ExoController.deleteExo = async (req, res) => {
  try {
    const exo = await Exo.findByIdAndDelete(req.params.id);
    res.status(200).json(exo);
  } catch (error) {
    res.status(500).json({
      message: "error deleting exo",
      exo,
    });
  }
};

//update an exo
ExoController.updateExo = async (req, res) => {
  try {
    const exo = await Exo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(exo);
  } catch (error) {
    res.status(500).json({
      message: "error updating exo",
      exo,
    });
  }
};

module.exports = ExoController;
