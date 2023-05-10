import Image from "next/image";
import Link from "next/link";

export default function Home({ isLogin }) {
  return (
    <div className="mx-auto min-h-[70vh] mt-20 mb-5 px-3 grid grid-cols-12 sm:grid-cols-11 items-center xl:container">
      <div className="m-auto px-5 col-span-12 sm:col-span-5 sm:px-2">
        <Image
          className=" w-10/12 mx-auto mb-5 sm:mb-0 sm:w-full"
          src="/images/Hello.png"
          alt="hello image"
          width={400}
          height={400}
        />
      </div>
      <div className=" col-span-12 sm:col-span-6">
        <h1 className=" font-bold text-2xl pb-4 ">
          به وبسایت پیام ناشناس خوش آمدید
        </h1>
        <p className="max-w-2xl sm:py-2">
          پس از ورود یا ثبت نام در سایت، به شما لینکی داده میشود (این لینک را
          میتوانید از داشبورد خود بردارید)؛ دوستان شما با رفتن به این لینک و
          نوشتن پیامشان برای شما، حرف هایشان را به صورت ناشناس به گوش شما
          میرسانند :)
        </p>
        <button className="bg-[#59ecd9] text-white text-xl font-bold py-3 px-2 mt-4 rounded-xl transition-all hover:shadow-lg hover:scale-105">
          <Link href={isLogin ? "/messages" : "/login"}>بزن بریم!</Link>
        </button>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  let { req } = await context;
  const token1 = (await req.headers.cookie) || "messageSiteToken=";
  let token = token1.replace("messageSiteToken=", "");
  let email = await verifyToken(token);

  if (!token || !email) {
    return {
      props: { isLogin: false },
    };
  } else {
    return {
      props: { isLogin: true },
    };
  }
}
