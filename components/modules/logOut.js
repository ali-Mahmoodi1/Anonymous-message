export default function LogOut() {
  let logoutHandler = () => {
    fetch("/api/logout", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((window.location.href = "/"));
  };
  return (
    <div className="h-full flex items-center">
      <div className=" mx-auto my-10 w-[90%] text-center lg:w-[700px]">
        <h1 className="text-xl font-semibold text-red-600 xl:text-2xl">
          برای خروج از حساب کاربری خود روی دکمه زیر کلیک کنید
        </h1>
        <button
          onClick={logoutHandler}
          className={` font-bold border-red-600 border-2 rounded-xl mt-6 py-1 px-3 transition-all lg:text-xl lg:py-3 lg:px-5 hover:scale-125`}
        >
          خروج
        </button>
      </div>
    </div>
  );
}
