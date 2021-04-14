const UserForm = require("../../models/UserForm")

exports.submitForm = async (req,res) => {
    req.body.userId = req.user.id
    console.log(req.user)
    let userForm = new UserForm(req.body);
    await userForm.save();
    res.json({message: "Form submitted"})
}