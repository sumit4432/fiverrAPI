
const gigModel = require("../schema/gigModel");
const createError = require("../utils/createError");

exports.createGig = async (res, req, next) => {
  if (!req.isSeller)
    return next(createError(403, "Only seller can create a gig"));
  const newGig = new gigModel({
    userId: req.UerId,
    ...req.body,
  });
  try {
    const savedGig = await newGig.save();
    res.status(201).json(savedGig);
  } catch (err) {
    next(err);
  }
};

exports.deleteGig=async(res,req, next)=>{
  try{
const gig= await gigModel.findById(req.params.id);
if(gigModel.userId !==req.userId)
return next(createError(403, "you can delete oly your gig"))
  }catch(err){
    next(err)
  }
};

exports.getGig=async(res,req,next)=>{
  try{

  }catch(err){
    next (err)
  }
};

exports.getGigs=async(res, req, next){
  try{

  }catch(err){
    next (err)
  }
}
