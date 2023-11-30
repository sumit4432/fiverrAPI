require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../schema/userModel");

exports.register = async (req, res) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new UserModel({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Something went wrong", details: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ username: req.body.username });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);

    if (!isCorrect) {
      return res.status(401).json({ error: "Incorrect password or username" });
    }

    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      process.env.JWT_KEY
    );

    const { password, ...info } = user._doc;

    res
      .cookie("accessToken", token, {
        httpOnly: true,
        secure: true,
      })
      .status(200)
      .json(info);
  } catch (err) {
    console.error("Error occurred during login:", err);
    res
      .status(500)
      .json({ error: "An error occurred during login. Please try again." });
  }
};

exports.logout = (req, res) => {
  try {
    res.clearCookie("accessToken");
    res.status(200).json({ message: "User logged out successfully" });
  } catch (err) {
    console.error("Error occurred during logout:", err);
    res
      .status(500)
      .json({ error: "An error occurred during logout. Please try again." });
  }
};
