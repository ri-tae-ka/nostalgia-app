const Responses = require("../models/responseModel");

exports.createResponse = async (req, res, next) => {
  const response = await Responses.create(req.body);

  res.status(201).json({
    success: true,
    response,
  });
};

exports.getAllResponses = async (req, res) => {
  const responses = await Responses.find();

  res.status(200).json({
    success: true,
    responses,
  });
};

exports.updateResponse = async (req, res, next) => {
  let response = await Responses.findById(req.params.id);

  if (!response) {
    return res.status(500).json({
      success: false,
      message: "Response not found!",
    });
  }

  response = await Responses.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    userFindAndModify: false,
  });

  res.status(201).json({
    success: true,
    response,
  });
};

exports.deleteResponse = async (req, res, next) => {
  const response = await Responses.findById(req.params.id);

  if (!response) {
    return res.status(500).json({
      success: false,
      message: "Response not found!",
    });
  }

  await response.remove();

  res.status(200).json({
    success: true,
    message: "Response deleted successfully!",
  });
};

exports.getSingleResponse = async (req, res, next) => {
  const response = await Responses.findById(req.params.id);

  if (!response) {
    return res.status(500).json({
      success: false,
      message: "Response not found!",
    });
  }

  res.status(200).json({
    success: true,
    response,
  });
};
