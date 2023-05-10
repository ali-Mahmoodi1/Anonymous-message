import { verifyToken } from "@/utils/auth";

export default async function handler(req, res) {
  const token1 = (await req.headers.cookie) || "messageSiteToken=";
  let token = token1.replace("messageSiteToken=", "");
  let email = await verifyToken(token);

  if (!email) {
    res.status(442).json({
      isLogin: false,
    });
  } else {
    res.status(200).json({
      isLogin: true,
    });
  }
}
