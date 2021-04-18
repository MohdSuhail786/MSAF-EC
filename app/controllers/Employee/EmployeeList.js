const User = require('../../models/User')

exports.getEmployees = async (req,res) => {
    try {
        
        let employees = []
        employees = await User.findMany({type:2})
        return res.json({employees : employees}).status(200)   
    } catch (err) {
        console.log(err.message)
    }
}