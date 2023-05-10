import { verifyToken } from "@/utils/auth";
import { serialize } from "cookie";

export default async function handler(req, res) {
  if (req.method !== "GET") return;
  const token1 = (await req.headers.cookie) || "messageSiteToken=";
  let token = token1.replace("messageSiteToken=", "");
  let email = await verifyToken(token);

  if (!email) return;

  res
  .setHeader(
    "Set-Cookie",
    serialize("messageSiteToken", "", {
      httpOnly: true,
      maxAge: 1,
      path: "/",
    })
  )
  .status(200)
  .json({
    status: "success",
    message: "you are loged in",
  });
}
