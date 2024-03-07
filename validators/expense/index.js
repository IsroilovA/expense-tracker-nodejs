const { body } = require('express-validator');

const addExpenseValidation = () => {
  return [
    body('Category')
      .notEmpty().withMessage('Category'),
    body('DateTime')
      .notEmpty().withMessage('Event date time must not be empty')
      .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d\s([01][0-9]|2[0-3]):([0-5][0-9])$/, 'g')
        .withMessage('Invalid date and time format. Please use "DD/MM/YYYY HH:mm" format.'),
    body('Amount')
      .notEmpty().withMessage('Amount must not be empty'),    
  ];
};

module.exports = {
    addExpenseValidation
};