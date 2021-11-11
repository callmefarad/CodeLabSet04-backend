const marketModel = require('../model/marketModel');
const cloudinary = require('../config/cloudinary');
const fs = require("fs");


// getting all the markets available for users
const allMarket = async (req, res) => {
    try{
        const markets = await marketModel.find();
        if (markets.length === 0){
            return res.json({message: "No Available Market"})
        }
        res.json({message: "Available Markets", data: markets});
    }catch(err){
        res.json({message: err.message});
    }
}

// add new market 
const newMarket = async (req, res) => {
    try{
        const result = await cloudinary.uploader.upload(req.file.path);
        // console.log(result);
        const data = {
            name: req.body.name,
            image: result.secure_url,
            imagePath: req.file.path,
            cloudinaryPath: result.public_id,
        }
        const addMarket = await marketModel.create(data);
        res.json({addMarket});
    }catch(err){
        res.json({message: err.message});
    }
}

// find a market
const singleMarket = async (req, res) => {
    try{
        const marketId = await marketModel.findById(req.params.id)
        if(!marketId){
            res.json({ message: `${req.params.id} is not a valid id.`})
        }else{
            res.json({marketId})
        }
    }catch(err){
        res.json({message: err.message});
    }
}

// delete a market
const deleteMarket = async (req, res) => {
    try{
        const marketId = await marketModel.findById(req.params.id)
        if(!marketId){
            res.json({ message: `${req.params.id} is not a valid id.`})
        }
        await cloudinary.uploader.destroy(marketId.cloudinaryPath);
        await fs.unlinkSync(marketId.imagePath);
        const del = await marketId.remove();
        res.json({message: "deleted successfully"});
    }catch(err){
        res.json({message: err.message});
    }
}

// update a market
const updateMarket = async (req, res) => {
    try{
        const marketId = await marketModel.findById(req.params.id);
        if (!marketId){
            res.json({ message: `${req.params.id} is not a valid market` });
        }
        await cloudinary.uploader.destroy(marketId.cloudinaryPath);
        const result = await cloudinary.uploader.upload(req.file.path);
        const data = {
            name: req.body.name,
            image: result.secure_url,
            imagePath: req.file.path,
            cloudinaryPath: result.public_id,
        }
        const updated = await marketModel.findByIdAndUpdate(req.params.id, data, {new: true,})
        res.json({updated: updated})
    }catch(err){
        res.json({message: err.message});
    }
}

module.exports = {
    allMarket,
    newMarket,
    deleteMarket,
    singleMarket,
    updateMarket
}