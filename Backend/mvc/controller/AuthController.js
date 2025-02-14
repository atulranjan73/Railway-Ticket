const usermodel = require("../model/AuthenticationModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await usermodel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new usermodel({ name, email, password: hashedPassword });
    await newUser.save();

    res.json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await usermodel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id, email: user.email }, "SECRET_KEY", { expiresIn: "2h" });

    res.json({ message: "Login successful", token, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const reset = async (req, res) => {
  try {
    res.send("Password reset successful...");
  } catch (error) {
    console.error("Password reset failed", error);
  }
};

const getall = async (req, res) => {
  try {
    const users = await usermodel.find();
    res.status(200).json({ message: "All users fetched...", users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { signup, Login, reset, getall };
