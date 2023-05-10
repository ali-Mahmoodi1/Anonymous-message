import { verifyPassword } from "@/utils/auth";
import { serialize } from "cookie";
import { sign } from "jsonwebtoken";

export default async function handler(req, res) {
  // variables
  let { email, password } = await req.body;
  let expiration = 7 * 24 * 60 * 60;

  // validation
  if (!email || !password) {
    return res.status(442).json({
      status: "feild",
      message: "email or password in not valid",
    });
  }

  // existing user
  let usersRes = await fetch(`${process.env.SERVER_LINK}/users`);
  let users = await usersRes.json();
  let user = await users.find((user) => user.email === email);
  if (!user) {
    return res.status(442).json({
      status: "feild",
      message: "There are no user with this info",
    });
  }

  // verify password
  let isValidPassword = password === user.password;
  if (!isValidPassword) {
    return res.status(442).json({
      status: "feild",
      message: "email or password is incorrect",
    });
  }

  //   token
  const token = sign({ email }, process.env.SECRET_KEY, {
    expiresIn: expiration,
  });

  res
    .setHeader(
      "Set-Cookie",
      serialize("messageSiteToken", token, {
        httpOnly: true,
        maxAge: expiration,
        path: "/",
      })
    )
    .status(200)
    .json({
      status: "success",
      message: "ok",
      data: {
        email: email,
      },
    });
}
