const router = require('express').Router()
const {registerValidation,loginValidation,auth} = require('../app/middlewares/auth')
const {register} = require('../app/controllers/Auth/RegisterController')
const {login} = require('../app/controllers/Auth/LoginController')
const { refreshToken } = require('../app/controllers/Auth/RefreshTokenController')
const { fileUpload } = require('../app/controllers/FileHandling/FileUploadController')
const { downloadFile } = require('../app/controllers/FileHandling/FileDownloadController')
const { submitForm } = require('../app/controllers/Form/UserFormController')
const { listAll } = require('../app/controllers/Form/ListController')

router.post('/register',registerValidation,register)
router.post('/login',loginValidation,login)
router.post('/refresh_session',refreshToken)

router.get('/protected',auth,(req,res) => {
    res.json({message:"ACCESSED"}).status(200);
})

router.post('/upload',auth,fileUpload)
router.post('/submitForm',auth,submitForm)
router.get('/download/:filename',downloadFile)

router.post('/getList',auth,listAll);


router.post('/validate',auth,(req,res)=> {
    return res.json({message:"Done",type: req.user.type}).status(200);
})


module.exports = router