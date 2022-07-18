import jwt from "jsonwebtoken";

export function generateAccessToken(
  idUser,

  role,

  expireIn
) {
  let el = {
    id: idUser,

    role,
  };
  return jwt.sign(el, process.env.SECRET_TOKEN, {
    expiresIn: expireIn,
  });
}
