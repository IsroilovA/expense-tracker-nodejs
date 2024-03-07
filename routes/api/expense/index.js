const express = require('express');
const { validationResult } = require('express-validator');
const { addExpenseValidation, deleteExpenseValidation, updateExpenseValidation} = require('../../../validators/expense');

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
}),


router.put('/:id', updateExpenseValidation(), (req, res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  expense_controller.update(req, res)
})

router.delete('/:id', deleteExpenseValidation(), (req, res, next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    expense_controller.delete(req, res)
  })
  

module.exports = router;