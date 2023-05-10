import Image from "next/image";
import { useState } from "react";
import Edit from "../modules/Edit";
import Link from "../modules/link";
import LogOut from "../modules/logOut";

export default function Dashboard({ user }) {
  let [page, setPage] = useState("link");

  return (
    <div className="min-h-[75vh] sm:min-h-[95vh] xl:min-h-[80vh] pt-16">
      <header className=" bg-[#59ecd9] h-[4.5rem] fixed w-full z-40">
        <div className="mx-auto max-w-[600px] h-full relative">
          <div className="bg-[#59ecd9] w-fit absolute right-[2%] sm:right-[10%] bottom-[-40%] p-2 border-8 rounded-full border-white">
            <Image
              className="w-[3.7rem]"
              src={user.profile}
              width={200}
              height={200}
              alt="profile"
            />
          </div>
          <div className=" absolute w-fit right-[30%] bottom-3">
            <h1 className=" font-bold text-xl text-white">{user.name}</h1>
            <h1 className=" font-bold text-white max-w-[90%] truncate">
              {user.email}
            </h1>
          </div>
        </div>
      </header>
      <div className=" shadow-lg w-full bg-white h-10 mt-[72px] pl-2 text-[#39ecd9] flex justify-end gap-3 fixed z-30">
        <button onClick={() => setPage("edit")}>edit data</button>
        <button onClick={() => setPage("logout")}>log out</button>
        <button onClick={() => setPage("link")}>link</button>
      </div>
      <div className=" relative">
        <div
          className={`transition duration-300 absolute top-[122px] left-0 w-full ${
            page !== "link" ? " i nvisible opacity-0": "visible opacity-100"
           }`}
        >
          <Link slug={user.slug} />
        </div>

        <div
          className={`transition duration-300 absolute top-[122px] left-0 w-full ${
            page !== "logout" ? " invisible opacity-0" : "visible opacity-100"
          }`}
        >
          <LogOut />
        </div>

        <div
          className={`transition duration-300 absolute top-[122px] left-0 w-full ${
            page !== "edit" ? " invisible opacity-0": "visible opacity-100"
           }`}
        >
          <Edit data={user} />
        </div>
      </div>
    </div>
  );
}
