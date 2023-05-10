export default function Message({ data }) {
  return (
    <div className=" mx-auto my-4 w-full bg-[#35ecd9] text-white shadow-xl p-3 rounded-xl overflow-hidden ">
      <h1 className=" mb-2">یه ناشناس گفته:</h1>
      <h1>{data.message}</h1>
    </div>
  );
}
