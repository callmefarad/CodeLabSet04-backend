const marketModel = require('../model/marketModel')
const cloudinary = require('../config/cloudinary')


// create new market
const newMarket = async (req, res) => {
    try{
        const result = await cloudinary.uploader.upload(req.file.path);
        // console.log(result);
        const data = {
            name: req.body.name,
            location: req.body.location,
            image: result.secure_url,
            imagePath: req.file.path,
            cloudinaryPath: result.public_id
        }
        const market = await marketModel.create(data);
        if(!market){
            res.status(404).json({message: "Can not create market."})
        }else{
            res.status(200).json({message: "Market created successfully", data:market})
        }
    }catch(err){
        res.status(400).json({message: err.message})
    }
}

module.exports = {
    newMarket
}