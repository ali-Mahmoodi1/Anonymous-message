import { verify } from "jsonwebtoken";

export async function verifyToken(token) {
  try {
    let result = verify(token, process.env.SECRET_KEY);
    return result.email;
  } catch (error) {
    return false;
  }
}
