const express = require('express');
const { validationResult } = require('express-validator');
const { addExpenseValidation } = require('../../../validators/expense');

const router = express.Router();
const expense_controller = require('../../../controllers/api/expense');

// Define API routes
router.get('/', (req, res)=>{
    expense_controller.getAll(req, res);
});

router.post('/', addExpenseValidation(), (req, res)=>{
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    expense_controller.create(req, res)
})

module.exports = router;