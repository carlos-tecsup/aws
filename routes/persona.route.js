
const {Router}=require('express');
const { createPerson, getPersonById, getPersonas } = require('../controllers/persona.controller');

const router=Router();
router.post('/createPerson', createPerson);

router.get('/getUserById',getPersonById 
)
router.get('/getPersons',getPersonas)
module.exports = router;
