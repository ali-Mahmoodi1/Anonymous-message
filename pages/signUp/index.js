import SignIn from "@/components/templeates/Signup";
import { verifyToken } from "@/utils/auth";

export default function Index(props) {
  return <SignIn />;
}

export async function getServerSideProps(context) {
  let { req } = await context;
  const token1 = (await req.headers.cookie) || "messageSiteToken=";
  let token = token1.replace("messageSiteToken=", "");
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
