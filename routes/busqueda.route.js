const {Router}=require('express');
const { searchPerson } = require('../controllers/persona.controller');

const router=Router();

router.get('/:busqueda', searchPerson);

module.exports = router;
