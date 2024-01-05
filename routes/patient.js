const express = require('express');
const { getPatients,getPatientWithCID } = require('../controllers/patient');

const router = express.Router();

router.get('/', getPatients);
router.get('/:cid', getPatientWithCID);

module.exports = router;