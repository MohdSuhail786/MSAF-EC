const UserForm = require("../../models/UserForm");

exports.getCsv =async (req,res)=>{
    
    list = await UserForm.find({userId:req.body.userId})
    let i = list.length;
    let response = []
    list.forEach(e => {
        response.unshift({id: i--,...e._doc})
    });
    res.json(response,200);
}

exports.filterData = async (req,res) => {
    if (!req.body.filterObj) {
        return res.json({message: "illegal filter object"},200)
    }
    list = await UserForm.find(req.body.filterObj)
    let i = list.length;
    let response = []
    list.forEach(e => {
        response.unshift({id: i--,...e._doc})
    });
    return res.json(response,200);
}