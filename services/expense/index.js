const fs = require('fs')
// access global mock db file
const expenses = require(global.expense_db)

// write service method implementations
const expense_service = {
    getAll() {
        return expenses
    },
    create(req, res) {
        let new_id = genRandId(4)
                
        const expense = req.body

        const new_expense = {
            id: new_id,
            expense: expense
        }

        expenses.push(new_expense)
        
        writeToFile(expenses)
        
        return new_expense
    }
}
// create function for overwriting the db file updated db content
let writeToFile = async (users) => {
    await 
        fs.writeFileSync(
            global.mock_db,
            JSON.stringify(
                users, null, 4
            ),
            'utf8'
        )
}

// generate random id inspired by uuid
let genRandId = (count) =>{
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < count; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}

module.exports = expense_service