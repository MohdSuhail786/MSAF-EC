const formidable = require('formidable')
const fs =require('fs-extra')

exports.fileUpload = (req,res) => {
    try {
        
        let form = new formidable.IncomingForm()
        form.uploadDir = "./uploads"
        form.keepExtensions = true
        console.log(req.body)
        form.parse(req, (err, fields, files) => {
            console.log("form.bytesReceived")
            console.log(files)
            if (Object.keys(files).length) {
                console.log("file size: "+JSON.stringify(files.fileUploaded.size))
                console.log("file path: "+JSON.stringify(files.fileUploaded.path))
                console.log("file name: "+JSON.stringify(files.fileUploaded.name))
                console.log("file type: "+JSON.stringify(files.fileUploaded.type))
                console.log("lastModifiedDate: "+JSON.stringify(files.fileUploaded.lastModifiedDate))
                res.json({message: "File uploaded successfully",filename: files.fileUploaded.path}).status(200)
            }
            else res.json({message: "No file Selected", filename: "NULL"})
        })
    } catch (err) {
        res.json({message: "File Not Found",filename: "NULL"})
    }
}