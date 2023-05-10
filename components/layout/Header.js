import Link from "next/link";

export default function Header({ isLogin }) {
  let linkStyle = "header__link mx-2 font-semibold text-xl transition-all";
  return (
    <>
      <header className="p-4 bg-[#59ecd9] fixed z-30 top-0 w-full h-16">
        <div className=" container mx-auto flex justify-between items-center">
          <button className=" text-white font-bold text-xl">
            <Link href="/">پیام ناشناس</Link>
          </button>
          {!isLogin ? (
            <div className="">
              <Link href="/signUp" className={linkStyle}>
                ثبت نام
              </Link>
              <Link href="/login" className={linkStyle}>
                ورود
              </Link>
            </div>
          ) : (
            <div>
              <Link href="/dashboard" className={linkStyle}>
                داشبورد
              </Link>
              <Link href="/messages" className={linkStyle}>
                پیام ها
              </Link>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
