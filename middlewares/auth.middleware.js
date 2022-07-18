import jwt from "jsonwebtoken";

const checkUser = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];

  if (token) {
    jwt.verify(token, process.env.SECRET_TOKEN, async (err, decodedToken) => {
      if (err) {
        console.log("erreur du token");

        res
          .status(422)
          .json({ err: err, message: "erreur de verification du token" });
      } else {
        // console.log(decodedToken);

        res.locals.user = decodedToken;

        next();
      }
    });
  } else {
    return res.sendStatus(401).json({ message: "vous n'êtes pas autorisé" });
    next();
  }
};

export { checkUser };
