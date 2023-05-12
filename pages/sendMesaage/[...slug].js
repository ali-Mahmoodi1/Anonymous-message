import Error from "@/components/elements/Error";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SendMessage({ user }) {
  let [text, setText] = useState("");
  let [showMessage, setShowMessage] = useState(false);
  let router = useRouter();

  let submitHandler = async () => {
    event.preventDefault();

    if (!text) return setShowMessage(true);
    setShowMessage(false);

    window.location.reload();
    let res = await fetch("/api/sendMessage", {
      method: "POST",
      body: JSON.stringify({
        text,
        id: user.id,
      }),
      headers: { "Content-type": "application/json" },
    });
    let data = await res.json();
  };

  return (
    <>
      <form className=" min-h-[70vh] sm:min-h-[80vh] mt-16 flex flex-col justify-center items-center gap-5 sm:gap-10">
        <h1 className=" text-center font-bold text-xl sm:text-2xl">
          پیام خود را برای "{user.name}" بنویسید
        </h1>
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="پیام..."
          className=" w-11/12 sm:w-10/12 max-w-3xl min-h-[2.5rem] border border-gray-400 py-1 px-3 rounded-lg shadow-md mx-auto "
        />
        <button
          onClick={submitHandler}
          className="bg-green-400 w-fit text-white rounded-md py-2 px-4 text-xl ring-2 ring-lime-600 transition-all duration-300 hover:ring-4 hover:scale-110"
        >
          بفرست!
        </button>
      </form>
      {showMessage && (
        <Error data={{ message: "please type a message", setShowMessage }} />
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  let slug1 = await context.query.slug;
  let slug2 = `${process.env.LINK}/sendMesaage/${slug1[0]}`;

  let res = await fetch(`${process.env.SERVER_LINK}/users`);
  let data = await res.json();
  let user = await data.find((user) => user.slug === slug2);

  return { props: { user } };
}
