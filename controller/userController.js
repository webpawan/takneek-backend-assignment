import User from "../model/userModule.js";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await User({
      name: name,
      email: email,
      password: password,
    });

    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ message: "signup problem" });
  }
};
