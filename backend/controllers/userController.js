const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");

exports.registerUser = async (req, res, next) => {
  const { name, email, phoneNo, password } = req.body;

  const user = await User.create({ name, email, phoneNo, password });

  const token = user.getJWTToken();

  res.status(201).json({
    success: true,
    token,
    user,
  });
};

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please enter both email and password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid email or passowrd", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or passowrd", 401));
  }

  const token = user.getJWTToken();

  res.status(200).json({
    success: true,
    token,
    user,
  });
};

exports.logoutUser = async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
};
