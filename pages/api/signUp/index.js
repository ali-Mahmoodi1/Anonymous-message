import { hashPassword } from "@/utils/auth";
import { serialize } from "cookie";
import { sign } from "jsonwebtoken";

export default async function handler(req, res) {
  let { email, password, name } = await req.body;
  let expiration = 7 * 24 * 60 * 60;

  // validation
  if (!email || !password || !name) {
    return res.status(442).json({
      status: "feild",
      message: "name or email or password in not valid",
    });
  }

  // existing user
  if (req.method === "POST") {
    let usersRes = await fetch(`${process.env.SERVER_LINK}/users`);
    let users = await usersRes.json();
    let userIndex = users.findIndex((user) => user.email === email);
    if (userIndex !== -1) {
      return res.status(442).json({
        status: "feild",
        message: "There is a user with this info",
      });
    }
  }

  // create slug
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghiklmnopqrstuvwxyz123456789";
  let string = `${name}-`;
  for (let index = 0; index < 25; index++) {
    let number = Math.floor(Math.random() * characters.length) - 1;
    string += characters[number];
  }
  let slug = `${process.env.LINK}/sendMesaage/${string}`;

  // add to DB
  if (req.method === "POST") {
    await fetch(`${process.env.SERVER_LINK}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
        profile: "/images/icons8-user-64.png",
        slug,
      }),
    });
  }

  // add to DB
  if (req.method === "PATCH") {
    await fetch(`${process.env.SERVER_LINK}/users/${req.body.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
        profile: "/images/icons8-user-64.png",
        slug,
      }),
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
      message: "",
      data: {
        email: email,
      },
    });
}
