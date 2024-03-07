// import specific service class
const expense_service = require('../../../services/expense/')

// mention the service's needed actions (methods)
const expense_controller = {
    getAll(req, res) {
        res.json(expense_service.getAll())
    },
    create(req, res) {
        res.status(201).json(
            expense_service.create(req, res)
        )
    },
    update(req, res) {
        const expense = expense_service.update(req.params.id, req.body)
        
        if (expense) {
            res.json(expense)
        } else {
            res.status(404).send('Expense not found')
        }
    },
    delete(req, res) {
        const expense = expense_service.getById(req.params.id)
        
        if (expense) {
            expense_service.delete(req.params.id)
            res.status(204).send('Exepense deleted successfully')
        } else {
            res.status(404).send('Expense not found')
        }
    }
}

module.exports = expense_controller