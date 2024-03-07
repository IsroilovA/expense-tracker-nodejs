// import specific service class
const expense_service = require('../../../services/expense/')

// mention the service's needed actions (methods)
const expense_controller = {
    getAll(req, res) {
        res.json(expense_service.getAll())
    }
}

module.exports = expense_controller