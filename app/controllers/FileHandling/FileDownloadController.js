
exports.downloadFile = (req,res) => {
    let filePath = "uploads/" + req.params.filename;
    console.log(filePath);
	res.download(filePath,(err)=>{console.log(err);})
}
