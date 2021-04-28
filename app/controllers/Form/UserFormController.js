const UserForm = require("../../models/UserForm")

exports.submitForm = async (req,res) => {
    req.body.userId = req.user.id
    console.log(req.user)
    if (req.body._id != "") {
        await UserForm.updateOne({_id:req.body._id},req.body)
        return res.json({message: "Form updated"})
    } 
    let userForm = new UserForm(req.body);
    await userForm.save();
    return res.json({message: "Form submitted"})
}