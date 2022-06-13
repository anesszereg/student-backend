const ExoController= require('../Controllers/Exo.controler');
const express = require('express');
const router = express.Router();


//add an exo
router.post('/addExo',ExoController.addExo);

//get all exos
router.get('/getExos',ExoController.getExos);

//get one exo
router.get('/getExo/:id',ExoController.getOneExo);

//update an exo


router.put('/updateExo/:id',ExoController.updateExo);



//delete an exo

router.delete('/deleteExo/:id',ExoController.deleteExo);


// get exo by student id using populate methode
router.get('/getExosByStudent/:id',ExoController.getExosByStudent);
module.exports = router;
