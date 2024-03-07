const fs = require('fs')
// access global mock db file
const expenses = require(global.expense_db)

// write service method implementations
const expense_service = {
    getAll() {
        return expenses
    }
}

module.exports = expense_service
