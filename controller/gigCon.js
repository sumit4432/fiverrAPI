const gigModel = require("../schema/gigModel");
const Gig = require("../schema/gigModel");
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

exports.deleteGig = async (res, req, next) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if (Gig.userId !== req.userId)
      return next(createError(403, "you can delete oly your gig"));
    await Gig.findByIdAndDelete(req.params.id);
    res.status(200).json("gig has been deleted");
  } catch (err) {
    next(err);
  }
};

exports.getGig = async (res, req, next) => {
  try {
    const gig = await gigModel.findById(req.params.id);
    if (!gig) next(createError(404, "gig not found"));
    res.status(200).json(gig);
  } catch (err) {
    next(err);
  }
};

exports.getGigs = async (res, req, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
