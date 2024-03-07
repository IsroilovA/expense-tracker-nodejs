//home controoller
const home_controller = {
    index: async (req, res) =>{
        //return home file
        res.render('home');
    }  
};
  
module.exports = home_controller;