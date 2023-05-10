import Login from "@/components/templeates/Login";
import { verifyToken } from "@/utils/auth";

export default function Index() {
  return <Login />;
}

export async function getServerSideProps(context) {
  let { req } = await context;
  const token1 = (await req.headers.cookie) || "messageSiteToken=";
  let token = await token1.replace("messageSiteToken=", "");
  let email = await verifyToken(token);

  if (!token || !email) {
    return {
      props: {},
    };
  } else {
    return {
      redirect: { destination: "/dashboard", permanent: false },
    };
  }
}
