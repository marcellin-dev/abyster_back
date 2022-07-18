import userModel from "../models/user.model.js";
import { generateAccessToken } from "../utils.js";

const signUp = async (req, res) => {
  console.log("sign up");
  const { email, password } = req.body;

  if (email && password) {
    try {
      await userModel.create({
        email,
        password,
        isAdmin: false,
      });

      res.status(201).json({ message: "user created" });
    } catch (err) {
      // console.log("eeeeeee ", err.code);
      if (err.code === 11000) {
        res
          .status(422)
          .send({ message: "cet utilisateur existe deja ", code: 1 });
      } else {
        res.status(500).send({ message: "une erreur inatendue" });
      }
    }
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.login(email, password);

    console.log("user ", user);

    let token = generateAccessToken(user._id, user.isAdmin, "1d");
    res.status(200).json({
      token: token,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "une erreur est survenu" });
  }
};

export { signUp, login };
