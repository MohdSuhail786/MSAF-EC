const UserForm = require("../../models/UserForm")

exports.submitForm = async (req,res) => {
try{
    req.body.userId = req.user.id
  
    if (req.body.user_id != "") {
        req.body.userId = req.body.employeeId
        if (req.body.fileName == null || req.body.originalFileName == null) {
            let oldForm = await UserForm.find({_id:req.body.user_id});
            req.body.fileName = oldForm.fileName;
            req.body.originalFileName = oldForm.originalFileName;
        }
        await UserForm.updateOne({_id:req.body.user_id},req.body)
        return res.json({message: "Form updated"})
    } 
    let userForm = new UserForm(req.body);
    await userForm.save();
    return res.json({message: "Form submitted"})
}
catch(err){console.log(err.message); console.log("SUHAIL"); console.log(err)}
}
