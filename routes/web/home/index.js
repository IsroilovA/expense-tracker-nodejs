const express = require('express');
const router = express.Router();
const home_controller = require('../../../controllers/web/home');

//get requests

router.get('/', home_controller.index);
//add new expense
router.get('/add', home_controller.add);
//update existing expense
router.get('/update', home_controller.update);

router.get('/update/:id', home_controller.update);



module.exports = router;