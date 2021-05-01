const UserForm = require("../../models/UserForm")

exports.submitForm = async (req,res) => {
try{
    req.body.userId = req.user.id
    console.log(req.user)
	console.log(req.body.user_id)
    if (req.body.user_id != "") {
        req.body.userId = req.body.employeeId
        await UserForm.updateOne({_id:req.body.user_id},req.body)
        return res.json({message: "Form updated"})
    } 
    let userForm = new UserForm(req.body);
    await userForm.save();
    return res.json({message: "Form submitted"})
}
catch(err){console.log(err.message); console.log("SUHAIL"); console.log(err)}
}
