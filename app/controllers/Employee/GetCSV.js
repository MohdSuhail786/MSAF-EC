const UserForm = require("../../models/UserForm");

exports.getCsv = (req,res)=>{
    
    list = await UserForm.find({userId:req.body.userId})
    let i = list.length;
    let response = []
    list.forEach(e => {
        response.unshift({id: i--,...e._doc})
    });
    res.json(response,200);
}