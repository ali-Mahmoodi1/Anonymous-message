import Dashboard from "@/components/templeates/Dashboard";
import { verifyToken } from "@/utils/auth";

export default function Index({ user }) {
  return <Dashboard user={user} />;
}

export async function getServerSideProps(context) {
  let { req } = await context;
  const token1 = (await req.headers.cookie) || "messageSiteToken=";
  let token = token1.replace("messageSiteToken=", "");
  let email = await verifyToken(token);

  if (!token || !email) {
    return {
      redirect: { destination: "/login", permanent: false },
    };
  } else {
    let usersRes = await fetch(`${process.env.SERVER_LINK}/users`);
    let users = await usersRes.json();
    let user = await users.find((item) => item.email === email);
    return {
      props: { user },
    };
  }
}
