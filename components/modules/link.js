import { useState } from "react";

export default function Link({ slug }) {
  let [showModal, setShowModal] = useState(false);

  let copyHandler = () => {
    navigator.clipboard.writeText(slug);
    setShowModal(true);
    setTimeout(() => setShowModal(false), 2000);
  };
  return (
    <>
      <div className=" link flex flex-col items-center gap-4">
        <label
          htmlFor="textarea"
          className=" font-bold text-lg"
          onClick={copyHandler}
        >
          لینک پیام ناشناس شما :
        </label>
        <textarea
          id="textarea"
          className=" min-h-[55px] max-h-[150px] h-[90px] border w-[90%] text-left rounded-xl p-1"
          value={slug}
        ></textarea>
        <button
          onClick={copyHandler}
          className="mb-2 font-bold border-2 border-[#59ecd9] px-2 py-1 rounded-xl transition-all hover:scale-125"
        >
          copy
        </button>
      </div>
      <h1
        className={` text-xl font-bold bg-green-600 text-white  w-fit py-3 px-8 rounded-xl fixed bottom-4 z-40 transition-all ${
          showModal ? "right-2" : "-right-60"
        }  `}
      >
        لینک کپی شد
      </h1>
    </>
  );
}
