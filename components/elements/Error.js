export default function Error({ data }) {
  let { message,setShowMessage } = data;

  return (
    <div className=" rounded-lg bg-red-500 p-2 px-4 gap-5 shadow-lg border border-red-900 fixed left-2 bottom-5 z-30 flex flex-row-reverse items-center">
      <h1 className=" text-white text-xl">{message}</h1>
      <button onClick={() => setShowMessage(false)} className=" text-white text-2xl">x</button>
    </div>
  );
}
